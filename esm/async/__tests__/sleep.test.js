import sleep from '../sleep';

describe(`[Async]: sleep`, () => {
  it(`should return a Promise`, () => {
    expect(sleep(1000)).toBeInstanceOf(Promise);
  });

  it(`should return after the set timeout time`, done => {
    const hrStart = process.hrtime();
    const delayedResponse = sleep(500);

    delayedResponse.then(() => {
      const hrEnd = process.hrtime(hrStart);

      expect(hrEnd[0]).toEqual(0);
      expect(hrEnd[1]).toBeLessThan(510000000);
      expect(hrEnd[1]).toBeGreaterThan(499000000);
      done();
    });
  });
});
