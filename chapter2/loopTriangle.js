(function () {
    "use strict";

    module.exports = {
      loopTriangle: function() {
        var triangle = '';
        for ( var a = 1; a <= 7; a++ ) {
          triangle += '#';
          console.log(triangle);
        }
      }
    };

})();
