# pure-fun
😊  A collection of Javascript pure functions/helpers with 0 dependencies

Currently ESM support only, use Babel or @std/esm (node v8+) for Node.

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
