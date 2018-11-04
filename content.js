console.log("-- inside content -- ");


chrome.runtime.sendMessage({ from: "content" });

chrome.runtime.onMessage.addListener((msg, sender, response) => {

	if (msg.text === "report_back") {
		console.log("message send to content")
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