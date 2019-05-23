import throttle from '.';

const THROTTLE_TIME = 4000;
const PROMISE = new Promise(resolve => resolve({ status: `RESOLVED` }));

describe(`[Async]: throttle`, () => {
  beforeAll(() => console.log(`Starting a ${THROTTLE_TIME}ms Promise test...`));

  it(`should return a Promise`, () => {
    expect(throttle(THROTTLE_TIME)).toBeInstanceOf(Promise);
    expect(throttle(THROTTLE_TIME, PROMISE)).toBeInstanceOf(Promise);
  });

  describe(`should throttle the function`, () => {
    it(`should just wait for given time if no promise is passed`, done => {
      const startTime = process.hrtime();
      const throttledPromise = throttle(500);

      throttledPromise.then(() => {
        const [seconds, nanoseconds] = process.hrtime(startTime);

        expect(seconds).toEqual(0);
        expect(nanoseconds).toBeLessThan(510000000);
        expect(nanoseconds).toBeGreaterThan(499000000);
        done();
      });
    });

    it(`should return the given promise after specified time`, done => {
      const startTime = process.hrtime();

      const throttledPromise = throttle(THROTTLE_TIME, PROMISE);

      throttledPromise.then(data => {
        const [seconds] = process.hrtime(startTime);

        expect(seconds).toBeLessThan(5);
        expect(seconds).toBeGreaterThanOrEqual(4);
        expect(data).toMatchObject({ status: `RESOLVED` });
        done();
      });
    });
  });
});
