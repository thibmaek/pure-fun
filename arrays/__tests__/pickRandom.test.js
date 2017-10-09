import pickRandom from '../pickRandom';
const originalArray = [5, 6, 7, 8];

describe(`pickRandom`, () => {
  it(`should pick one value at random from array`, () => {
    expect(originalArray).toContain(pickRandom(originalArray));
  });
});