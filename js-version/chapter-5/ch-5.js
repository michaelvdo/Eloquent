/*jshint esversion: 6 */
;(function() {
	'use strict';


	//
	// helper functions && object
	//
	const average = array => array.reduce((a, b) => a + b) / array.length;

	// JSON.parse every string in the ancestry array
	let ANCESTRY_ARRAY = [];
	ancestry.forEach(function(element) {
		ANCESTRY_ARRAY.push(JSON.parse(element));
	});

	let byName = {};
	ANCESTRY_ARRAY.forEach(function(person) {
		byName[person.name] = person;
	});

	//
	// Flattening
	//

	let arrays = [0, [1, 2, 3], [4, 5], [6]];
	let arrays2 = [0, [1, [2, [3, [4, [5]]]]]];

	const flattening = function flattening(array) {
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
	const hasMotherWithBornYear = person =>
		typeof byName[person.mother] !== 'undefined' ? byName[person.mother].born : 0;

	const ageDifference = (array, person) =>
		array.concat(person.born - byName[person.mother].born);

	// Log the average age difference between the children and their mothers, if they both have a born year in the dataset
	// console.log(average(ANCESTRY_ARRAY.filter(hasMotherWithBornYear).reduce(ageDifference, [])));


	//
	// Historical life expectancy
	//

	let peopleByCentury = {};

	const century = yearOfDeath => Math.ceil(yearOfDeath / 100);

	const age = person => person.died - person.born;

	const updatePeopleByCentury = (personCentury, personAge) =>
		peopleByCentury[personCentury] === undefined ? peopleByCentury[personCentury] = [personAge] : peopleByCentury[personCentury] = peopleByCentury[personCentury].concat(personAge);

	ANCESTRY_ARRAY.forEach(person => {
		let personCentury = century(person.died),
				personAge = age(person);
		updatePeopleByCentury(personCentury, personAge);
	});

	const printCenturyAverages = obj => {
		for (let cent in obj) {
			console.log(average(obj[cent]));
		}
	};

	// printCenturyAverages(peopleByCentury);

	//
	// Every and then some
	//

	const every = (array, fn) => {
		let validation = true,
				i = 0;
		while (validation && i < array.length) {
			validation = fn(array[i]);
			i++;
		}
		return validation;
	};

	const some = (array, fn) => {
		let validation = false,
				i = 0;
		while (!validation && i < array.length) {
			validation = fn(array[i]);
			i++;
		}
		return validation;
	};

	console.log(every([NaN, NaN, NaN], isNaN)); // true
	console.log(every([NaN, NaN, 4], isNaN)); // false
	console.log(some([NaN, 3, 4], isNaN)); // true
	console.log(some([2, 3, 4], isNaN)); // false


})();
