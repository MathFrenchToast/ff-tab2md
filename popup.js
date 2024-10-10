// popup.js
document.addEventListener('DOMContentLoaded', function() {
  console.log("install evt listener");

  document.getElementById('exportButton').addEventListener('click', () => {
    console.log('Export button clicked.');
      const sending = browser.runtime.sendMessage({ action: 'exportTabs' });
      sending.then((message) => {
        document.getElementById('txtreturn' ).innerHTML = 'Tabs copied to clipboard!';      
        // dismiss text
        setTimeout(function(){
          document.getElementById("txtreturn").innerHTML = '';
         }, 3000);  

      });
    });
  
  // Listen for confirmation from background script -- not working need to check 
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'tabsCopied') {
      document.getElementById('txtreturn' ).innerHTML = 'Ok';
      setTimeout(function(){
        document.getElementById("txtreturn").innerHTML = '';
       }, 3000);
    }
  });
});