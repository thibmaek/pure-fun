import head from '../head';

const arr = [1, 2, 3];

describe(`[Arrays]: head`, ()=>{
  it(`should return only the first item of an array`, ()=>{
    expect(head(arr)).toEqual(1);
    expect(head(arr)).toEqual(arr[0]);
  });

  it(`should not be vulnerable to mutations`, ()=>{
    const h = head(arr);
    arr[0] = 2;

    expect(h).toEqual(1);
  });
});
