/**
 * Recursively flatten a multidimensional array
 * @param  {Array<Any>} arr multidimensional array containing any type
 * @return {Array<Any>} a flattened single dimensional array
 */
const flatten = arr =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export default flatten;
