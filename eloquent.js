(function () {

    "use strict";

    // var practicefile = require('./practicefile.js');

    // .js files for the assignments from chapter 2
    var loopTriangle = require('./chapter2/loopTriangle.js'),
        fizzBuzz = require('./chapter2/fizzBuzz.js'),
        grid = require('./chapter2/grid.js');

    // Uncomment these calls to run the solutions for the relevant assignments
    // loopTriangle.loopTriangle();
    // fizzBuzz.fizzBuzz();
    // grid.grid(8);

    // .js files for the assignments from chapter 3
    var minimum = require('./chapter3/minimum.js'),
        iseven = require('./chapter3/iseven.js'),
        beancounting = require('./chapter3/beancounting.js');

    // Uncomment these calls to run the solutions for the relevant assignments
    // console.log(minimum.minimum(-10, -10));
    // console.log(iseven.iseven(50));
    // console.log(beancounting.countBs('blaBlaBla'));
    // console.log(beancounting.countChar('kakkerkak', 'k'));

    // .js files for the assignments from chapter 4
    var sumofrange = require('./chapter4/sumofrange.js'),
        reversearray = require('./chapter4/reversearray.js'),
        alist = require('./chapter4/alist.js');

    // Uncomment these calls to run the solutions for the relevant assignments
    // console.log(sumofrange.range(5, 2, -1));
    // console.log(sumofrange.sum([1, 2, 3, 4, 1]));
    // console.log(sumofrange.sum(sumofrange.range(1, 10)));

    // console.log(reversearray.reversearray(['A', 'B', 'C']));
    // var arrayValue = [1, 2, 3, 4, 5, 6];
    // console.log(arrayValue);
    // reversearray.reverseinplace(arrayValue);
    // console.log(arrayValue);

    console.log(alist.arraytolist([10, 20, 30, 40, 50]));

})();
