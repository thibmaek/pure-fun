import getQueryString from '.';

const params = {
  id: 2,
  referrer: `dev.to`,
  search: true,
};

const querystring = `id=2&referrer=dev.to&search=true`;

describe(`[Objects]: getQueryString`, () => {
  it(`should return a valid querystring`, () => {
    expect(typeof getQueryString(params)).toBe(`string`);
    expect(getQueryString(params)).toBe(querystring);
  });

  it(`should auto assign incremented ids for an array instead of object`, () => {
    const arrParams = [0, `dev.to`, true];

    expect(typeof getQueryString(params)).toBe(`string`);
    expect(getQueryString(arrParams)).toBe(`0=${arrParams[0]}&1=${arrParams[1]}&2=${arrParams[2]}`);
  });
});
