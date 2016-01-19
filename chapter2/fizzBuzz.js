(function () {
    "use strict";

    module.exports = {
      fizzBuzz: function() {
        for ( var a = 1; a <= 100; a++ ) {
          if ( a % 3 === 0 ) {
            if ( a % 5 === 0 ) {
              console.log('FizzBuzz');
            }
            else {
              console.log('Fizz');
            }
          }
          else if ( a % 5 === 0 ) {
            console.log('Buzz');
          }
          else {
            console.log(a);
          }
        }
      }
    };

})();
