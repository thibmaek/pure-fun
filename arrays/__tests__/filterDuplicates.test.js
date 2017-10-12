import filterDuplicates from '../filterDuplicates';

const arrayWithDupes = [1, 2, 1, `a`, `b`, new String(`a`)];

describe(`[Arrays]: filterDuplicates`, () => {
  it(`should return an array without duplicate values`, () => {
    expect(filterDuplicates(arrayWithDupes)).toEqual([1, 2, `a`, `b`]);
  });
});
