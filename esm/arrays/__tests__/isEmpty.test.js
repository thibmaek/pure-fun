import isEmpty from '../isEmpty';

const arr = [];
const fullArr = [1, 2, 3];

describe(`[Arrays]: isEmpty`, () => {
  it(`should return true if array is empty`, () => {
    expect(isEmpty(arr)).toEqual(true);
    expect(isEmpty(arr)).toBeTruthy();
  });

  it(`should return false if the array contains values`, () => {
    expect(isEmpty(fullArr)).toEqual(false);
    expect(isEmpty(fullArr)).toBeFalsy();
  });
});
