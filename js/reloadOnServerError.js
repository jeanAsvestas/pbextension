browser.webRequest.onCompleted.addListener(tryTheRequest, {urls: ['<all_urls>']})

function tryTheRequest(details) {
    if (details.statusCode == 404){
        console.log(details.statusCode)
    }
	if (details.statusCode == 404){
		console.log(details.statusCode)
		console.log("Scheduling tab for reload (server error): " + details.tabId);
		window.setTimeout(function() {
			browser.tabs.reload(details.tabId, {bypassCache: true})
		}, 30000);
	} 
};