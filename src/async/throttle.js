/*
 * @flow
 * Throttle a Promise for a given time
*/
export default (ms: number, promise: Promise<*>): Promise<*> => new Promise(
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
