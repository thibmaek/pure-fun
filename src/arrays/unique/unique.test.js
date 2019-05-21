import unique from '.';

const arrayWithDupes = [1, 2, 1, `a`, `b`, String(`a`)];

describe(`[Arrays]: unique`, () => {
  it(`should return an array without duplicate values`, () => {
    expect(unique(arrayWithDupes)).toEqual([1, 2, `a`, `b`]);
  });
});
