import always from '../always';

const blue = `blue`;

describe(`[Functions]: always`, () => {
  it(`returns the given value`, () => {
    expect(always(blue)).toBeDefined();
    expect(always(blue)).toEqual(blue);
  });

  it(`should not return a value other than the provided one`, () => {
    expect(always(blue)).not.toEqual(`#0000FF`);
  });
});
