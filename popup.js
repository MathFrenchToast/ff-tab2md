// popup.js
document.getElementById('exportButton').addEventListener('click', () => {
    browser.runtime.sendMessage({ action: 'exportTabs' });
  });
  
  // Listen for confirmation from background script
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'tabsCopied') {
      alert('Tabs copied to clipboard!');
    }
  });
  