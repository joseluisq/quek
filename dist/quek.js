/*! quek v1.1.0 | MIT (c) 2016 José Luis Quintana */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("Quek", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Quek = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function () {
    var que = [];

    return {
      append: function append(e) {
        return que.push(e);
      },
      prepend: function prepend(e) {
        return que.unshift(e);
      },

      pop: function pop() {
        return que.pop();
      },
      shift: function shift() {
        return que.shift();
      },

      first: function first() {
        return que[0];
      },
      last: function last() {
        return que.slice(-1)[0];
      },

      all: function all() {
        return que;
      },
      length: function length() {
        return que.length;
      }
    };
  };
});

