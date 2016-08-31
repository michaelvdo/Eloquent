(function () {
    "use strict";

    module.exports = {
      countBs: function(string) {
        var counter = 0; //counts number of B's
        for ( var a = 0; a < string.length; a++ ) {
          if ( string.charAt(a) === 'B' ) {
            counter += 1;
          }
        }
        return counter;
      },
      countChar: function countChar(string, target) {
        var counter = 0; //counts prevalence of target in string
        for ( var a = 0; a < string.length; a++ ) {
          if ( string.charAt(a) === target ) {
            counter += 1;
          }
        }
        return counter;
      }
    };

})();
