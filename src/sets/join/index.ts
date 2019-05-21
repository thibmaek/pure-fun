/**
 * Join together all input arrays into one new array.
 */
const join = (a: Set<any>, b: Set<any>) => new Set([...a, ...b]);
export default join;
