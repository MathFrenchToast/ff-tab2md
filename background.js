// background.js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'exportTabs') {
    browser.tabs.query({ currentWindow: true })
      .then((tabs) => {
        const formattedTabs = tabs.map(tab => `- ${tab.title}`).join('\n');
        return navigator.clipboard.writeText(formattedTabs);
      })
      .then(() => {
        sendResponse({ action: 'tabsCopied' });
      })
      .catch((error) => {
        console.error('Error exporting tabs:', error);
      });
    return true; // Indicates that we'll send a response asynchronously
  }
});
