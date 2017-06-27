;(function() {
	'use strict';

	//
	// A vector type
	//
	const Vector = function(x, y) {
		this.x = x;
		this.y = y;
	};

	Vector.prototype.plus = function(vector) {
		this.x = this.x + vector.x;
		this.y = this.y + vector.y;
		return this;
	};

	Vector.prototype.minus = function(vector) {
		this.x = this.x - vector.x;
		this.y = this.y - vector.y;
		return this;
	};

	Object.defineProperty(Vector.prototype, 'length', {
		get: function() {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}
	});

	console.log(new Vector(1, 2).plus(new Vector(2, 3))); // Vector{x: 3, y: 5}
	console.log(new Vector(1, 2).minus(new Vector(2, 3))); // Vector{x: -1, y: -1}
	console.log(new Vector(3, 4).length); // 5

	let foo = new Vector(1, 2);
	console.log('foo:', foo);
	console.log('Vector.prototype === Object.getPrototypeOf(foo)?', Vector.prototype === Object.getPrototypeOf(foo));

	//
	// Another cell
	//

	const StretchCell = function(inner, width, height) {
		this.inner = inner;
		this.width = width;
		this.height = height;
	};

	StretchCell.prototype.minWidth = function() {
		return Math.max(this.inner.minWidth(), this.width);
	};

	StretchCell.prototype.minHeight = function() {
		return Math.max(this.inner.minHeight(), this.height);
	};

	StretchCell.prototype.draw = function(width, height) {
		return this.inner.draw(width, height);
	};

	// Add code to http://eloquentjavascript.net/06_object.html#h_nLNNevzcF7

	//
	// Sequence interface
	//

	// Interface
	const Sequence = function() {};

	// Sequence.prototype.get

	Object.defineProperty(Sequence.prototype, 'sequence', {
		get: function() {
			return this.sequence;
		}
	});

	// logFive
	const logFive = (seqObj) => {
		const seqObjSequence = seqObj.sequence,
					arrayLength = seqObjSequence.length,
					iterationLength = Math.min(4, arrayLength - 1);
		for (let i = 0; i <= iterationLength; i++) {
			console.log(seqObjSequence[i]);
		}
	};

	// ArraySeq
	const ArraySeq = function(array) {
		this.value = array;
	};

	// ArraySeq.prototype.

	// RangeSeq
	const RangeSeq = function(from, to) {
		// this.value =
	};

})();
