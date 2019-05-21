import getMonths from '../getMonths';

describe(`[Dates]: getMonths`, () => {
  it(`without any options should return US American long formatted dates`, () => {
    expect(getMonths()).toEqual([`December`, `January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`]);
  });

  it(`with the nl-BE locale`, () => {
    expect(getMonths(`nl-BE`)).toEqual([`december`, `januari`, `februari`, `maart`, `april`, `mei`, `juni`, `juli`, `augustus`, `september`, `oktober`, `november`]);
  });

  it(`with a short format`, () => {
    expect(getMonths(`en-US`, `short`)).toEqual([`Dec`, `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`]);
  });
});
