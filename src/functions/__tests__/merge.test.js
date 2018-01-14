import merge from '../merge';

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

describe(`[Functions]: merge`, () => {
  it(`should output the merged result of the wrapped functions`, () => {
    const wrappedFn = sum(multiply(1, 2), divide(1, 2));

    expect(merge(sum, multiply, divide)(1, 2)).toEqual(wrappedFn);
  });
});