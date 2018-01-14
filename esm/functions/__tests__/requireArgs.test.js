import reqArgs from '../requireArgs';

const sum = (a, b) => a + b;

describe(`[Functions]: requireArgs`, () => {
  it(`should return undefined if a function passed has no arguments`, () => {
    expect(reqArgs(sum)()).toEqual(undefined);
  });

  it(`should return undefined if a function has too few arguments`, () => {
    expect(reqArgs(sum)(1)).toEqual(undefined);
  });

  it(`should return the function's return value if arguments are passed`, () => {
    expect(reqArgs(sum)(1, 2)).toEqual(3);
  });
});
