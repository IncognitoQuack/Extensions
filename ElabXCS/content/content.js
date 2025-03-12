(async function() {
  // Dynamically load the QNA database
  const qnaDatabase = await import(chrome.runtime.getURL('data/qna.js'))
    .then(mod => mod.default)
    .catch(err => {
      console.error("Failed to load qna database", err);
      return [];
    });

  let editModeEnabled = false;
  
  // Normalizes text: trim, lowercase, collapse whitespace, and remove punctuation (except apostrophes)
  function normalizeText(str) {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^\w\s']/g, "") // remove punctuation except apostrophes
      .replace(/\s+/g, " ");
  }
  
  // Check if Ace editor exists on the page
  function hasAceEditor() {
    return document.querySelector('.ace_editor') !== null;
  }
  
  // Levenshtein distance implementation (2D DP version)
  function levenshteinDistance(a, b) {
    const m = a.length, n = b.length;
    const dp = [];
    for (let i = 0; i <= m; i++) {
      dp[i] = [];
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
          );
        }
      }
    }
    return dp[m][n];
  }
  
  // Compute similarity percentage based on Levenshtein distance
  function stringSimilarity(s1, s2) {
    const maxLen = Math.max(s1.length, s2.length);
    if (maxLen === 0) return 100;
    const dist = levenshteinDistance(s1, s2);
    return ((maxLen - dist) / maxLen) * 100;
  }
  
  // Extract all text from the current page
  function extractPageText() {
    return document.body.innerText || document.body.textContent || "";
  }
  
  // Extract problem description: look for marker and log next 52 characters as EXTfromP
  function extractProblemDescription() {
    const pageText = extractPageText();
    const markers = [
      "**Problem Description:**",
      "Problem Description:",
      "Problem:",
      "Description:",
      "Challenge:"
    ];
    for (const marker of markers) {
      const idx = pageText.indexOf(marker);
      if (idx !== -1) {
        const start = idx + marker.length;
        const snippet = pageText.substring(start, start + 52).trim();
        console.log("EXTfromP:", snippet);
        return snippet;
      }
    }
    return null;
  }
  
  // Find matching solution from QNA database using normalized strings and a threshold of 53%
  function findMatchingSolution(extractedSnippet) {
    if (!extractedSnippet) return null;
    const normExtracted = normalizeText(extractedSnippet);
    let bestMatch = null;
    let bestSim = 0;
    for (const entry of qnaDatabase) {
      const normKey = normalizeText(entry.key);
      const sim = stringSimilarity(normExtracted, normKey);
      console.log(`Comparing: "${normExtracted}" with "${normKey}" -> similarity: ${sim.toFixed(2)}%`);
      if (sim > bestSim && sim >= 53) {
        bestSim = sim;
        bestMatch = entry.content;
      }
    }
    if (bestMatch) {
      console.log(`Matching solution found with similarity ${bestSim.toFixed(2)}%`);
    }
    return bestMatch;
  }
  
  // Paste code into Ace editor with retry and overwrite confirmation
  function pasteCodeWithRetry(snippet, attempt = 0) {
    const MAX_ATTEMPTS = 5;
    if (window.ace && typeof ace.edit === "function") {
      try {
        let editorEl = document.querySelector('.ace_editor');
        if (!editorEl) throw new Error("Ace editor not found.");
        if (!editorEl.id) editorEl.id = "ace-editor";
        const editor = ace.edit(editorEl.id);
        const existing = editor.getValue();
        if (existing && existing !== snippet) {
          const ok = confirm("There is already code in the editor. Overwrite?");
          if (!ok) return;
        }
        editor.setValue(snippet, -1);
        editor.clearSelection();
        console.log("Code pasted into Ace editor");
        return;
      } catch (err) {
        console.warn("Error pasting code:", err);
      }
    }
    // Fallback: use the hidden Ace textarea if available
    const fallbackContainer = document.querySelector("#ace-editor");
    if (fallbackContainer) {
      const textInput = fallbackContainer.querySelector(".ace_text-input");
      if (textInput) {
        const existingVal = textInput.value;
        if (existingVal && existingVal !== snippet) {
          const ok = confirm("There is already code in the editor. Overwrite?");
          if (!ok) return;
        }
        textInput.value = snippet;
        textInput.dispatchEvent(new Event("input", { bubbles: true }));
        console.log("Code pasted into fallback text input");
        return;
      }
    }
    if (attempt < MAX_ATTEMPTS) {
      setTimeout(() => pasteCodeWithRetry(snippet, attempt + 1), 500);
    } else {
      console.error("Failed to paste code after multiple attempts");
    }
  }
  
  function pasteCode(snippet) {
    if (!snippet) return;
    pasteCodeWithRetry(snippet);
  }
  
  // Advanced Edit Mode:
  // Instead of injecting inline script (which violates CSP), load an external script file.
  function enableEditMode() {
    if (!hasAceEditor()) return;
    try {
      const scriptUrl = chrome.runtime.getURL('advancedEditMode.js');
      const scriptEl = document.createElement('script');
      scriptEl.src = scriptUrl;
      scriptEl.onload = function() {
        scriptEl.remove();
        console.log("Advanced edit mode script injected via external file.");
      };
      document.head.appendChild(scriptEl);
    } catch (error) {
      console.error("Error in enableEditMode:", error);
    }
  }
  
  function disableEditMode() {
    const styleEl = document.getElementById('enable-edit-mode-style');
    if (styleEl) {
      styleEl.remove();
    }
    console.log("Advanced edit mode disabled.");
  }
  
  // Listen for messages from background or popup scripts
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "pasteText") {
      pasteCode(message.text);
    } else if (message.action === "toggleEditMode") {
      editModeEnabled = message.enabled;
      if (editModeEnabled) enableEditMode();
      else disableEditMode();
    } else if (message.action === "extractProblem") {
      const snippet = extractProblemDescription();
      const solution = findMatchingSolution(snippet);
      if (solution) {
        chrome.runtime.sendMessage({
          action: "foundSolution",
          solution: solution
        });
      } else {
        console.log("No matching solution found");
      }
    } else if (message.action === "extractCustomSnippet") {
      const initialPhrase = message.initialPhrase;
      const numChars = parseInt(message.numChars, 10);
      const fullText = extractPageText();
      const lowerFullText = fullText.toLowerCase();
      const lowerPhrase = initialPhrase.toLowerCase();
      const index = lowerFullText.indexOf(lowerPhrase);
      let snippet = "";
      if (index !== -1) {
        snippet = fullText.substr(index, initialPhrase.length + numChars);
      } else {
        snippet = "Phrase not found in page text.";
      }
      chrome.runtime.sendMessage({
        action: "customSnippetExtracted",
        snippet: snippet
      });
    } else if (message.action === "contribute") {
      // New contribution action
      const extractedKey = extractProblemDescription();
      const matchingSolution = findMatchingSolution(extractedKey);
      if (matchingSolution) {
        // If a matching solution is found, notify that the question already exists.
        sendResponse({ exists: true });
      } else {
        let editorContent = "";
        if (window.ace && typeof ace.edit === "function") {
          let editorEl = document.querySelector('.ace_editor');
          if (editorEl) {
            if (!editorEl.id) editorEl.id = "ace-editor";
            const editor = ace.edit(editorEl.id);
            editorContent = editor.getValue();
          }
        }
        // If no content from the Ace editor, try fallback method.
        if (!editorContent) {
          const fallbackContainer = document.querySelector("#ace-editor");
          if (fallbackContainer) {
            const textInput = fallbackContainer.querySelector(".ace_text-input");
            if (textInput) {
              editorContent = textInput.value;
            }
          }
        }
        sendResponse({ exists: false, key: extractedKey, editorContent: editorContent });
      }
      return true;
    }
  });
  
  // On load, check if edit mode is enabled from storage
  chrome.storage.local.get("editModeEnabled", function(result) {
    if (result.editModeEnabled) {
      editModeEnabled = true;
      enableEditMode();
    }
  });
  
  // Run problem extraction 1 second after load
  setTimeout(function() {
    const snippet = extractProblemDescription();
    const solution = findMatchingSolution(snippet);
    if (solution) {
      chrome.runtime.sendMessage({
        action: "foundSolution",
        solution: solution
      });
    }
  }, 1000);
  
  // Observe DOM changes to detect if Ace editor is added later
  const observer = new MutationObserver(function(mutations) {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length && hasAceEditor()) {
        if (editModeEnabled) enableEditMode();
        break;
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  
  if (hasAceEditor() && editModeEnabled) {
    enableEditMode();
  }
})();
