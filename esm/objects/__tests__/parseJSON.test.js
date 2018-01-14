import parseJSON from '../parseJSON';

const validJSON = `{"artist":"Julie Byrne","album":"Not Even Happiness","format":"LP","genre":"Folk"}`;
const invalidJSON = `{"artist":"Julie Byrne",album:"Not Even Happiness","format":"LP","genre":"Folk",}`;

describe(`[Objects]: parseJSON`, ()=>{

  it(`should return an object from a parsed JSON string`, ()=>{
    expect(parseJSON(validJSON)).toEqual(JSON.parse(validJSON));
  });

  it(`should return an empty object if the JSON is invalid`, ()=>{
    const json = parseJSON(invalidJSON);

    expect(json).toEqual({});
    expect(json).toBeInstanceOf(Object);
    expect(()=>json).not.toThrow();
    expect(json).not.toEqual(JSON.parse(validJSON));
  });

});
