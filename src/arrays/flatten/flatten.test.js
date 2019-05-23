import flatten from '.';

const multiDimensionalArray = [1, [2, [3]]];

describe(`[Arrays]: flatten`, () => {
  it(`flattens a multidimensional array`, () => {
    expect(flatten(multiDimensionalArray)).toEqual([1, 2, 3]);
  });
});
