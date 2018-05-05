function sum () {
	var num1, num2, result;

	num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);

	result = num1 + num2;
	document.getElementById("output").innerHTML = result;
}

function min () {
	var num1, num2, result;

	num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);

	result = num1 - num2;
	document.getElementById("output").innerHTML = result;
}

function mult () {
	var num1, num2, result;

	num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);

	result = num1 * num2;
	document.getElementById("output").innerHTML = result;
}

function dev () {
	var num1, num2, result;

	num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);

	result = num1 / num2;
	document.getElementById("output").innerHTML = result;
}

function pow () {
	var num1, num2, result;

	num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);

	result = Math.pow(num1, num2);
	document.getElementById("output").innerHTML = result;
}