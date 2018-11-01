// chrome.runtime.onInstalled.addListener( () => {
// 	chrome.storage.sync.set({ color: "#3aa757" }, () => {

// 	})
// })
console.log("test")
console.log(crypto)

function parseDom(domcnt) {
	console.log(domcnt)
}


chrome.browserAction.onClicked.addListener(() => {
	console.log("clicked")
	chrome.tabs.sendMessage({ text: "report_back" }, parseDom)
})