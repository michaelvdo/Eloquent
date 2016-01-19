(function () {
    "use strict";

    module.exports = {
      grid: function(size) {
        var grid = '';
        for( var a = 0; a < size; a++ ) {
          for( var b = 0; b < size; b++ ) {
            if ( b % 2 === 0 && a % 2 === 0 || b % 2 !== 0  && a % 2 !== 0 ) {
              grid += ' ';
            }
            else {
              grid += '#';
            }
          }
          grid += '\n';
        }
        console.log(grid);
      }
    };

})();
