module.exports = () => {
  const que = []

  return {
    append: e => que.push(e),
    prepend: e => que.unshift(e),

    pop: () => que.pop(),
    shift: () => que.shift(),

    first: () => que[0],
    last: () => que.slice(-1)[0],

    all: () => que,
    length: () => que.length
  }
}
