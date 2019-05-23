import intersect from '.';

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([1, 4]);

describe(`[Sets]: intersect`, () => {
  it(`should intersect together two sets`, () => {
    expect(intersect(set1, set2)).toEqual(new Set([1, 4]));
  });

  it(`should be a Set and not an array`, () => {
    expect(intersect(set1, set2)).toBeInstanceOf(Set);
    expect(intersect(set1, set2)).not.toBeInstanceOf(Array);
  });
});
