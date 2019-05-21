import isString from '.';

describe(`[Strings]: isString`, () => {
  it(`should return true if the type is a string`, () => {
    expect(isString(``)).toBe(true);
    expect(isString(`String`)).toBe(true);
    expect(isString(String())).toBe(true);
  });

  it(`should return false if the type is not string`, () => {
    expect(isString({})).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
  });
});
