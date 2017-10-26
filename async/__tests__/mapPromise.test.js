import mapPromise from '../mapPromise';

const promise = input => new Promise(resolve => resolve(input * 10));

describe(`Method: `, () => {
  it(`should map the promises and return the result`, async () => {
    const inputs = [100, 200, 300];

    await expect(mapPromise(inputs, promise)).resolves.toEqual([1000, 2000, 3000]);
    await expect(mapPromise(inputs, promise)).resolves.toEqual(inputs.map(i => i * 10));
  });

  it(`should return the equivalent of Promise#all for an array of promises`, async () => {
    const promiseArray = [
      new Promise(resolve => resolve(`One`)),
      new Promise(resolve => resolve(`Two`)),
    ];

    const promiseAll = async () => Promise.all(promiseArray);
    const res = await promiseAll();

    await expect(mapPromise(promiseArray)).resolves.toEqual([`One`, `Two`]);
    await expect(mapPromise(promiseArray)).resolves.toEqual(res);
  });
});
