(function(){

  'use strict';

  // function power(base, exponent) {
  //   if (typeof exponent === 'undefined')
  //     exponent = 2;
  //
  //   if (exponent === 0)
  //     return 1;
  //   else
  //     return base * power(base, exponent - 1);
  // }
  //
  // console.log(power(2, 3));
  // // → 8

  // chapter 4

  // var map = {};
  //
  // function storePhi(event, phi) {
  //   map[event] = phi;
  // }
  //
  // storePhi('pizza', 0.5);
  // storePhi('touched tree', 0.4);
  //
  // for (var event in map) {
  //   console.log(event + ': ' + map[event]);
  // }


  // var todoList = [];
  //
  // function rememberTo(task) {
  //   todoList.push(task);
  // }
  //
  // function whatIsNext() {
  //   return todoList.shift();
  // }
  //
  // function urgentlyRememberTo(task) {
  //   todoList.unshift(task);
  // }
  //
  // rememberTo('make lunch');
  //
  // console.log(todoList);
  // console.log(whatIsNext());
  // console.log(urgentlyRememberTo('make breakfast'));
  // console.log(todoList);

  // var obj = {
  //   test1: function test1(trueVariable, first, second) {
  //     return trueVariable ? 1 < 2 : 1 > 2;
  //   },
  //   test2: function test2() {
  //     var a = 0;
  //     while ( this.test1(true, 1, 2) && a < 1 ) {
  //       console.log('while draait!');
  //       a++;
  //       // this.test1() &&
  //     }
  //   }
  // };
  //
  // obj.test2();

  //
  // Chapter 5
  //

  require('./chapter5/ancestry.js');

  // function forEach(array, action) {
  //   for (var i = 0; i < array.length; i++) {
  //     action(array[i]);
  //   }
  // }
  //
  // var numbers = [1, 2, 3, 4, 5], sum = 0;
  // forEach(numbers, function(number) {
  //   sum += number;
  // });
  // console.log(sum);

  // function greaterThan(a) {
  //   return function(b) {
  //     return b > a;
  //   };
  // }
  //
  // var greaterThan10 = greaterThan(10);
  // console.log(greaterThan10(9));

  // function noisy(f) {
  //   return function(arg) {
  //     console.log("calling with", arg);
  //     var val = f(arg);
  //     console.log("called with", arg, "- got", val);
  //     return val;
  //   };
  // }
  // noisy(Boolean)(1);

  //
  // Ch. 5 assignment 2 data
  //

  // function average(array) {
  // function plus(a, b) { return a + b; }
  // return array.reduce(plus) / array.length;
  // }
  //
  // var byName = {};
  // ancestry.forEach(function(person) {
  // byName[person.name] = person;
  // });
  //
  // // Your code here.
  //
  // function hasKnownMother(value, index, array) {
  // if (byName[array[index].mother]) {
  //       console.log(array[index].mother);
  //     return array[index].mother;
  //   }
  //   else
  //     return false;
  // }
  //
  // var filteredAncestry = ancestry.filter(hasKnownMother);
  //
  // console.log(ancestry[17]);
  // //console.log(ancestry);
  // //console.log(byName);
  // console.log(filteredAncestry);

// → 31.2

    //
    // end Ch. 5 assignment 2 data
    //

})();

// http://eloquentjavascript.net/05_higher_order.html#h_1BJbwiI0gI
