import median from '../median';

const arr = [1, 2, 3, 4, 5, 6];

describe(`[Arrays]: median`, () => {
  it(`should return the median of a series of numbers`, () => {
    expect(median(arr)).toEqual(4);
  });
});
