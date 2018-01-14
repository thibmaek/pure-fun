import isEmpty from '../isEmpty';

const emptyStr = ``;
const boxedStr = String(`Thibault Maekelbergh`);
const str = `Thibault Maekelbergh`;

describe(`[Strings]: isEmpty`, ()=>{
  it(`should return true or false if string is empty/not empty`, ()=>{
    expect(isEmpty(emptyStr)).toEqual(true);
    expect(isEmpty(boxedStr)).toEqual(false);
    expect(isEmpty(String(``))).toEqual(true);
    expect(isEmpty(new String())).toEqual(true);
    expect(isEmpty(str)).toEqual(false);
  });
});