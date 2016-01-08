(function () {
    "use strict";

    module.exports = {
      range: function range(start, end, step) {
        var range          = [],
            current        = start,
            countDown      = start < end;

        if ( start = end ) {
          range.push(start);
        } else {
          while ( this.condition(countDown, current, end) ) {
            console.log('hello world');
            range.push(current);
            if ( step === undefined ) {
              countDown ? current++ : current--;
            } else {
              current += step;
            }
          }
        }

        // if ( start < end ) {
        //   while ( current <= end ) {
        //     range.push(current);
        //     if ( step === undefined ) {
        //       current++;
        //     } else {
        //       current += step;
        //     }
        //   }
        // } else if ( start > end ) {
        //   while ( current >= end ) {
        //     range.push(current);
        //     if ( step === undefined ) {
        //       current--;
        //     } else {
        //       current += step;
        //     }
        //   }
        // }

        this.test1();
        return range;
      },
      test1: function test1() {
        console.log('test1 heeft gedraaid!');
      },
      condition: function condition(countDown, current, end) {
        console.log('condition heeft gedraaid!');
        return countDown ? current <= end : current >= end;
      },
      sum: function sum(array) {
        var counter = 0,
            sum     = 0;
        while ( counter < array.length ) {
          sum += array[counter];
          counter++;
        }
        return sum;
      }
    };
})();
