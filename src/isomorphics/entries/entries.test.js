import entries from '.';

const arr = [1, 2, 3, 4];
const obj = { a: 1, b: 2, c: 3, d: 4 };
const str = `hello`;

describe(`Name of the group`, () => {
  it(`should return an array of entries`, () => {
    expect(entries(arr)).toEqual([[`0`, 1], [`1`, 2], [`2`, 3], [`3`, 4]]);
    expect(entries(obj)).toEqual([[`a`, 1], [`b`, 2], [`c`, 3], [`d`, 4]]);
    expect(entries(str)).toEqual([[`0`, `h`], [`1`, `e`], [`2`, `l`], [`3`, `l`], [`4`, `o`]]);
  });
});
