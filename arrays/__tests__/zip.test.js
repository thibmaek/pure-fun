import zip from '../zip';

const arr1 = [`one`, `two`, `three`];
const arr2 = [4, 5, 6];

describe(`[Arrays]: zipped`, () => {
  it(`should return a zipped array of tuples with first value from arr1 and second value from arr2`, () => {
    const zippedArray = zip(arr1, arr2);

    expect(zippedArray).toHaveLength(3);

    zippedArray.map((value, idx) => {
      expect(value[0]).toEqual(arr1[idx]);
      expect(value[1]).toEqual(arr2[idx]);
    });
  });

  it(`should return an array of values returned from custom zipper function`, () => {
    const customZipper = (value1, value2) => value1 + value2.toString();
    const expectedReturnArray = [`one4`, `two5`, `three6`];

    expect(zip(arr1, arr2, customZipper)).toEqual(expectedReturnArray);
  });
});
