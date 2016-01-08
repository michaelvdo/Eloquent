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

var obj = {
  test1: function test1() {
    console.log('test 1 heeft gedraaid!');
  },
  test2: function test2() {
    this.test1();
  }
}

obj.test2();
