import getDuplicates from '../getDuplicates';

const arr = [0, 1, 2, 3, 4, 5, 6, true];
const dupedArr = [0, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6, true, true];
const dupes = [`2`, `5`, `true`];

describe(`[Arrays]: getDuplicates`, () => {
  it(`should return the duplicates in an array`, () => {
    expect(getDuplicates(dupedArr)).not.toContain(dupes);
    expect(getDuplicates(dupedArr)).toBeInstanceOf(Array);
    expect(getDuplicates(dupedArr)).toEqual(dupes);
  });

  it(`should return an empty array if there are no duplicates`, () => {
    expect(getDuplicates(arr)).toBeInstanceOf(Array);
    expect(getDuplicates(arr)).not.toContain(arr);
    expect(getDuplicates(arr)).toEqual([]);
  });
});
