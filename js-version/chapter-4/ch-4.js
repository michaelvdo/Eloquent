;(function() {
	'use strict';


	// The sum of a range
	


	// Deep comparison
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

	console.log(deepEqual(foo, bar));		// true
	console.log(deepEqual(foo, baz));		// false
	console.log(deepEqual(baw, maw));		// true
	console.log(deepEqual(foo, maw));		// false

})();
