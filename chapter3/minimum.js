(function () {
    "use strict";

    module.exports = {
      minimum: function Minumum(first, second) {
        if ( first - second === 0 )
          return(first + ' and ' + second + ' are equal!');
        else if ( first - second > 0 )
          return(second);
        else {
          return(first);
        }
      }
    };

})();
