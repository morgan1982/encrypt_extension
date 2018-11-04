

// message passing
console.log("popup")
chrome.runtime.sendMessage("hello from context");

let encode = document.querySelector('.encode');
let decode = document.querySelector('.decode');
console.log(decode);

function getValue() {
	let box = document.querySelector('#select');
	let value = box.options[box.selectedIndex].text;
	console.log(value);	
}


encode.addEventListener('click', () => {
	getValue();
	chrome.runtime.sendMessage({message: "for encode"}, (response) => {
		console.log(response.message);
	})
})

decode.addEventListener('click', () => {
	chrome.runtime.sendMessage({message: "for decode"}, (response) => {
		console.log(response.message);
	})
})