/* ==============================
@Zip Converter
============================== */
const form = document.getElementById('zip-converter');
const input = document.getElementById('zip-input');
const output = document.getElementById('zip-output');
const submitBtn = document.getElementById('submit-button');
const headerMsg = document.getElementById('header-message');
const headerMsgClose = document.getElementById('close-header');

headerMsgClose.addEventListener('click', function() {
	headerMsg.style.display = 'none';
});

form.addEventListener('submit', e => {
	e.preventDefault();
	const inputVal = input.value;
	const res = inputVal.split(',');

	for (let i = 0; i < res.length; i++) {
		res[i] = res[i].replace(/^\s*/, '').replace(/\s*$/, '');
		const convertedZips = `"${res[i]}"|`;

		output.innerHTML += convertedZips;
	}

	const removePipe = output.textContent.slice(0, -1);
	output.innerHTML = removePipe;
	input.value = '';
});

form.addEventListener('reset', e => {
	location.reload();
	e.preventDefault();
});
