<p align="center">
  <h1 align="center">😊 pure-fun</h1>
  <p>A collection of JavaScript pure functions/helpers with zero dependencies.</p>

  <p align="center">
    <a href="https://travis-ci.org/thibmaek/pure-fun.svg?branch=master">
      <img src="https://badgen.net/badge/Build status/travis?icon=travis" alt="Travis CI">
    </a>
    <a href="https://www.notion.so/thibmaek/89015d654dbf4600acf001dbe229fb38?v=b5d231eef3a84993b16abca0a120b04e">
      <img src="https://img.shields.io/badge/check-our%20roadmap-5362F5.svg" alt="Chat">
    </a>
    <img src="https://badges.greenkeeper.io/thibmaek/pure-fun.svg" />
  </p>

  <blockquote>Currently ESM support only, use Babel or @std/esm (node v8+) for Node.</blockquote>
</p>

# Installing

```console
npm install (--save-dev) pure-fun
yarn add (--dev) pure-fun
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
