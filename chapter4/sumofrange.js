(function () {
    "use strict";

    module.exports = {
      range: function range(start, end, step) {
        var list       = [],
            current    = start,
            countUp  = start < end;

        if ( start === end ) {
          list.push(start);
        } else {
          while ( this.condition(countUp, current, end) ) {
            list.push(current);
            if ( step === undefined ) {
              if ( countUp ) {
                current++;
              } else {
                current--;
              }
            } else {
              current += step;
            }
          }
        }
        return list;
      },
      condition: function condition(countUp, current, end) {
        return countUp ? current <= end : current >= end;
      },
      sum: function sum(array) {
        var counter   = 0,
            summation = 0;
        while ( counter < array.length ) {
          summation += array[counter];
          counter++;
        }
        return summation;
      }
    };
})();
