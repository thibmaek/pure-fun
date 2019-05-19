import sleep from './sleep';

/**
 * Throttles the input promise for a given amount of miliseconds
 */
export default (promise: Promise<any>, ms = 0) => new Promise(
  async (resolve, reject) => {
    if (!promise) return resolve(await sleep(ms));

    try {
      const [res] = await Promise.all([promise, sleep]);
      return resolve(res);
    } catch (err) {
      return reject(err);
    }
  }
);
