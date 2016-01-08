(function () {
    "use strict";

    module.exports = {
      range: function range(start, end, step) {
        var list       = [],
            current    = start,
            countDown  = start < end;

        if ( start === end ) {
          list.push(start);
        } else {
          while ( this.condition(countDown, current, end) ) {
            list.push(current);
            if ( step === undefined ) {
              if ( countDown ) {
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
      condition: function condition(countDown, current, end) {
        return countDown ? current <= end : current >= end;
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
