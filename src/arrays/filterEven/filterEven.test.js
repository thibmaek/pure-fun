import filterEven from '.';

const arr = [0, 1, 2, 3, 4, 5, Number(6), `7`, `8`, true, false, Number(true)];

describe(`[Array]: filterEven`, () => {
  it(`should return only the even values`, () => {
    expect(filterEven(arr)).toContainEqual(0, 2, 4, 6);
    expect(filterEven(arr)).not.toContainEqual(1, 3, 5);
  });
});
