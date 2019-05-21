import pickRandom from '.';

const originalArray = [5, 6, 7, 8];

describe(`[Arrays]: pickRandom`, () => {
  it(`should pick one random value from an array`, () => {
    expect(originalArray).toContain(pickRandom(originalArray));
  });
});
