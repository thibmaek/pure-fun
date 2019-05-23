import diff from '.';

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([1, 4]);

describe(`[Sets]: diff`, () => {
  it(`should diff together two sets`, () => {
    expect(diff(set1, set2)).toEqual(new Set([2, 3]));
  });

  it(`should be a Set not an Array`, () => {
    expect(diff(set1, set2)).toBeInstanceOf(Set);
    expect(diff(set1, set2)).not.toBeInstanceOf(Array);
  });
});
