;(function() {
	'use strict';

	//
	// The sum of a range
	//
	var range = function range(firstArg, secondArg, stepArg) {
		if (firstArg === secondArg)
			return [firstArg];

		var array = [],
				step       = Math.sign(stepArg) === -1 ? stepArg * -1 : stepArg || 1,
				start      = firstArg,
				end        = secondArg,
				iterations = (end - start) / step;

		if (Math.sign(iterations) === -1)
			iterations *= -1;

		iterations = Math.floor(iterations) + 1;

		for (var i = start, j = 0; j < iterations; j++ ) {
			array.push(i);
			i = end < start ? i - step : i + step;
		}
		return array;
	};

	var sum = function sum(array) {
		var sumOfArrayElements = 0;
		for (var i = 0; i < array.length; i++)
			sumOfArrayElements += array[i];
		return sumOfArrayElements;
	};

	// console.log(range(9, 2, 2));
	// console.log(sum([1, 2, 3, 4, 5, 6]));
	// console.log(sum(range(1, 10)));

	//
	// Reversing an array (check splice!!!)
	//
	var reverseArray = function reverseArray(array) {
		var arrayLength = array.length,
				reversedArray    = [];

		for (var i = 0; i < arrayLength; i++) {
			reversedArray.unshift(array[i]);
		}
		return reversedArray;
	};

	var reverseArrayInPlace = function reverseArrayInPlace(array) {
		var arrayLength = array.length;

		for (var i = arrayLength - 2; i >= 0; i--)
			array.splice(arrayLength, 0, array.splice(i, 1));
	};

	// var array = [1, 2, 3, 4, 5];
	// console.log("Initial array: " + array);
	// console.log("The reverseArray function returns: " + reverseArray(array));
	// console.log("Array after reverseArray: " + array);
	// reverseArrayInPlace(array);
	// console.log("Array after reverseArrayInPlace: " + array);

	//
	// A list
	//

	// Old setup for arrayToList. Works fine, but can't work with the prepend
	// function.

	// var arrayToList = function arrayToList(array) {
	// 	var obj = {},
	// 			arr = array.slice();
	//
	// 	obj.value = arr.shift();
	// 	obj.rest = arr.length === 0 ? null : arrayToList(arr);
	//
	// 	return obj;
	// };

	var prepend = function prepend(element, list) {
		return {value: element, rest: list};
	};

	var nth = function nth(list, number) {
		if (list)
			return number === 0 ? list.value : nth(list.rest, number - 1);
		else
			return undefined;
	};

	var arrayToList = function arrayToList(array) {
		var list = null;
		for (var i = array.length - 1; i >= 0; i--)
			list = prepend(array[i], list);
		return list;
	};

	var listToArray = function listToArray(list) {
		var arr  = [],
				test = true;

		for (var i = 0; test; i++) {
			test = nth(list, i);
			if (test)
				arr.push(test);
		}
		return arr;
	};

	// console.log(arrayToList([10, 20]));
	// console.log(listToArray(arrayToList([10, 20, 30])));
	// console.log(nth(arrayToList([10, 20, 30]), 1));

	//
	// Deep comparison
	//
	var foo = {a: 1, b: {c: 3, d: 5}},
			bar = {a: 1, b: {c: 3, d: 5}},
			baz = {a: 1, b: {c: 3, d: 5}, e: 5},
			baw = 'oi',
			maw = 'oi';

	var deepEqual = function deepEqual(item1, item2) {
		var equal;
		if (item1 === null || item2 === null || item1 === undefined || item2 === undefined) {
			equal = false;
		} else if (Object.keys(item1).length !== Object.keys(item2).length) {
			equal = false;
		} else if (typeof item1 !== 'object' || typeof item2 !== 'object') {
			equal = item1 === item2;
		} else {
			for (var prop in item1) {
				equal = (equal === false) ? false : deepEqual(item1[prop], item2[prop]);
			}
		}
		return equal;
	};

	// console.log(deepEqual(foo, bar));		// true
	// console.log(deepEqual(foo, baz));		// false
	// console.log(deepEqual(baw, maw));		// true
	// console.log(deepEqual(foo, maw));		// false

})();
