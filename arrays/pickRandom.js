/**
 * Pick a random value from an array
 * @param  {Array<Any>} arr [A collection of other types]
 * @return {Any} - A randomly returned array element
 */
module.exports = arr => arr[Math.floor(Math.random() * arr.length)];
