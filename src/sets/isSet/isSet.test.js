import isSet from '.';

describe(`[Sets]: isSet`, () => {
  it(`should correctly validate valid Sets`, () => {
    expect(isSet(new Set())).toBe(true);
  });

  it(`should correctly validate invalid data`, () => {
    const ClassObj = class D {};
    [{}, new Date(), 45, `jd`, String(), undefined, new ClassObj(), new Map(), [[], 4]]
      .forEach(val => expect(isSet(val)).toBe(false));
  });
});
