//
chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.executeScript({
    code: `document.getElementById('omnibox').style.backgroundColor = 'red';`,
  });
});
