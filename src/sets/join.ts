/**
 * Join together all input arrays into one new array.
 */
export default (a: Set<any>, b: Set<any>) => new Set([...a, ...b]);
