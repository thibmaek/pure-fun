import isIterable from '.';

describe(`[Isomorphics]: isIterable`, () => {
  it(`should correctly validate iterable instances`, () => {
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable([2, 3, 4, [5, 6 ]].entries())).toBe(true);
  });

  it(`should not validate types which might seem iterable`, () => {
    expect(isIterable({})).toBe(false);
    expect(isIterable(undefined)).toBe(false);
  });
});
