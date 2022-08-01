function onError(error) {
  console.log(`Error: ${error}`);
}

function logOnErrorOccurred(details) {
  let failedUrl = details.url;
  let fun = function(tabInfo) {
  	if(failedUrl != null) {
		if(failedUrl === tabInfo.url) {
			console.log("Scheduling tab for reload (client error): " + details.tabId);
			window.setTimeout(function() {
  				browser.tabs.reload(details.tabId, {bypassCache: true})
  			}, 30000);
		}
	} 
  }

  let gettingCurrent = browser.tabs.get(details.tabId);
	gettingCurrent.then(fun, onError);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred);