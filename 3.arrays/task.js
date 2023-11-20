function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((item, index) => item === arr2[index])
}


function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age) => acc + age, 0) / users.filter(user => user.gender === gender).length;
	if (users.filter(user => user.gender === gender).length === 0) {
		return 0;
	} else {
		return result;
	}
}