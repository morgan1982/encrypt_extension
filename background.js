const key = "rooster"


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


	// ENCODER
	if (request.source === "encoder") {

		let supplierStr = request.supplier;
		console.log(`supllier source: ${ supplierStr }`);
		// encode the text
		let cipher = CryptoJS.AES.encrypt(supplierStr, key).toString();
		console.log(`encryptedText: ${ cipher }`);

		// send data to content
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

	// DECODER
	if (request.source === "decoder") {

		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

			let message = {
				job: "decoding",
				source: "background"
			}

			chrome.tabs.sendMessage(tabs[0].id, message, (response) => {

				let { hashedStr } = response;
				let bytes = CryptoJS.AES.decrypt(hashedStr, key);
				let supplier = bytes.toString(CryptoJS.enc.Utf8);

				sendResponse({
					source: "from decoder",
					supplier
				})

			})
		})
	}
	return true
})

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

// 	if (request.source === "encoder") {
// 		console.log("from encode")
// 		sendResponse({message: "from the abbys"})
// 	}
// 	if (request.message === "for decode") {
// 		console.log("from decode")
// 		sendResponse({message: "from the abbys"})
// 	}
// })
