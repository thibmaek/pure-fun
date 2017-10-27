import empty from '../empty';

const arr = [];
const fullArr = [1, 2, 3];

describe(`[Arrays]: empty`, () => {
  it(`should return true if array is empty`, () => {
    expect(empty(arr)).toEqual(true);
    expect(empty(arr)).toBeTruthy();
  });

  it(`should return false if the array contains values`, () => {
    expect(empty(fullArr)).toEqual(false);
    expect(empty(fullArr)).toBeFalsy();
  });
});
