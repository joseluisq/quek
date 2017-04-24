# Quesk

[![Build Status](https://travis-ci.org/joseluisq/quesk.svg?branch=master)](https://travis-ci.org/joseluisq/quesk) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/quesk/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/quesk?branch=master)  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> A pretty small (270 bytes) [ES6](https://babeljs.io/docs/learn-es2015/) API for [Queue][1] and [Stack][2] [ADTs](https://en.wikipedia.org/wiki/Abstract_data_type).

[1]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[2]: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add quesk --dev
```

[NPM](https://www.npmjs.com/)

```sh
npm install quesk --save-dev
```

[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/quesk/dist/quesk.min.js"></script>
```

You can use the library via `window.quesk`.

## Usage

Quesk can act like a [Queue][1] or [Stack][2] collection.

### Queue

```js
import quesk from 'quesk'

const queue = quesk()

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
import quesk from 'quesk'

const stack = quesk()

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

For more functions check out [the source file](./index.js).

## Contributions
[Pull requests](https://github.com/joseluisq/quesk/pulls) and [issues](https://github.com/joseluisq/quesk/issues) are very appreciated.

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
