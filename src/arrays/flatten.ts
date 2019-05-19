/**
 * Returns a new flat array
 */
const flatten = (arr: any[]) =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export default flatten;
