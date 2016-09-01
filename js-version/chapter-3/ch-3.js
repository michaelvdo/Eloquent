;(function() {
	'use strict';

	// Minimum
	var min = function min(a, b) {
		if (b < a)
			return b;
		else
			return a;
	};

	console.log(min(0, 10));		// 0
	console.log(min(0, -10));		// -10

	// Recursion
	var isEven = function isEven(number) {
		if (number > 1)
			return isEven(number - 2);
		else if (number < 0)
			return isEven(-number);
		else if (number === 1)
			return false;
		else
			return true;
	};

	console.log(isEven(50));		// true
	console.log(isEven(75));		// false
	console.log(isEven(-1));		// false

	// Bean counting
	var countChar = function countChar(string, character) {
		var counter = 0;
		for (var i = 0; i < string.length; i++) {
			if (string.charAt(i) === character)
				counter++;
		}
		return counter;
	};

	console.log(countChar('BBC', 'B'));		// 2
	console.log(countChar('kakkerlak', 'k'));		// 4

})();
