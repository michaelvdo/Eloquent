;(function() {
	'use strict';

	// http://eloquentjavascript.net/02_program_structure.html#loops
	function toThePower(base, power) {
		for (var counter = 0, result = 1; counter < power; counter ++)
			result *= base;
		return result;
	}

	console.log(toThePower(2, 10));
	// 1024

})();
