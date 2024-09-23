function closeActiveTab() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const activeTab = tabs[0];
    const activeTabId = activeTab.id
    chrome.tabs.remove(activeTabId);
  });
}

function closeActiveTabIfEnabled() {
  chrome.storage.sync.get('enabled', function(data) {
    const isEnabled = (data.enabled !== undefined) && data.enabled
    if (isEnabled) {
      console.log(`Command is enabled. Close the active tab.`);
      closeActiveTab();
    } else {
      console.log(`Command is not enabled. Do nothing.`);
    }
  });
}

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" triggered`);
  if (command === 'command-ctrl-w') {
    closeActiveTabIfEnabled()
  }
});
