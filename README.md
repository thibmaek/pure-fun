# pure-fun
😊  A collection of JavaScript pure functions/helpers with zero dependencies.

Currently ESM support only, use Babel or @std/esm (node v8+) for Node.

[![Build Status](https://travis-ci.org/thibmaek/pure-fun.svg?branch=master)](https://travis-ci.org/thibmaek/pure-fun)

## Installing

```
npm install (--save-dev) pure-fun
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
