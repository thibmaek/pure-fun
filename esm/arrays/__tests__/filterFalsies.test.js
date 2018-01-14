import filterFalsies from '../filterFalsies';

const arrayWithFalseValues = [false, 2, null, 4, new Number(0), undefined, ``, 6, 0];

describe(`[Array]: filterFalsies`, ()=>{
  it(`should remove falsy values from array`, ()=>{
    expect(filterFalsies(arrayWithFalseValues)).toEqual([2, 4, 0, 6]);
  });
});
