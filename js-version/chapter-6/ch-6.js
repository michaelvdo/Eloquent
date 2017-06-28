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

	Sequence.prototype.reset = function() {
		this.clonedValue = this.value.slice();
	};

	Sequence.prototype.next = function() {
		if (this.clonedValue.length === 0) {
			return false;
		} else {
			return this.clonedValue.splice(0, 1);
		}
	};

	Object.defineProperty(Sequence.prototype, 'sequence', {
		get: function() {
			return this.sequence;
		}
	});

	// logFive
	const logFive = (seqObj) => {
		seqObj.reset();
		let itemsLeft = true,
				i = 1;
		while (itemsLeft && i <=5) {
			let nextItem = seqObj.next();
			itemsLeft = nextItem;
			if (itemsLeft) {
				console.log(nextItem[0]);
				i++;
			}
		}
	};

	// ArraySeq
	const ArraySeq = function(array) {
		this.value = array;
	};

	ArraySeq.prototype = new Sequence();
	ArraySeq.prototype.constructor = ArraySeq;

	ArraySeq.prototype.reset = function() {
		this.clonedValue = this.value.slice();
	};

	// RangeSeq
	// Source: http://www.jstips.co/en/javascript/create-range-0...n-easily-using-one-line/
	const RangeSeq = function(from, to) {
		const length = Math.abs(from - to); // Get abs. difference between from & to
		this.value = Array.apply(null, {length: length + 1}).map(function(value, index) {
			return index + from;
		});
	};

	RangeSeq.prototype = new Sequence();
	RangeSeq.prototype.constructor = RangeSeq;

	logFive(new ArraySeq([1, 2]));
	logFive(new RangeSeq(100, 1000));

})();
