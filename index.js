(() => {
  const Quek = () => {
    const queue = []

    return {
      enqueue: value => {
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

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Quek
  } else if (typeof define === 'function' && define.amd) {
    define([], () => {
      return Quek
    })
  } else {
    window.Quek = Quek
  }
})()
