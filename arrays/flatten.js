/**
 * Flatten a multidimensional array
 * @param {Array<Any>} arr [A collection of other types]
 * @return {Array<Any>} - Single dimension collection
**/
module.exports = arr =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
