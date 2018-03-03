> It's recommended and preferred to add a unit test for a new function.
Don't worry if you don't manage to write one. Contribution is still appreciated

## If adding a new function, it …
- [ ] has the function in `src/` and its built output in `esm/`
- [ ] only uses ES module syntax
- [ ] has been validly typed with [Flow](https://flowtype.org)
- [ ] has a unit test in a subfolder like: `__tests__/function.test.js`
- [ ] is exported in its folder's entrypoint (`e.g: arrays/index.js`)

## My changes …
<!-- You can ignore this if it's unrelated to your function, please post the error output in this PR though -->
- [ ] still make the current tests pass with `npm test`
