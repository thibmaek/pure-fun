import isDate from '../isDate';

describe(`isDate`, () => {
  it(`should return true if a Date object is passed in`, () => {
    const thisIsADate = new Date(`1-1-2010`);
        
    expect(isDate(thisIsADate)).toEqual(true);
  });

  it(`should return false if the value passed in is not a Date object`, () => {
    const thisIsNotADate = `1-1-2010`;

    expect(isDate(thisIsNotADate)).toEqual(false);
  });
});