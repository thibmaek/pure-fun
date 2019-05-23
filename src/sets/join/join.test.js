import join from '.';

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([5, 6, 7, 8]);

describe(`[Sets]: join`, () => {
  it(`should join together two sets`, () => {
    expect(join(set1, set2)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]));
  });

  it(`should be a Set not an Array`, () => {
    expect(join(set1, set2)).toBeInstanceOf(Set);
    expect(join(set1, set2)).not.toBeInstanceOf(Array);
  });
});
