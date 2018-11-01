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



// EXECUTE MULTIPLE SCRITPS
// function executeScripts(tabId, injectDetailsArray)
// {
//     function createCallback(tabId, injectDetails, innerCallback) {
//         return function () {
//             chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
//         };
//     }

//     var callback = null;

//     for (var i = injectDetailsArray.length - 1; i >= 0; --i)
//         callback = createCallback(tabId, injectDetailsArray[i], callback);

//     if (callback !== null)
//         callback();   // execute outermost function
// }

// executeScripts(null, [
// 		{ file: "./core.js"},
// 		{ file: "./aes.js"}
// 	])

// console.log(CryptoJS)

// chrome.browserAction.onClicked.addListener(function (tab) {

// 	console.log("running the crypto function")
// 	// alert("--inside the script loader");
//     executeScripts(null, [
//         { file: "./core.js" },
//         { file: "./aes.js" }
//     ])

// 	alert(CryptoJS.AES);

// });



// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }

// document.getElementById('clickme').addEventListener('click', hello);