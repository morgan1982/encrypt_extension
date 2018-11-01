console.log("-- inside content -- ");


chrome.runtime.onMessage.addListener((msg, sender, response) => {

	if (msg.text === "report_back") {
		console.log("message send to content")
	}
} )