import join from '../join';

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [4];

describe(`[Arrays]: join`, () => {
  it(`should join together a series of arrays`, () => {
    const tmp = [];
    tmp.push(arr1, arr2, arr3);

    expect(join(arr1, arr2, arr3)).toEqual(tmp);
    expect(join(arr1, arr2, arr3)).toBeInstanceOf(Array);
  });
});