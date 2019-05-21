import getMappedArray from '.';

// shamelessly stolen from https://stackoverflow.com/a/32538867/5044985
// more info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === `function`;
}

const obj = { a: 1, b: 2, c: 3 };

describe(`[Objects]: getMappedArray`, () => {
  it(`should return a iterable array of tuples from an input object`, () => {
    const mappedArray = getMappedArray(obj);

    const originalObjectKeys = Object.keys(obj);
    const originalObjectValues = Object.values(obj);

    expect(isIterable(mappedArray)).toEqual(true);

    mappedArray.map(([id, val], idx) => {
      expect(id).toEqual(originalObjectKeys[idx]);
      expect(val).toEqual(originalObjectValues[idx]);
    });
  });
});
