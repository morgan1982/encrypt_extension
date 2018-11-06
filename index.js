chrome.runtime.sendMessage("hello from context");

let encode = document.querySelector('.encode');
let decode = document.querySelector('.decode');
let container = document.querySelector('.supplier-container');

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

		let supplierText = document.querySelector('.supplier');
		let { supplier } = response;

		let classes = container.className

		// checks if there is a class deactivate
		let re = /deactivate/gi;
		let reTest = re.test(classes);

		if (reTest) {
			container.classList.remove('deactivate');
		}

		supplierText.innerHTML = supplier;
		container.className += " active"

	})
})

container.addEventListener('click', () => {

	container.classList.remove("active");
	container.className += " deactivate"
})

