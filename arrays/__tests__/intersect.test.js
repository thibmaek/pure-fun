import intersect from '../intersect';

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 4];

describe(`[Arrays]: intersect`, () => {
  it(`should return the intersection between the two arrays`, () => {
    expect(intersect(arr1, arr2)).toEqual([1, 4]);
    expect(intersect(arr1, arr2)).toBeInstanceOf(Array);
  });

  it(`should not include values present in both arrays`, () => {
    expect(intersect(arr1, arr2)).not.toEqual(expect.arrayContaining([2, 3]));
  });
});