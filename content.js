console.log("-- inside content -- ");

let res = document.getElementById('resolution');


chrome.runtime.sendMessage({ from: "content" });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

	if (msg.job === "encoding") {
		console.log("message send to content from back: ", msg.cipher);
		
		let { cipher } = msg;
		let encryptedText = ` \n\n "dont delete this line"\n ${ cipher } `

		res.value += encryptedText;
	}

	if (msg.job === "decoding") {

		let rawStr = res.value;

		function extractSupplier (str) {

			let re = /u2f.*=/gi;
			let supplierHash = re.exec(str);
			return supplierHash[0]
		}

		// extract the hashed string;
		let hashedStr = extractSupplier(rawStr);
		console.log(hashedStr);

		sendResponse({
			source: "irepair_crm",
			hashedStr
		})


	}

})
