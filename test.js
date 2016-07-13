const quek = require('./')()
const test = require('tape')

test('Test Suite', t => {
  t.plan(5)

  t.notok(quek.peek(), 'undefined')

  quek.enqueue('a')
  quek.enqueue('b')

  t.equal(quek.peek(), 'a', 'a')
  t.equal(quek.length(), 2, 'length: 2')

  quek.dequeue()

  t.equal(quek.length(), 1, 'length: 1')
  t.equal(quek.peek(), 'b', '1')
})
