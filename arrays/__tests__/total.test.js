import total from '../total';

const sum = arr => (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

describe(`[Arrays]: total`, () => {
  it(`should make the total sum for a given array of numbers`, () => {
    const arr = [1, 2, 3, 4, 5];

    expect(total(arr)).toEqual(sum(arr));
  });

  it(`should not compute the total number for strings`, () => {
    const arr = [`1`, `2`, `3`, `4`, `5`];

    expect(total(arr)).toEqual(`${sum(arr)}`);
  });
});
