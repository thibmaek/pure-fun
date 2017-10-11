import randomize from '../randomize';

const originalArray = [5, 6, 7, 8, 9, 10];

describe(`[Arrays]: randomize`, () => {
  it(`should return a full randomized array if no limit entered`, () => {
    const randomizedArray = randomize(originalArray);

    expect(randomizedArray).toHaveLength(6);
    randomizedArray.map(value => expect(originalArray).toContain(value));
  });

  it(`should return a truncated, randomized array if a limit is entered`, () => {
    const limit = 3;
    const limitedArray = randomize(originalArray, limit);

    expect(limitedArray).toHaveLength(limit);
    limitedArray.map(value => expect(originalArray).toContain(value));
  });
});
