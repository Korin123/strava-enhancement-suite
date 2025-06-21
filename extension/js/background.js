/* global chrome */

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url && tab.url.indexOf('.strava.com') > -1) {
    chrome.action.enable(tabId);
  } else {
    chrome.action.disable(tabId);
  }
});
