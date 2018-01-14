import tail from '../tail';

const arr = [1, 2, 3];

describe(`[Arrays]: tail`, () => {
  it(`should return anything but the first value of an array`, () => {
    expect(tail(arr)).toEqual([2, 3]);
  });
});
