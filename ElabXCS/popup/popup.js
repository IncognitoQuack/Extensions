// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const pasteBtn = document.getElementById('pasteBtn');
    const editToggle = document.getElementById('editToggle');
    const extractBtn = document.getElementById('extractBtn');
    
    // Load saved state
    chrome.storage.local.get(['editModeEnabled', 'lastText'], function(result) {
      if (result.editModeEnabled !== undefined) {
        editToggle.checked = result.editModeEnabled;
      }
      if (result.lastText) {
        textInput.value = result.lastText;
      }
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
    });
    
    // Handle extract button click
    extractBtn.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          action: 'extractProblem'
        });
      });
    });
    
    // Listen for messages from content script
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
      if (message.action === 'foundSolution') {
        textInput.value = message.solution;
        
        // Save the solution for future use
        chrome.storage.local.set({ lastText: message.solution });
        
        // Show a notification
        showNotification('Solution found!', 'A matching solution has been loaded.');
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