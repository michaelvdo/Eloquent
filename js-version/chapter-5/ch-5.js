;(function() {
	'use strict';

	// function filter(array, test) {
	// 	var passed = [];
	// 	for (var i = 0; i < array.length; i++) {
	// 		if (test(array[i])) {
	// 			passed.push(array[i]);
	// 		}
	// 	}
	// 	return passed;
	// }
	//
	// console.log(filter(ancestry, function(person) {
	// 	person = JSON.parse(person);
	// 	return person.born > 1900 && person.born < 1925;
	// }));

	// var arrayYoung = ancestry.filter(function(person) {
	// 	person = JSON.parse(person);
	// 	return person.born > 1900 && person.born < 1925;
	// });
	//
	// console.log(arrayYoung);
	//
	// var arrayYoungNames = arrayYoung.map(function(obj) {
	// 	return JSON.parse(obj).name;
	// });
	//
	// console.log(arrayYoungNames);

	//
	// Flattening
	//

	var arrays = [[1, 2, 3], [4, 5], [6]];

	var flattening = function flattening(array) {
		return array.reduce(function(previousValue, currentValue, currentIndex) {
			return previousValue.concat(currentValue);
		});
	};

	// console.log(flattening(arrays));


	//
	// Mother-child age difference
	//

	var average = function average(array) {
		function plus(a, b) { return a + b; }
		return array.reduce(plus) / array.length;
	};

	var byName = {};
	ancestry.forEach(function(person) {
		person = JSON.parse(person);
		byName[person.name] = person;
	});

	// console.log(ancestry);

	var mothersAndChildren = function mothersAndChildren(array) {
		var childrenWithMother = [],
				mothers            = [];

		// Create arrays for children with mothers and mothers with children
		array.forEach(function(currentValue) {
			if (JSON.parse(currentValue).mother) {
				childrenWithMother.push(JSON.parse(currentValue).name);
				mothers.push(JSON.parse(currentValue).mother);
			}
		});

		console.log(childrenWithMother);
		console.log(mothers);

		bornDates(childrenWithMother, mothers);

	};

	var bornDates = function bornDates(childrenArray, mothersArray) {
		childrenArray.forEach(function(currentValue, index) {
			if (byName[currentValue].born && byName[mothersArray[index]].born)
				console.log("heyo!");
		});
	};

	// console.log(mothersAndChildren(ancestry));
	mothersAndChildren(ancestry);
	console.log(byName);


})();
