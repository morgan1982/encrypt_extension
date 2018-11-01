let input = document.querySelector("#name").value;

document.querySelector(".test").innerHTML = "einai to test";
// document.location("http://facebook.com"); // redirects


// background scritps have accees to all chrome apis
// run in isolated environment



// message passing
chrome.runtime.sendMessage("hello from context");
// browserActionsetBadgeText("kolo")

// chrome.browserAction.onClicked(function (tab) {

// 	console.log("test if the script load function is running")
// 	chrome.tabs.executeScript({
// 		file: './js/test.js'
// 	})
// })


// runs normally!
chrome.tabs.executeScript({
	// file: './js/test.js'
	file: ./aes.js
})

alert()

// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }

// document.getElementById('clickme').addEventListener('click', hello);