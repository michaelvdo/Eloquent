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

	// helper functions && object
	var average = function average(array) {
		function plus(a, b) { return a + b; }
		return array.reduce(plus) / array.length;
	};

	var byName = {};
	ancestry.forEach(function(person) {
		person = JSON.parse(person);
		byName[person.name] = person;
	});

	// custom functions
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
		// log all mother-and-child pairs' age difference
		return bornDateDifferences(childrenWithMother, mothers);
	};

	// Calculate (and return in an array) the age difference of all mother-child
	// pairs
	var bornDateDifferences = function bornDateDifferences(childrenArray, mothersArray) {
		var averageAges = [];
		childrenArray.forEach(function(currentValue, index) {
			// If a born date exists for both the mother and the child...
			if (byName[currentValue].born && (byName[mothersArray[index]] && byName[mothersArray[index]].born))
				// ...subtract the birth date of the mother of that of the child, and store the (age) difference
				averageAges.push(byName[currentValue].born - byName[mothersArray[index]].born);
		});

		return averageAges;
	};

	// Function that returns the average value of an array of values
	var averageOfArray = function averageOfArray(array) {
		var average = 0;
		array.forEach(function(currentValue) {
			average += currentValue;
		});
		return average / array.length;
	};

	console.log(averageOfArray(mothersAndChildren(ancestry)));


	//
	// Historical life expectancy
	//

	

})();
