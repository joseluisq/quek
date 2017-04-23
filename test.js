import Quek from './'

test('Queue test', () => {
  const queue = Quek()

  expect(queue.first()).toBeUndefined()

  queue.append('a')
  queue.append('b')

  expect(queue.first()).toEqual('a')
  expect(queue.length()).toEqual(2)

  queue.shift()

  expect(queue.length()).toEqual(1)
  expect(queue.first()).toEqual('b')
  expect(queue.all()).toHaveLength(1)
})

test('Stack test', () => {
  const stack = Quek()

  expect(stack.last()).toBeUndefined()

  stack.prepend('a')
  stack.prepend('b')

  expect(stack.last()).toEqual('a')
  expect(stack.length()).toEqual(2)

  stack.pop()

  expect(stack.length()).toEqual(1)
  expect(stack.last()).toEqual('b')
  expect(stack.all()).toHaveLength(1)
})
