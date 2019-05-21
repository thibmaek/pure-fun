import mergeDeep from '.';

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: [2] };

const result = { a: 1, b: 2, c: [2] };

describe(`[Objects]: deepMerge`, () => {
  it(`should deeply merge a series of objects`, () => {
    const shallowObj = Object.assign({}, obj1, obj2, obj3);
    const deepObj = mergeDeep(obj1, obj2, obj3);

    obj3.c.push(3);

    expect(deepObj).toEqual(result);
    expect(deepObj).not.toEqual(shallowObj);
    expect(shallowObj.c).toEqual([2, 3]);
  });
});
