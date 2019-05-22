import getMonths from '../getMonths';

describe(`[Dates]: getMonths`, () => {
  it(`without any options should return US American long formatted dates`, () => {
    expect(getMonths())
      .toEqual([`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]);
  });

  it(`with the nl-BE locale`, () => {
    expect(getMonths(`nl-BE`))
      .toEqual([`januari`, `februari`, `maart`, `april`, `mei`, `juni`, `juli`, `augustus`, `september`, `oktober`, `november`, `december`]);
  });

  it(`with a short format`, () => {
    expect(getMonths(`en-US`, `short`))
      .toEqual([`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`]);
  });
});
