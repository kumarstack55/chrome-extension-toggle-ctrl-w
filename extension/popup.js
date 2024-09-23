function loadCheckboxStateAndSetCheckbox(enabledCheckboxElement) {
  chrome.storage.sync.get('enabled', function(data) {
    if (data.enabled !== undefined) {
      enabledCheckboxElement.checked = data.enabled;
    }
  });
}

function saveCheckboxState(element) {
  const isEnabled = element.checked;
  chrome.storage.sync.set({enabled: isEnabled}, function() {
    console.log('Checkbox state saved: ' + (isEnabled ? 'Enabled' : 'Disabled'));
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const enabledCheckboxElement = document.getElementById('enabledCheckbox')
  if (!enabledCheckboxElement) {
    throw "!enabledCheckboxElement"
  }

  loadCheckboxStateAndSetCheckbox(enabledCheckboxElement)

  enabledCheckboxElement.addEventListener('change', function() {
    saveCheckboxState(this)
  });

});
