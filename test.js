const quek = require('./')()
const test = require('tape')

test('Test Suite: Queue', t => {
  t.plan(5)

  t.notok(quek.first(), 'undefined')

  quek.append('a')
  quek.append('b')

  t.equal(quek.first(), 'a', 'a')
  t.equal(quek.length(), 2, 'length: 2')

  quek.shift()

  t.equal(quek.length(), 1, 'length: 1')
  t.equal(quek.first(), 'b', 'b')

  quek.shift()
})

test('Test Suite: Stack', t => {
  t.plan(5)

  t.notok(quek.last(), 'undefined')

  quek.prepend('a')
  quek.prepend('b')

  console.log(quek.all())

  t.equal(quek.last(), 'a', 'a')
  t.equal(quek.length(), 2, 'length: 2')

  quek.pop()

  t.equal(quek.length(), 1, 'length: 1')
  t.equal(quek.last(), 'b', 'b')
})
