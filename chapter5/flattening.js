(function () {
    "use strict";

    module.exports = {
      flattening: function(array) {
        return array.reduce(function(a, b, c, d) {
          return a.concat(b);
        })
      }
    };
})();

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reduce#Flatten_an_array_of_arrays for an alternative, but comparable, approach
