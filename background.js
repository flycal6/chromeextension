chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://moneykatz.com/";
  chrome.tabs.create({ url: newURL });
});