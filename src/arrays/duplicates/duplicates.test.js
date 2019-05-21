import duplicate from '.';

const arr = [0, 1, 2, 3, 4, 5, 6, true];
const dupedArr = [0, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6, true, true];
const dupes = [`2`, `5`, `true`];

describe(`[Arrays]: duplicate`, () => {
  it(`should return the duplicates in an array`, () => {
    expect(duplicate(dupedArr)).not.toContain(dupes);
    expect(duplicate(dupedArr)).toBeInstanceOf(Array);
    expect(duplicate(dupedArr)).toEqual(dupes);
  });

  it(`should return an empty array if there are no duplicates`, () => {
    expect(duplicate(arr)).toBeInstanceOf(Array);
    expect(duplicate(arr)).not.toContain(arr);
    expect(duplicate(arr)).toEqual([]);
  });
});
