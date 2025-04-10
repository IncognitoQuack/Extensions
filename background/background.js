chrome.runtime.onInstalled.addListener(function() {
    console.log('ElabXCS extension installed');
    
    // Initialize storage with default values
    chrome.storage.local.set({
      editModeEnabled: false,
      lastText: ''
    });
  });