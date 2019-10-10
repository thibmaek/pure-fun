import oneOf from '.';

describe(`[Isomorphics]: oneOf`, () => {
  it(`should return true if the given data occurs in the provided shape`, () => {
    expect(oneOf(3, [1, 2, 3])).toBe(true);
    expect(oneOf(`string`, [`string`, `s`, `[Object object]`])).toBe(true);
  });

  it(`should return false if the given data does not occur in the provided shape`, () => {
    expect(oneOf(undefined, [1, 2, 3])).toBe(false);
    expect(oneOf(null, [`string`, `s`, `[Object object]`])).toBe(false);
    expect(oneOf(() => {}, [{}, `s`, `[Object object]`])).toBe(false);
    expect(oneOf({}, [3, `s`, `[Object object]`])).toBe(false);
  });

  it(`should throw a TypeError if no shape is provided`, () => {
    expect(() => oneOf(3)).toThrowError(TypeError);
    expect(() => oneOf(3, function() {})).toThrowError(TypeError);
  });
});
