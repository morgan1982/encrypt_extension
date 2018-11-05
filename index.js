

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

		let { supplier } = response;
		console.log(`the suplier came: ${ supplier }`)


		// document.querySelector(".sypplier-container").classList.toggle(active)
	})
})