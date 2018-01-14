import diff from '../diff';

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 4];

describe(`[Arrays]: diff`, ()=>{
  it(`should return the different values between the two arrays`, ()=>{
    expect(diff(arr1, arr2)).toEqual([2, 3]);
    expect(diff(arr1, arr2)).toBeInstanceOf(Array);
  });

  it(`should not include values present in both arrays`, ()=>{
    expect(diff(arr1, arr2)).not.toEqual(expect.arrayContaining([1, 4]));
  });
});