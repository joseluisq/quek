/*! quek v1.0.1 | MIT (c) 2016 José Luis Quintana */
"use strict";

module.exports = function () {
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

