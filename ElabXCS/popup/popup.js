document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const pasteBtn = document.getElementById('pasteBtn');
  const editToggle = document.getElementById('editToggle');
  const extractBtn = document.getElementById('extractBtn');
  const customSnippetSection = document.getElementById('customSnippetSection'); 
  const activationInput = document.getElementById('activationInput');
  const activateBtn = document.getElementById('activateBtn');

  function updateExtractBtnTitle() {
    if (extractBtn.disabled) {
      extractBtn.title = "Enter activation code to enable this feature.";
    } else {
      extractBtn.removeAttribute("title");
    }
  }

  extractBtn.disabled = true;
  updateExtractBtnTitle();
  // editToggle.disabled = true;

  // Constants activation
  const encryptionKey = '2L3d!#@$F@Fq$DFgdGW';
  const encryptedCode = 'U2FsdGVkX18aMXPfCX0WJZRi1zA+liBDvpVjrmJ0CPQ=';

  // Function to decrypt activation code using CryptoJS
  function decryptActivationCode(encrypted, key) {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  }

  // Check if activation has been done previously; if so, enable features and hide activation section
  chrome.storage.local.get(['activationDone'], function(result) {
    if (result.activationDone) {
      extractBtn.disabled = false;
      updateExtractBtnTitle();
      editToggle.disabled = false;
      document.querySelector('.activation-section').style.display = 'none';
    }
  });

  // Handle activation button click
  activateBtn.addEventListener('click', function() {
    const userCode = activationInput.value.trim();
    const actualCode = decryptActivationCode(encryptedCode, encryptionKey);
    if (userCode === actualCode) {
      // Activation successful: enable blocked elements
      extractBtn.disabled = false;
      editToggle.disabled = false; // Enable editToggle after successful activation
      updateExtractBtnTitle(); // Update title on success
      showNotification('Activation Successful', 'Features unlocked.');
      // Hide the activation section and save activation state
      document.querySelector('.activation-section').style.display = 'none';
      chrome.storage.local.set({ activationDone: true });
    } else {
      showNotification('Activation Failed', 'Incorrect activation code.');
    }
  });

  // Function to update visibility of the custom snippet section based on Edit Mode
  function updateCustomSnippetVisibility() {
    if (editToggle.checked) {
      customSnippetSection.style.display = 'block';
    } else {
      customSnippetSection.style.display = 'none';
    }
  }

  // Load saved state
  chrome.storage.local.get(['editModeEnabled', 'lastText'], function(result) {
    if (result.editModeEnabled !== undefined) {
      editToggle.checked = result.editModeEnabled;
    }
    if (result.lastText) {
      textInput.value = result.lastText;
    }
    updateCustomSnippetVisibility();
  });

  // Handle paste button click
  pasteBtn.addEventListener('click', function() {
    const text = textInput.value;
    // Save the text for future use
    chrome.storage.local.set({ lastText: text });
    // Send message to content script to paste text
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: 'pasteText', 
        text: text 
      });
    });
  });

  // Handle edit mode toggle
  editToggle.addEventListener('change', function() {
    const isEnabled = editToggle.checked;
    // Save the toggle state
    chrome.storage.local.set({ editModeEnabled: isEnabled });
    // Send message to content script to toggle edit mode
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: 'toggleEditMode', 
        enabled: isEnabled 
      });
    });
    updateCustomSnippetVisibility();
  });

  // Handle extract button click (for problem extraction)
  extractBtn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: 'extractProblem'
      });
    });
  });

  // New: Handle custom snippet extraction button click
  const extractSnippetBtn = document.getElementById('extractSnippetBtn');
  extractSnippetBtn.addEventListener('click', function() {
    const initialPhraseInput = document.getElementById('initialPhraseInput').value;
    const numCharsInput = document.getElementById('numCharsInput').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'extractCustomSnippet',
        initialPhrase: initialPhraseInput,
        numChars: numCharsInput
      });
    });
  });

  const contributeBtn = document.getElementById('contributeBtn');
  if (contributeBtn) {
    contributeBtn.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'contribute' }, function(response) {
          if (!response) {
            showNotification('Error', 'Could not retrieve contribution data from the page.');
            return;
          }
          if (response.exists) {
            showNotification('Already Exists', 'This question already exists in the database.');
          } else {
            const extractedKey = response.key;
            const editorContent = response.editorContent;
            const contributionData = {
              key: extractedKey,
              content: `\n${editorContent}\n`
            };
            const contributionText = JSON.stringify(contributionData, null, 2);
            navigator.clipboard.writeText(contributionText).then(function() {
              showNotification('Contribution Copied', 'Contribution data has been copied to clipboard.');
            }).catch(function(err) {
              showNotification('Error', 'Failed to copy to clipboard.');
            });
          }
        });
      });
    });
  }

  // Listen for messages from content script
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'foundSolution') {
      // Process the solution to preserve actual line breaks,
      // but escape newline characters inside string literals.
      let code = message.solution;
      let fixedCode = "";
      let inString = false;
      let escape = false;
      for (let i = 0; i < code.length; i++) {
        let c = code[i];
        if (inString) {
          if (escape) {
            fixedCode += c;
            escape = false;
          } else {
            if (c === '\\') {
              fixedCode += c;
              escape = true;
            } else if (c === '"') {
              fixedCode += c;
              inString = false;
            } else if (c === '\n') {
              fixedCode += "\\n";
            } else {
              fixedCode += c;
            }
          }
        } else {
          if (c === '"') {
            inString = true;
          }
          fixedCode += c;
        }
      }
      textInput.value = fixedCode;
      // Save the solution for future use
      chrome.storage.local.set({ lastText: fixedCode });
      // Show a notification
      showNotification('Solution found!', 'A matching solution has been loaded.');
    }
    if (message.action === 'customSnippetExtracted') {
      const customSnippetOutput = document.getElementById('customSnippetOutput');
      customSnippetOutput.value = message.snippet;
    }
  });

  // Function to show notification
  function showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    `;
    document.body.appendChild(notification);
    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 3000);
  }
});
