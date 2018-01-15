import sortBy from '../sortBy';

const arr = [
  { name: `Nina Kraviz`, val: 1 },
  { name: `Answer Code Request`, val: 3 },
  { name: `Cleric`, val: 2 },
];
const arrByVal = [
  { name: `Nina Kraviz`, val: 1 },
  { name: `Cleric`, val: 2 },
  { name: `Answer Code Request`, val: 3 },
];
const arrByName = [
  { name: `Answer Code Request`, val: 3 },
  { name: `Cleric`, val: 2 },
  { name: `Nina Kraviz`, val: 1 },
];

describe(`[Arrays]: sortBy`, () => {
  it(`should return the array sorted by value`, () => {
    expect(sortBy(arr, `val`)).toEqual(arrByVal);
  });

  it(`should return the array sorted by name`, () => {
    expect(sortBy(arr, `name`)).toEqual(arrByName);
  });

  it(`should return sorted by key, but in the reverse order if order is DESC`, () => {
    expect(sortBy(arr, `val`, `DESC`)).toEqual([...arrByVal].reverse());
    expect(sortBy(arr, `name`, `DESC`)).toEqual([...arrByName].reverse());
  });
});
