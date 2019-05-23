import isNumber from '.';

const validNum = 22;
const validBoxedNum = Number(`22`);
const validStringNum = `22`;
const invalidUndefined = undefined;
const invalidUndefinedNum = undefined + 22;

describe(`[Numbers]: isNumber`, () => {
  it(`outputs true/false complying to type validity`, () => {
    expect(isNumber(validNum)).toBeTruthy();
    expect(isNumber(validBoxedNum)).toBeTruthy();
    expect(isNumber(validBoxedNum)).toBeTruthy();
    expect(isNumber(validStringNum)).toBeTruthy();
    expect(isNumber(invalidUndefined)).toBeFalsy();
    expect(isNumber(invalidUndefinedNum)).toBeFalsy();
  });
});
