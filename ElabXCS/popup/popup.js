document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const pasteBtn = document.getElementById('pasteBtn');
  const editToggle = document.getElementById('editToggle');
  const extractBtn = document.getElementById('extractBtn');
  const customSnippetSection = document.getElementById('customSnippetSection'); 
  const activationInput = document.getElementById('activationInput');
  const activateBtn = document.getElementById('activateBtn');
  const themeEl = document.getElementById('theme'); // admin toggle for dark mode

  function updateExtractBtnTitle() {
    if (extractBtn.disabled) {
      extractBtn.title = "Enter activation code to enable this feature.";
      extractBtn.style.cursor = "not-allowed";
      extractBtn.style.opacity = "0.69";
    } else {
      extractBtn.removeAttribute("title");
      extractBtn.style.cursor = "";
      extractBtn.style.opacity = "";
    }
  }

  extractBtn.disabled = true;
  updateExtractBtnTitle();
  // editToggle.disabled = true;

  // Constants activation
  const encryptionKey = '2L3d!#@$F@Fq$DFgdGW';
  // admin 
  const persistentEncryptedCode = 'U2FsdGVkX18aMXPfCX0WJZRi1zA+liBDvpVjrmJ0CPQ=';
  // user 
  const sessionEncryptedCode = 'U2FsdGVkX1+pl3IYcZS5yIDZt5H8WWkpUYZuCBLNXqU=';
  const sessionEncryptedCode1 = 'U2FsdGVkX1+f6mq/Tq5X3dideunJ871e9TZN3websbk=';

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

  // Function to enable features (called after successful activation)
  function enableFeatures() {
    extractBtn.disabled = false;
    updateExtractBtnTitle();
    editToggle.disabled = false;
    document.querySelector('.activation-section').style.display = 'none';
  }

  // Function to set up admin features (like dark mode toggle)
  function setupAdminFeatures() {
    if (themeEl) {
      themeEl.style.cursor = 'pointer'; // make clickable
      themeEl.addEventListener('click', function() {
        // Toggle dark mode by adding or removing the "dark-mode" class on the body element
        document.body.classList.toggle('dark-mode');
      });
    }
  }

  // Check if activation has been done previously via session storage (only session storage is used now)
  chrome.storage.session.get(['activationDone', 'admin'], function(result) {
    if (result.activationDone) {
      enableFeatures();
      if (result.admin) {
        setupAdminFeatures();
      }
    }
  });

  // Handle activation button click
  activateBtn.addEventListener('click', function() {
    const userCode = activationInput.value.trim();
    const persistentCode = decryptActivationCode(persistentEncryptedCode, encryptionKey);
    const sessionCode = decryptActivationCode(sessionEncryptedCode, encryptionKey);
    const sessionCode1 = decryptActivationCode(sessionEncryptedCode1, encryptionKey);

    if (userCode === persistentCode) {
      // Admin activation: even though admin activation is treated as session activation, mark admin privileges.
      enableFeatures();
      showNotification('Activation Successful', 'Admin privileges enabled.', 'green');
      chrome.storage.session.set({ activationDone: true, admin: true });
      setupAdminFeatures();
    } else if (userCode === sessionCode) {
      // Session activation: enable features as a regular user.
      enableFeatures();
      showNotification('Activation Successful', 'Session activation enabled.', 'green');
      chrome.storage.session.set({ activationDone: true, admin: false });
    } else if (userCode === sessionCode1) {
      // Session activation: enable features as a regular user.
      enableFeatures();
      showNotification('Activation Successful', 'Session activation enabled.', 'green');
      chrome.storage.session.set({ activationDone: true, admin: false });
    } else {
      showNotification('Activation Failed', 'Incorrect activation code.', 'red');
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
            showNotification('Error', 'Could not retrieve contribution data from the page.', 'red');
            return;
          }
          if (response.exists) {
            showNotification('Already Exists', 'This question already exists in the database.', 'red');
          } else {
            const extractedKey = response.key;
            const editorContent = response.editorContent;
            const contributionData = {
              key: extractedKey,
              content: `\n${editorContent}\n`
            };
            const contributionText = JSON.stringify(contributionData, null, 2);
            navigator.clipboard.writeText(contributionText).then(function() {
              showNotification('Contribution Copied', 'Contribution data has been copied to clipboard.', 'green');
            }).catch(function(err) {
              showNotification('Error', 'Failed to copy to clipboard.', 'red');
            });
          }
        });
      });
    });
  }

  // Listen for messages from content script
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'foundSolution') {
      if (!message.solution) {
        showNotification('Solution Not Found', 'No matching solution found.', 'red');
        return;
      }
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
      // Replace any literal null characters (code 0) with the two-character sequence "\0"
      fixedCode = fixedCode.replace(/\x00/g, '\\0');
      textInput.value = fixedCode;
      // Save the solution for future use
      chrome.storage.local.set({ lastText: fixedCode });
      // Show a notification for successful solution
      showNotification('Solution found!', 'And the answer has been loaded.', 'green');
    }
    if (message.action === 'customSnippetExtracted') {
      const customSnippetOutput = document.getElementById('customSnippetOutput');
      customSnippetOutput.value = message.snippet;
    }
  });

  (function () {
    const watermark = `
  ╔══════════════════════════════════════════════════╗
  ║                                                  ║
  ║               © 2025 IncognitoQuack              ║
  ║      All rights reserved. Unauthorized use       ║
  ║      or distribution is strictly prohibited.     ║
  ║                                                  ║
  ║     This project is made by @Cheetah and is      ║
  ║          personal intellectual property.         ║
  ║                                                  ║
  ║      For any inquiries, please do hesitate       ║
  ║              and don't contact us.               ║
  ║                                                  ║
  ║       Special thanks to the contributors:        ║ 
  ║       ->  @Sher                                  ║
  ║                                                  ║
  ╚══════════════════════════════════════════════════╝
  `;
  
    console.log(watermark);
  
    const originalConsoleLog = console.log;
    console.log = function (...args) {
      originalConsoleLog.apply(console, args);
  
      if (args.length > 0) {
        const lastArg = args[args.length - 1];
  
        if (lastArg === 'admin') {
          originalConsoleLog('@Cheetah Ji');
        } else if (lastArg === 'contact') {
          originalConsoleLog('mat karna');
        } else if (lastArg === 'Code') {
          originalConsoleLog('CJ75');
        }
      }
    };
  })();

  function showNotification(title, message, type = 'green') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    let bgColor;
    if (type === 'red') {
      bgColor = '#f87171'; // red tone for errors or negative messages
    } else {
      bgColor = '#4ade80'; // green tone for success messages
    }
    notification.style.backgroundColor = bgColor;
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