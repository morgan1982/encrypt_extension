console.log("-- inside content -- ");

let res = document.getElementById('resolution');

function extractSupplier (str) {

	let re = /u2f.*=/gi;
	let supplierHash = re.exec(str);
	return supplierHash;
}


chrome.runtime.sendMessage({ from: "content" });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

	if (msg.job === "encoding") {
		console.log("message send to content from back: ", msg.cipher);

		// check if there is a record to the resolution
		if (!extractSupplier(res.value)) {

			// put it insdide a function to use callback
			let { cipher } = msg;
			let encryptedText = ` \n\n "dont delete this line"\n ${ cipher } `

			res.value += encryptedText;
			alert("supplier is encrypted..");
		}else {
			alert("there is a hashed string inside resolution, please use decode.")
		}

	}

	if (msg.job === "decoding") {

		let rawStr = res.value;



		// extract the hashed string;
		let rawhashedStr = extractSupplier(rawStr);
		let hashedStr= rawhashedStr[0];


		sendResponse({
			source: "irepair_crm",
			hashedStr
		})


	}

})
