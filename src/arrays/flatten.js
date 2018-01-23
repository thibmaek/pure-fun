/**
 * @flow
 * Recursively flatten a multidimensional array
 */
const flatten = (arr: Array<any>): Array<any> =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export default flatten;
