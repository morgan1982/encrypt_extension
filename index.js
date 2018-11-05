// test the animation


// btn.addEventListener('click', () => {
// 		console.log("done");
// 		container.className += ' active';
// })

// message passing
console.log("popup")
chrome.runtime.sendMessage("hello from context");

let encode = document.querySelector('.encode');
let decode = document.querySelector('.decode');
console.log(decode);

function getValue() {
	let box = document.querySelector('#select');
	let value = box.options[box.selectedIndex].text;
	return value
}

// encoding button
encode.addEventListener('click', () => {
	let supplier= getValue();

	let message = {
		source: "encoder",
		supplier 
	}
	chrome.runtime.sendMessage(message, (response) => {
		// console.log(response.message);
	})
})


// decoding button
decode.addEventListener('click', () => {

	let message = {
		source: "decoder"
	}

	chrome.runtime.sendMessage(message, (response) => {
		
		let container = document.querySelector('.supplier-container');
		let supplierText = document.querySelector('.supplier');
		let { supplier } = response;

		console.log(`the suplier came: ${ supplier }`)
		supplierText.innerHTML = supplier;
		container.className += " active"

	})
})