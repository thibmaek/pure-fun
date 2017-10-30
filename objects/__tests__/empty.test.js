import empty from '../empty';

const emptyObj = {};
const regularObj = { a: 1, b: 2, c: 3 };

describe(`[Objects]: empty`, () => {
  it(`should return true if an object is empty`, () => {
    expect(empty(emptyObj)).toEqual(true);
    expect(empty(emptyObj)).toBeTruthy();
  });

  it(`should return false if an object contains properties`, () => {
    expect(empty(regularObj)).toEqual(false);
    expect(empty(regularObj)).toBeFalsy();
  });
});
