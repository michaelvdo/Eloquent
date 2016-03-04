(function(){

    "use strict";

    var practicefile = require('./practicefile.js');

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
        isEven = require('./chapter3/isEven.js'),
        beanCounting = require('./chapter3/beanCounting.js');

    // Uncomment these calls to run the solutions for the relevant assignments
    // console.log(minimum.minimum(-10, 10));
    // console.log(isEven.isEven(71));
    // console.log(beanCounting.countBs('blaBlaBla'));
    // console.log(beanCounting.countChar('kakkerkak', 'k'));

    // .js files for the assignments from chapter 4
    var sumOfRange = require('./chapter4/sumOfRange.js'),
        reverseArray = require('./chapter4/reverseArray.js'),
        aList = require('./chapter4/aList.js'),
        deepComparison = require('./chapter4/deepComparison.js');

    // Uncomment these calls to run the solutions for the relevant assignments
    // console.log(sumOfRange.range(5, 2, -1));
    // console.log(sumOfRange.sum([1, 2, 3, 4, 1]));
    // console.log(sumOfRange.sum(sumOfRange.range(1, 10)));

    // console.log(reverseArray.reverseArray(['A', 'B', 'C']));
    // var arrayValue = [1, 2, 3, 4, 5, 6];
    // console.log(arrayValue);
    // reverseArray.reverseInPlace(arrayValue);
    // console.log(arrayValue);

    // console.log(aList.arrayToList([10, 20]));
    // console.log(aList.prepend(10, aList.prepend(20, null)));
    // console.log(aList.listToArray(aList.arrayToList([10, 20, 30, 40, 50])));

    // var obj1 = {here: {is: 'an'}, object: 2};
    // var obj2 = {here: {is: 'an'}, object: 2};
    // var obj3 = {here: 1, object: 2};
    // console.log(deepComparison.deepEqual(obj1, obj2));
    // console.log(deepComparison.deepEqual(1, 2));

    // .js files for the assignments from chapter 5
    var flattening = require('./chapter5/flattening.js');

    console.log(flattening.flattening([[1, 2, 3], [4, 5], [6]]));

})();
