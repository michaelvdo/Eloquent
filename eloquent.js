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
    console.log(beancounting.beancounting('blaBlaBla'));

})();
