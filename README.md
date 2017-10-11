# pure-fun
😊  A collection of JavaScript pure functions/helpers with zero dependencies.

Currently ESM support only, use Babel or @std/esm (node v8+) for Node.

[![Build Status](https://travis-ci.org/thibmaek/pure-fun.svg?branch=master)](https://travis-ci.org/thibmaek/pure-fun)

## Installing

```
npm install (--save-dev) thibmaek/pure-fun
```

## Usage

```js
import PureFun from 'pure-fun';
const mapArr = PureFun.Objects.getMappedArray({ key:'value' });

import { Arrays } from 'pure-fun';
const rnd = Arrays.pickRandom([1, 2, 3])

import sleep from 'pure-fun/async';
const delayedRes = sleep(1000)
  .then(response => console.log(response));
```

### Development
The dev env for this is Node LTS/latest with ESM (import/export) syntax as a standard.
Linting is done with eslint and testing with jest.

For testing, each function should have a unit test in the same directory in a subfolder `__tests__` with at least a test that asserts the expected result. You can run tests locally with `npm t`. Every PR also builds on Travis CI under these circumstances.
