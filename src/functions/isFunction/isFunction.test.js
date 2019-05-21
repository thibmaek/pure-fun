import isFunction from '.';

describe(`[Functions]: isFunction`, () => {
  it(`should correctly validate valid functions`, () => {
    const lambda = () => {};
    expect(isFunction(lambda)).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function fn() {})).toBe(true);
    expect(isFunction(Function())).toBe(true);
  });

  it(`should correctly validate invalid data`, () => {
    const ClassObj = class D {};
    [{}, new Date(), 45, `jd`, String(), undefined, new ClassObj()]
      .forEach(val => expect(isFunction(val)).toBe(false));
  });
});
