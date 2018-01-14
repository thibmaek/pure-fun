import isEmpty from '../isEmpty';

const emptyObj = {};
const regularObj = { a: 1, b: 2, c: 3 };

describe(`[Objects]: isEmpty`, () => {
  it(`should return true if an object is empty`, () => {
    expect(isEmpty(emptyObj)).toEqual(true);
    expect(isEmpty(emptyObj)).toBeTruthy();
  });

  it(`should return false if an object contains properties`, () => {
    expect(isEmpty(regularObj)).toEqual(false);
    expect(isEmpty(regularObj)).toBeFalsy();
  });
});
