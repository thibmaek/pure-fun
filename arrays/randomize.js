/**
 * Randomize an array, optionally trimming it
 * @param  {Array<Any>} arr   [A collection of other types]
 * @param  {?Number}    limit [Amount of returned indexes](Default: Length of array)
 * @return {Array<Any>} - A new collection containing randomly sorted elements, optionally trimmed
**/

/**
 * Randomize an array index order, optionally trimming it
 * @param  {Array<Any>} arr an array containing any type
 * @param  {Number} [limit=0] optional limit of indexes to return in the new array
 * @return {Array<Any>} a reshuffled array, optionally trimmed
 */
export default (arr, limit = 0) => [
  ...arr.sort((a, b) => parseInt(Math.random() * 10) % 2)
    .slice(- limit),
];
