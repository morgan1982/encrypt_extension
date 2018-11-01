// chrome.runtime.onInstalled.addListener( () => {
// 	chrome.storage.sync.set({ color: "#3aa757" }, () => {

// 	})
// })
console.log("test")

// console.log(CryptoJS.AES);

let message = "how are you?"
let key = "rooster"

let cipherText = CryptoJS.AES.encrypt(message, key);

console.log(cipherText);

