/**
 * Checks if the given input is an instance of the Promise object
 */
const isPromise = (prom: unknown): prom is Promise<any> => Promise.resolve(prom) === prom;
export default isPromise;
