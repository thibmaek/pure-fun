import isMap from '.';

describe(`[Maps]: isMap`, () => {
  it(`should correctly validate valid Maps`, () => {
    expect(isMap(new Map())).toBe(true);
  });

  it(`should correctly validate invalid data`, () => {
    const ClassObj = class D {};
    [{}, new Date(), 45, `jd`, String(), undefined, new ClassObj(), new Set()]
      .forEach(val => expect(isMap(val)).toBe(false));
  });
});
