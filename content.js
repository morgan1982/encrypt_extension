console.log("-- inside content -- ");


chrome.runtime.sendMessage({ from: "content" });

chrome.runtime.onMessage.addListener((msg, sender, response) => {

	if (msg.job === "encoding") {
		console.log("message send to content from back: ", msg.cipher);
		
		let { cipher } = msg;
		let res = document.getElementById('resolution');
		let encryptedText = ` \n\n "dont delete this line"\n ${ cipher } `

		res.value += encryptedText;
	}
} )

chrome.runtime.onMessage.addListener((msg, sender, response) => {
	if (msg.from === "background") {

		console.log(msg.encodedString);
		let res = document.getElementsByName("resolution");
		// console.log("res", res);
		// res.innerHTML += msg.encodedString;
	}
})