import capitalize from '../capitalize';

const str = `sample`;
const space = `thibault maekelbergh`;
const uppercase = `UPPERCASE`;
const correct = `Correct`;

describe(`[Strings]: capitalize`, () => {
  it(`should capitalize the first letter of a given string`, () => {
    expect(capitalize(str)).toEqual(`Sample`);
    expect(capitalize(space)).toEqual(`Thibault Maekelbergh`);
    expect(capitalize(uppercase)).toEqual(`Uppercase`);
    expect(capitalize(correct)).toEqual(correct);
  });
});
