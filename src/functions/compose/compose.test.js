import compose from '.';

const addTwo = num => (num + 2);
const multiplyTwo = num => (num * 2);

describe(`[Functions]: compose`, () => {
  it(`should output the result of the composed functions`, () => {
    const initialVal = 2;
    const resultVal = ((initialVal + 2) * 2);

    expect(compose(addTwo, multiplyTwo)(initialVal)).toEqual(resultVal);
  });
});
