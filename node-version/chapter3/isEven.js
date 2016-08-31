(function () {
    "use strict";

    module.exports = {
      isEven: function(number) {
        // console.log('Current working number = ' + number);
        if ( number === 0 )
          return 'even';
        else if ( number === 1 )
          return 'uneven';
        else if ( number < 0 )
          return this.isEven(number + 2);
        else
          return this.isEven(number - 2);
      }
    };

})();
