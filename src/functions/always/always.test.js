import always from '.';

const blue = `blue`;

describe(`[Functions]: always`, () => {
  // Haha if you get this
  const truth = always(blue);

  it(`returns the given value`, () => {
    expect(truth()).toBeDefined();
    expect(truth()).toEqual(blue);
  });

  it(`should not return a value other than the provided one`, () => {
    expect(truth()).not.toEqual(`#0000FF`);
  });
});
