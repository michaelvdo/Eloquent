;(function() {
	'use strict';

	//
	// helper functions && object
	//
	var average = function average(array) {
		function plus(a, b) { return a + b; }
		return array.reduce(plus) / array.length;
	};

	// JSON.parse every string in the ancestry array
	var ANCESTRY_ARRAY = [];

	ancestry.forEach(function(element) {
		ANCESTRY_ARRAY.push(JSON.parse(element));
	});

	var byName = {};
	ANCESTRY_ARRAY.forEach(function(person) {
		byName[person.name] = person;
	});

	//
	// Flattening
	//

	var arrays = [0, [1, 2, 3], [4, 5], [6]];
	var arrays2 = [0, [1, [2, [3, [4, [5]]]]]];

	var flattening = function flattening(array) {
		return array.reduce(function(previousValue, currentValue) {
			return previousValue.concat(Array.isArray(currentValue) ? flattening(currentValue) : currentValue);
		}, []);
	};

	// console.log(flattening(arrays));
	// console.log(flattening(arrays2));

	//
	// Mother-child age difference
	//

	// Filter that returns only the people who have a mother with a born year
	var hasMotherWithBornYear = function hasMotherWithBornYear(person) {
		var motherBornYear = typeof byName[person.mother] !== 'undefined' ? byName[person.mother].born : 0;
		return motherBornYear;
	};

	var ageDifference = function ageDifference(array, person) {
		return array.concat(person.born - byName[person.mother].born);
	};

	// Log the average age difference between the children and their mothers, if they both have a born year in the dataset
	// console.log(average(ANCESTRY_ARRAY.filter(hasMotherWithBornYear).reduce(ageDifference, [])));


	//
	// Historical life expectancy
	//

	// Taking all the people in the dataset who have a date of death,


})();
