import getDays from '../getDays';

describe(`[Dates]: getDays`, () => {
  it(`without any options should return US American long formatted dates`, () => {
    expect(getDays()).toEqual([`Saturday`, `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`]);
  });

  it(`with the nl-BE locale`, () => {
    expect(getDays(`nl-BE`)).toEqual([`zaterdag`, `zondag`, `maandag`, `dinsdag`, `woensdag`, `donderdag`, `vrijdag`]);
  });

  it(`with a short format`, () => {
    expect(getDays(`en-US`, `short`)).toEqual([`Sat`, `Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`]);
  });
});
