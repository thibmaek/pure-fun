import pluckDeep from '.';

const deepObj = { a: { b: { c: `✓` } } };

describe(`[Objects]: pluckDeep`, () => {
  it(`should return the value for a given key`, () => {
    expect(pluckDeep(`a.b.c`)(deepObj)).toEqual(`✓`);
  });
});
