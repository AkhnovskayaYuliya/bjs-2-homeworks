function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		} else {
			min = min;
			max = max;
		}
	}
	let avg = sum / arr.length;
	return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
	};
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let min = arr[0];
	let max = arr[0];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		} else {
			min = min;
			max = max;
		}
	}
	return max - min;
}
function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let resultOfFunction = func(...arrOfArr[i])
		if (resultOfFunction > maxWorkerResult) {
			maxWorkerResult = resultOfFunction;
		}
	}
	return maxWorkerResult;
}
