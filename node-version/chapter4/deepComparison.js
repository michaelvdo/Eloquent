(function () {
    "use strict";

    module.exports = {
      deepEqual: function(value1, value2) {
        if ( typeof value1 === typeof value2 && typeof value1 !== 'object' ) {
          return value1 === value2;
        } else if ( typeof value1 !== typeof value2 ) {
          return false;
        } else if ( value1 === 'null' || value2 === 'null' ) {
          return false;
        } else if ( Object.keys(value1).length !== Object.keys(value2).length ) {
          return false;
        } else {
          for ( var key in value1 ) {
            if ( value2[key] !== undefined ) {
              return this.deepEqual(value1[key], value2[key]);
            } else {
              return false;
            }
          }
          return true;
        }
      }
    };
})();
