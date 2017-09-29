/**
 * Pick a random value from an array
 * @param  {Array<Any>} arr an array containing any type
 * @return {Any} a random index picked from the array
 */
export default arr => arr[Math.floor(Math.random() * arr.length)];
