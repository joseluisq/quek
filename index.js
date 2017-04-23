/* @flow */

export default function quek () {
  const queue: Array<mixed> = []

  return {
    append (el: any): number {
      return queue.push(el)
    },

    prepend (el: any): number {
      return queue.unshift(el)
    },

    pop (): any {
      return queue.pop()
    },

    shift (): any {
      queue.shift()
    },

    first (): any {
      return queue[0]
    },

    last (): any {
      return queue.slice(-1)[0]
    },

    all (): Array<mixed> {
      return queue
    },

    length (): number {
      return queue.length
    }
  }
}
