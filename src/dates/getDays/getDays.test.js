import getDays from '.';

describe(`[Dates]: getDays`, () => {
  it(`without any options should return US American long formatted dates`, () => {
    expect(getDays()).toEqual([`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]);
  });

  it(`with the nl-BE locale`, () => {
    expect(getDays(`nl-BE`)).toEqual([`zondag`, `maandag`, `dinsdag`, `woensdag`, `donderdag`, `vrijdag`, `zaterdag`]);
  });

  it(`with a short format`, () => {
    expect(getDays(`en-US`, `short`)).toEqual([`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]);
  });
});
