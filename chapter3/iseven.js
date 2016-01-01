(function () {
    "use strict";

    module.exports = {
      iseven: function isEven(number) {
        // console.log('Current working number = ' + number);
        if ( number === 0 )
          return 'even';
        else if ( number === 1 )
          return 'uneven';
        else if ( number < 0 )
          return isEven(number + 2);
        else
          return isEven(number - 2);
      }
    };

})();
