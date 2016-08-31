(function () {
    "use strict";

    module.exports = {
      arrayToList: function(array) {
        var list = null;
        for ( var a = array.length - 1; a >= 0; a-- ) {
          list = this.prepend(array[a], list);
        }
        return list;
      },
      listToArray: function(list) {
        var array = [];
        for ( var node = list; node; node = node.rest ) {
          array.splice(array.length, 0, node.value);
        }
        return array;
      },
      prepend: function(element, list) {
        return {value: element, rest: list};
      },
      nth: function nth(list, number) {
        // skipped this one, don't really see the use for this function with my solutions
      }
    };
})();
