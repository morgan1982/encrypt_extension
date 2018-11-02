// chrome.runtime.onInstalled.addListener( () => {
// 	chrome.storage.sync.set({ color: "#3aa757" }, () => {

// 	})
// })
console.log("test")

// console.log(CryptoJS.AES);

let message = "how are you?"
let key = "rooster"

// Encrypt
let cipherText = CryptoJS.AES.encrypt(message, key).toString();

//Decrypt
let bytes = CryptoJS.AES.decrypt(cipherText, key);
let originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(cipherText, "\n");
console.log(originalText);

