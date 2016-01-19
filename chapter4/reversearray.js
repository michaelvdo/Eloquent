(function () {
    "use strict";

    module.exports = {
      reverseArray: function(array) {
        var reversedArray = [];
        for ( var a = 0; a < array.length; a++ ) {
          reversedArray.unshift(array[a]);
        }
        return reversedArray;
      },
      reverseInPlace: function(array) {
        for ( var a = array.length-2; a >= 0; a-- ) {
          array.splice(array.length, 0, array.splice(a, 1)[0]);
        }
      }
    };
})();
