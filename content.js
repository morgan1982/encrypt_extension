console.log("-- inside content -- ");

let res = document.getElementById('resolution');
// add sounds
let sound = null;

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
			function encryption () {

				return new Promise((resolve, reject) => {

					let { cipher } = msg;
					let encryptedText = ` \n\n "dont delete this line"\n ${ cipher } `

					// sets the value to the textarea
					res.value += encryptedText;
					if (cipher) {
						resolve("encrypted")
					} else {
						reject("cannot fetch cipher");
					}
				})
			}

			encryption().then(() => {
				// alert("supplier is encrypted..!");
				chrome.runtime.sendMessage({
					msg: "encryption_completed"
					})
				})

		}else {
			// if there is allready a hash to the res
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
