"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {
		console.log(arr);
	} else if (discriminant === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else {
		let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(x1, x2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentEveryMonth = percent / 100 / 12;
	let creditAmount = amount - contribution;
	let paymentEveryMonth = creditAmount * (percentEveryMonth + (percentEveryMonth / (((1 + percentEveryMonth) ** countMonths) - 1)));
	let totalPayment = paymentEveryMonth * countMonths;
	return +totalPayment.toFixed(2);
}