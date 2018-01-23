/**
 * 
 * Recursively flatten a multidimensional array
 */
const flatten = arr =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export default flatten;
