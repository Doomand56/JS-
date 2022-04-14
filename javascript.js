// Вычесление суммы в степени

document.querySelector('.button').onclick = function () {
	let inpOne = +document.querySelector('.inp-1').value;
	let inpTwo = +document.querySelector('.inp-2').value;
	let outOne = document.querySelector('.out-1');

	function stepen (a, b) {
		if (b == 1) {
			return a;
		}
		else {
			return a = a * stepen(a, b - 1);
		}
	}
	outOne.innerHTML = stepen(inpOne, inpTwo);
};


// Фейдер

document.querySelector('.inp-range').oninput = function () {
	document.querySelector('.out-2').innerHTML = this.value;
}


// Счётчик случайных чисел

document.querySelector('.button-2').onclick = function () {
	function timer () {
	function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let spanOne = document.querySelector('.span-1');
	spanOne.innerHTML = getRandomIntInclusive(0, 100);
	}
	setInterval(timer, 1000);
	this.setAttribute("disabled", "disabled");
}


// Секундомер

function secMer (value) {
	let minutes = Math.floor(value / 60000);
	let seconds = ((value % 60000) / 1000).toFixed(0);
	return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
