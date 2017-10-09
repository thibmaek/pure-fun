import getMappedArray from '../getMappedArray';

// shamelessly stolen from https://stackoverflow.com/a/32538867/5044985
// more info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === `function`;
}

describe(`getMappedArray`, () => {
  it(`should return a iterable array of tuples from an input object`, () => {
    const originalObject = {
      one: 4,
      two: 5,
      three: 6,
    };
    
    // mappedArray should equal [ [ 'one', 4 ], [ 'two', 5 ], [ 'three', 6 ] ]
    const mappedArray = getMappedArray(originalObject);
    
    // Pulling the keys and values out of the object for checks
    const originalObjectKeys = Object.keys(originalObject);
    const originalObjectValues = Object.values(originalObject);

    expect(isIterable(mappedArray)).toEqual(true);

    mappedArray.map((tuple, index) => {
      expect(tuple[0]).toEqual(originalObjectKeys[index]);
      expect(tuple[1]).toEqual(originalObjectValues[index]);
    });
  });
});