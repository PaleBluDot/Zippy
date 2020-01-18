/* ==============================
@Zip Converter
============================== */
const form = document.getElementById('zip-converter');
const input = document.getElementById('zip-input');
const output = document.getElementById('zip-output');
const submitBtn = document.getElementById('submit-button');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const inputVal = input.value;
	const res = inputVal.split(',');

	for (let i = 0; i < res.length; i++) {
		// Trim the excess whitespace.
		res[i] = res[i].replace(/^\s*/, '').replace(/\s*$/, '');
		// Add additional code here, such as:
		const convertedZips = `"${res[i]}"|`;
		const zips = convertedZips;

		output.innerHTML += zips;
	}

	const removePipe = output.textContent.slice(0, -1);
	output.innerHTML = removePipe;

	//clear textarea on submit
	input.value = '';
});

// FIX: Instead of having it window reload -- get this to clear input and output without reloading the page.
form.addEventListener('reset', function(e) {
	location.reload();
});

// TODO: Add A Copy Button
