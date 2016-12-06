# quek [![Build Status](https://travis-ci.org/joseluisq/quek.svg?branch=master)](https://travis-ci.org/joseluisq/quek) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/quek/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/quek?branch=master)

> A pretty small [ES6](https://babeljs.io/docs/learn-es2015/) API for [Queue][1] and [Stack][2] [ADTs](https://en.wikipedia.org/wiki/Abstract_data_type).

[1]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[2]: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

## Install

#### CommonJS

```sh
npm install quek --save-dev
```

#### AMD

```js
requirejs(['quek'], Quek => {

})
```

#### Browser

#### Bower
```sh
bower install quek --save
```

##### CDN
[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/quek/dist/quek.min.js"></script>
```

You can use the library via `window.Quek`.

## Usage

### Queue

```js
const queue = require('quek')()

console.log(queue.first())
// => undefined

queue.append('a')
queue.append('b')
queue.append('c')
console.log(queue.length())
// => 3

console.log(queue.first())
// => a

queue.shift()

console.log(queue.length())
// => 2
```

### Stack

```js
const stack = require('quek')()

console.log(stack.last())
// => undefined

stack.prepend('a')
stack.prepend('b')
stack.prepend('c')
console.log(stack.length())
// => 3

console.log(stack.last())
// => c

stack.pop()

console.log(stack.length())
// => 2
```

## API

For more API functions check out [./src/quek.js](./src/quek.js).

## Contributions
[Pull requests](https://github.com/joseluisq/quek/pulls) and [issues](https://github.com/joseluisq/quek/issues) are welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
