/**
 * Filter duplicates from an array using a Set
 * @param  {Array<Any>} arr an array containing any type of index
 * @return {Array<Any>} the filtered array containing only unique values
 */
export default arr => [...new Set(arr)];
