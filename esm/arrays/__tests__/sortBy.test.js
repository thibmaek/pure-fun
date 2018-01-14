import sortBy from '../sortBy';

const arr = [
  { val: 1, name: `Nina Kraviz` },
  { val: 3, name: `Answer Code Request` },
  { val: 2, name: `Cleric` },
];
const arrByVal = [
  { val: 1, name: `Nina Kraviz` },
  { val: 2, name: `Cleric` },
  { val: 3, name: `Answer Code Request` },
];
const arrByName = [
  { val: 3, name: `Answer Code Request` },
  { val: 2, name: `Cleric` },
  { val: 1, name: `Nina Kraviz` },
];

describe(`[Arrays]: sortBy`, ()=>{
  it(`should return the array sorted by value`, ()=>{
    expect(sortBy(arr, `val`)).toEqual(arrByVal);
  });

  it(`should return the array sorted by name`, ()=>{
    expect(sortBy(arr, `name`)).toEqual(arrByName);
  });

  it(`should return sorted by key, but in the reverse order if order is DESC`, ()=>{
    expect(sortBy(arr, `val`, `DESC`)).toEqual([...arrByVal].reverse());
    expect(sortBy(arr, `name`, `DESC`)).toEqual([...arrByName].reverse());
  });
});
