const key = "rooster"


//Decrypt
// let bytes = CryptoJS.AES.decrypt(cipherText, key);
// let originalText = bytes.toString(CryptoJS.enc.Utf8);



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if (request.source === "encoder") {

		let supplierStr = request.supplier;
		console.log(`supllier source: ${ supplierStr }`);
		// encode the text
		let cipher = CryptoJS.AES.encrypt(supplierStr, key).toString();
		console.log(`encryptedText: ${ cipher }`);

		chrome.tabs.query({ active:true, currentWindow: true }, (tabs) => {

			let message = {
				job: "encoding",
				source: "background",
				cipher 
			}

			chrome.tabs.sendMessage(tabs[0].id, message, (response) => {

			})
		})

	}
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	if (request.source === "encoder") {
		console.log("from encode")
		sendResponse({message: "from the abbys"})
	}
	if (request.message === "for decode") {
		console.log("from decode")
		sendResponse({message: "from the abbys"})
	}
})
