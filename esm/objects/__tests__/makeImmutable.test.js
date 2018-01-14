import immutable from '../makeImmutable';

const obj = { a: 1, b: 2, c: 3 };
const immutableObj = immutable(obj);

describe(`[Objects]: makeImmutable`, ()=>{
  it(`should stop properties from being modified or created`, ()=>{
    expect(()=>immutableObj.a = 3).toThrowError(TypeError);
    expect(()=>Object.assign(immutableObj, { d: 4 })).toThrowError(TypeError);
    expect(()=>Object.defineProperty(immutableObj, `d`, 4)).toThrowError(TypeError);
  });

  it(`should be frozen & sealed`, ()=>{
    expect(Object.isFrozen(immutableObj)).toEqual(true);
    expect(Object.isSealed(immutableObj)).toEqual(true);
  });
});
