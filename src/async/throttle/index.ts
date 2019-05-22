/**
 * Throttles the input promise for a given amount of miliseconds
 */
const throttle = (ms: number, promise: Promise<any>) => new Promise(
  async (resolve, reject) => {
    const sleep = new Promise(resolve => setTimeout(resolve, ms));

    if (!promise) return resolve(await sleep);

    try {
      const [res] = await Promise.all([promise, sleep]);
      return resolve(res);
    } catch (err) {
      return reject(err);
    }
  }
);

export default throttle;
