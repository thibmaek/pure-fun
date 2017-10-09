import sleep from '../sleep';

describe(`sleep`, () => {
  it(`should return a promise`, () => {
    const delayedResponse = sleep(1000);

    expect(delayedResponse).toBeInstanceOf(Promise);
  });

  it(`should return after the set timeout time`, done => {
    const hrStart = process.hrtime();
    const delayedResponse = sleep(500);
    delayedResponse.then(() => {
      const hrEnd = process.hrtime(hrStart);
      
      expect(hrEnd[0]).toEqual(0);
      expect(hrEnd[1]).toBeGreaterThan(500000000);
      done();
    });
  });
});