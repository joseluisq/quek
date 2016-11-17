/*! quek v1.0.2 | MIT (c) 2016 José Luis Quintana */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function () {
  var Quek = function Quek() {
    var queue = [];

    return {
      enqueue: function enqueue(value) {
        queue.push(value);
      },
      dequeue: function dequeue() {
        queue.shift();
      },
      peek: function peek() {
        return queue[0];
      },
      length: function length() {
        return queue.length;
      }
    };
  };

  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = Quek;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Quek;
    });
  } else {
    window.Quek = Quek;
  }
})();

