import without from '.';

const arr = [1, 2, 3, 4, 5];

describe(`[Arrays]: without`, () => {
  it(`should filter out given values from an array`, () => {
    expect(without(arr, 2, 3)).toEqual([1, 4, 5]);
  });
});
