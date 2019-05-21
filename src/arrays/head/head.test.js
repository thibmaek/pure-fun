import head from '.';

const arr = [1, 2, 3];

describe(`[Arrays]: head`, () => {
  it(`should return everything but the last item from the array`, () => {
    expect(head(arr)).toEqual([1, 2]);
  });
});
