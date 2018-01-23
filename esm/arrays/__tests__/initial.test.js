import initial from '../initial';

const arr = [1, 2, 3];

describe(`[Arrays]: initial`, () => {
  it(`should return anything but the last item in an array`, () => {
    expect(initial(arr)).toEqual([1, 2]);
  });
});
