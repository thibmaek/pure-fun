import isObject from '.';

describe(`[Objects]: isObject`, () => {
  it(`should detect valid objects`, () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 2 })).toBe(true);
    expect(isObject(Object())).toBe(true);
    expect(isObject(Object({ a: 2 }))).toBe(true);
  });

  it(`should detect invalid objects`, () => {
    expect(isObject(new Date())).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(3)).toBe(false);
    expect(isObject(`string`)).toBe(false);
    expect(isObject(String())).toBe(false);
    expect(isObject(new Set())).toBe(false);
    expect(isObject(new Map())).toBe(false);
    expect(isObject([2])).toBe(false);
  });
});
