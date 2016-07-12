# quek
> A pretty small [ES6](https://babeljs.io/docs/learn-es2015/) [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)).

## Install

```sh
$ npm install quek --save-dev
```

## Usage

```js
const quek = require('quek')()

console.log(quek.peek())
// => undefined
quek.enqueue('a')
quek.enqueue('b')
quek.enqueue('c')
console.log(quek.length)
// => 3

console.log(quek.peek())
// => a

quek.dequeue()
console.log(quek.length)
// => 2
```

## Contributions
[Pull requests](https://github.com/joseluisq/quek/pulls) and [issues](https://github.com/joseluisq/quek/issues) are welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
