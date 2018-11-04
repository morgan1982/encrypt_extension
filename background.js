// chrome.runtime.onInstalled.addListener( () => {
// 	chrome.storage.sync.set({ color: "#3aa757" }, () => {

// 	})
// })

let message = "how are you?"
let key = "rooster"

// Encrypt
let cipherText = CryptoJS.AES.encrypt(message, key).toString();

//Decrypt
let bytes = CryptoJS.AES.decrypt(cipherText, key);
let originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(cipherText, "\n");
console.log(originalText);


let contentTabId;

chrome.runtime.onMessage.addListener(function(msg, sender) {

	if (msg.from == "content") {
			// crm id
		contentTabId = sender.tab.id

		chrome.tabs.sendMessage(contentTabId, {
			from: "background",
			encodedString: cipherText
		})
	}
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	if (request.message === "for encode") {
		console.log("from encode")
		sendResponse({message: "from the abbys"})
	}
	if (request.message === "for decode") {
		console.log("from decode")
		sendResponse({message: "from the abbys"})
	}
})
