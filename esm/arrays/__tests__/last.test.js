import last from '../last';

const arr = [1, 2, 3];

describe(`[Arrays]: last`, () => {
  it(`should return the last item in the array`, () => {
    expect(last(arr)).toEqual(3);
    expect(last(arr)).toEqual(arr[arr.length - 1]);
  });
});
