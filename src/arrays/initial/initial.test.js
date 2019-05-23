import initial from '.';

const arr = [1, 2, 3];

describe(`[Arrays]: initial`, () => {
  it(`should return the first item in the array`, () => {
    expect(initial(arr)).toEqual(1);
  });

  it(`should not be vulnerable to mutations`, () => {
    const copy = initial(arr);
    arr[0] = 2;
    expect(copy).toEqual(1);
  });
});
