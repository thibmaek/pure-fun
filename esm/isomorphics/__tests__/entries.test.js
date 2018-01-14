import entries from '../entries';

const arr = [1, 2, 3, 4];
const obj = { a: 1, b: 2, c: 3, d: 4 };
const str = `1234`;

describe(`Name of the group`, ()=>{
  it(`should return an array of entries`, ()=>{
    expect(entries(arr)).toEqual();
    expect(entries(obj)).toEqual();
    expect(entries(str)).toEqual();
  });
});