;(function() {
	'use strict';

	//
	// Electronic life
	//

	const Vector = function(x, y) {
		this.x = x;
		this.y = y;
	};

	Vector.prototype.plus = function(other) {
		return new vector(this.x + other.x, this.y + other.y);
	};

})();
