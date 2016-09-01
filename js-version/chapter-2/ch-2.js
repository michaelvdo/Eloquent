;(function() {
	'use strict';

	// http://eloquentjavascript.net/02_program_structure.html#loops
	var toThePower = function toThePower(base, power) {
		for (var counter = 0, result = 1; counter < power; counter ++)
			result *= base;
		return result;
	};

	// console.log(toThePower(2, 10));
	// 1024

	//
	// Exercises
	//

	//  Looping a triangle
	var buildTriangle = function buildTriangle(baseSize) {
		for (var triangleCounter = 0; triangleCounter <= baseSize; triangleCounter++) {
			var triangleLayer = '';
			for (var layerCounter = 0; layerCounter < triangleCounter; layerCounter++) {
				triangleLayer += '#';
			}
			console.log(triangleLayer);
		}
	};

	// buildTriangle(7);

	// FizzBuzz
	var fizzBuzz = function fizzBuzz(countTo) {
		for (var counter = 1; counter <= countTo; counter++) {
			if (counter % 3 === 0) {
				if (counter % 5 === 0) {
					console.log("FizzBuzz");
				} else {
					console.log("Fizz");
				}
			} else if (counter % 5 === 0) {
				console.log("Buzz");
			} else {
				console.log(counter);
			}
		}
	};

	// fizzBuzz(100);

	// Chess board
	var chessBoard = function chessBoard(sizeOfGrid) {
		var gridString = '';
		for (var counter = 0; counter < sizeOfGrid; counter++) {
			for (var stringCounter = 0; stringCounter < sizeOfGrid; stringCounter++) {
				if (stringCounter % 2 !== 0) {
					if (counter % 2 !== 0) {
						gridString += ' ';
					} else {
						gridString += '#';
					}
				} else {
					if (counter % 2 !== 0) {
						gridString += '#';
					} else {
						gridString += ' ';
					}
				}
			}
			gridString += '\n';
		}
		return gridString;
	};

	console.log(chessBoard(3));

})();
