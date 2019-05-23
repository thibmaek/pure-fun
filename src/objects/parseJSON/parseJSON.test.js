import parseJSON from '.';

const obj = {
  album: `Not even Happiness`,
  artists: `Julie Byrne`,
  format: `LP`,
  genre: `Folk`,
};
const validJSON = JSON.stringify(obj);
const invalidJSON = `{"artist":"Julie Byrne",album:"Not Even Happiness","format":"LP","genre":"Folk",}`;

describe(`[Objects]: parseJSON`, () => {

  it(`should return an object from a parsed JSON string`, () => {
    expect(parseJSON(validJSON)).toEqual(JSON.parse(validJSON));
  });

  it(`should return an empty object if the JSON is invalid`, () => {
    const json = parseJSON(invalidJSON);

    expect(json).toEqual({});
    expect(json).toBeInstanceOf(Object);
    expect(() => json).not.toThrow();
    expect(json).not.toEqual(JSON.parse(validJSON));
  });

  it(`should return the original object if it is invalid JSON but an object`, () => {
    const json = parseJSON(obj);

    expect(json).toEqual(obj);
    expect(json).toBeInstanceOf(Object);
  });

});
