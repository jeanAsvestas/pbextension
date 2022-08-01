function getCurrentWindow() {
    return browser.windows.getCurrent({ populate: true })
}

function getCurrentTabId(currentWindow) {
    return currentWindow.tabs[0].id
}

function createWindow(currentWindow) {
    // CURRENT TAB
    let current_tab = getCurrentTabId(currentWindow)
    
    let new_window = browser.windows.create({
        tabId: current_tab,
        state: "fullscreen",
        // type: "panel"
    })

    // REMOVE ALL TABS
    new_window.then(function(id) {
        for(tab of currentWindow.tabs) {
            // REMOVE OTHERS AND NO NEW NEW WINDOW
            if(id != tab.id) {
                browser.windows.remove(tab.id)
                    .then(function(tab_removed) {
                        console.log(tab_removed)
                    })
            }
        }
    })
}

getCurrentWindow().then(function(currentWindow) {
    createWindow(currentWindow)
})