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

	var hasMother = function hasMother(array) {
		var arr = [];
		array.forEach(function(currentValue) {
			if (JSON.parse(currentValue).mother)
				arr.push(JSON.parse(currentValue).name);
		});
		return arr;
	};

	console.log(hasMother(ancestry));

})();
