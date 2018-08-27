import deepCopy from '../deepCopy';

const obj1 = { a: 1, b: { c: { d: [4] } } };
const arr1 = [{...obj1}, [{ d: [{ c: 3}]}]];

describe(`[Objects]: deepCopy`, () => {
  it(`should make a deep copy of an object`, () => {
    const cp = deepCopy(obj1);
    expect(cp).toEqual(obj1);

    obj1.b.c = 2;
    expect(cp).not.toEqual(obj1);
  });
  it('should also work on arrays', () => {
    const cp = deepCopy(arr1);
    expect(cp).toEqual(arr1)

    arr1[0] = null;
    arr1[1].d = 4;
    expect(cp).not.toEqual(arr1);
  });
});
