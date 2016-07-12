module.exports = () => {
  const queue = []

  return {
    enqueue: (value) => {
      queue.push(value)
    },
    dequeue: () => {
      queue.shift()
    },
    peek: () => {
      return queue[0]
    },
    length: () => {
      return queue.length
    }
  }
}
