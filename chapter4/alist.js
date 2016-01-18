(function () {
    "use strict";

    module.exports = {
      arraytolist: function arrayToList(array) {

        var list = {};

        for ( var a = array.length - 1; a >= 0; a-- ) {
          list = {value: array[a], rest: list};
        }

        // console.log(array);
        // var object1 = {value: array[0], rest: array[1]};
        // return object1;

        return list;

      },
      listtoarray: function listToArray(list) {

      },
      prepend: function prepend(element, list) {

      },
      nth: function nth(list, number) {

      }
    };
})();
