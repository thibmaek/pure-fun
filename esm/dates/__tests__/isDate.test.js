import isDate from '../isDate';

describe(`[Dates]: isDate`, ()=>{
  it(`should return true if a Date object is passed in`, ()=>{
    expect(isDate(new Date())).toEqual(true);
  });

  it(`should return false if the value passed in is not a Date object`, ()=>{
    expect(isDate(`1-1-2010`)).toEqual(false);
  });
});
