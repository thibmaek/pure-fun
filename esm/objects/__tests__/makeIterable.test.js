import iterable from '../makeIterable';

const obj = { a: 1, b: 2, c: 3 };

describe(`[Objects]: makeIterable`, ()=>{
  it(`should be an iterable object`, ()=>{
    const it = iterable(obj);
    expect(typeof it[Symbol.iterator]).toEqual(`function`);
  });

  it(`should iterate over the values`, ()=>{
    const it = iterable(obj);
    expect(it.next().value).toEqual([`a`, 1]);
    expect(it.next().value).toEqual([`b`, 2]);
    expect(it.next().value).toEqual([`c`, 3]);
    expect(it.next().done).toEqual(true);
  });

  it(`should stop after closing the generator`, ()=>{
    const it = iterable(obj);
    it.next();
    it.return();
    expect(it.next().done).toEqual(true);
  });
});
