import convertToDateIfNeeded from '.';

describe(`[Dates]: convertToDate`, () => {
  it(`should return the Date object entered if it is a date`, () => {
    const thisIsADate = new Date(`10-29-1995`);

    expect(convertToDateIfNeeded(thisIsADate)).toEqual(thisIsADate);
  });

  it(`should return a UTC timestamp if a date-like string is entered`, () => {
    const dateString = `11-11-2011`;

    expect(convertToDateIfNeeded(dateString)).toEqual(Date.parse(dateString));
  });
});
