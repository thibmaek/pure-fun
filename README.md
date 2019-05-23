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
</p>

# Installing

```console
npm install pure-fun
yarn add pure-fun
```

## Usage

```js
import PureFun from 'pure-fun';
const mapArr = PureFun.arrays.getMappedArray({ key: 'value' });

import { arrays } from 'pure-fun';
const rnd = arrays.pickRandom([1, 2, 3])

import sleep from 'pure-fun/async';
(async () => {
  await sleep(1000);
  console.log('Slept 1s')
})();
```

### Development

The dev env for this is Node LTS/latest with ESM (import/export) syntax as a standard.
Typescript is used to ensure type safety + documentation
Linting is done with eslint and testing with jest.

You can run tests locally with `npm t`. Every PR also builds on Travis CI under these circumstances.
