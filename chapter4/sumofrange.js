(function () {
    "use strict";

    module.exports = {
      range: function(start, end, step) {
        var list = [],
            current = start,
            countUp = start < end;

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
      condition: function(countUp, current, end) {
        return countUp ? current <= end : current >= end;
      },
      sum: function(array) {
        var counter = 0,
            summation = 0,
            arrayLength = array.length;
        while ( counter < arrayLength ) {
          summation += array[counter];
          counter++;
        }
        return summation;
      }
    };
})();
