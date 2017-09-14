/**
 * Randomize an array, optionally trimming it
 * @param  {Array<Any>} arr   [A collection of other types]
 * @param  {?Number}    limit [Amount of returned indexes](Default: Length of array)
 * @return {Array<Any>} - A new collection containing randomly sorted elements, optionally trimmed
**/
module.exports = (arr, limit = 0) => [
  ...arr.sort((a, b) => parseInt(Math.random() * 10) % 2)
        .slice(-limit)
];
