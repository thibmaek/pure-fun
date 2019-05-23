import isEven from '.';

const evenInt = 22;
const evenFloat = 22.0;
const boxedEvenInt = Number(`22`);
const oddInt = (evenInt + 1);
const oddFloat = (evenInt + 0.5);
const boxedOddInt = Number(evenInt + 1);

describe(`[Numbers]: isEven`, () => {
  it(`outputs true/false if number is even/odd`, () => {
    expect(isEven(evenInt)).toEqual(true);
    expect(isEven(boxedEvenInt)).toEqual(true);
    expect(isEven(oddInt)).toEqual(false);
    expect(isEven(boxedOddInt)).toEqual(false);
  });

  it(`passes for tailing zero floats, fails for uneven floats`, () => {
    expect(isEven(evenFloat)).toEqual(true);
    expect(isEven(oddFloat)).toEqual(false);
  });
});
