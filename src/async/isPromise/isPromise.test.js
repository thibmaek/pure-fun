import isPromise from '.';

describe(`[Async]: isPromise`, () => {
  it(`should correctly validate if the data is a Promise`, () => {
    expect(isPromise(new Promise(res => res(true)))).toBe(true);
  });

  it(`should correctly validate if the data is not a Promise`, () => {
    [{}, new Date(), 3, `string`]
      .forEach(value => expect(isPromise(value)).toBe(false));
  });
});
