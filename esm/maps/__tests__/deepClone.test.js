import cloneDeep from '../deepClone';

const map = new Map().set(`arr`, []);

describe(`[Maps]: deepClone`, ()=>{
  it(`should deep clone a given map`, ()=>{
    const cl = cloneDeep(map);
    map.get(`arr`).push(1);
    expect(cl.get(`arr`)).toEqual([]);
    expect(map.get(`arr`)).toEqual([1]);
  });
});
