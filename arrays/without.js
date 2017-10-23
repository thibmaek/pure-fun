/**
 * Filter out some values from an array
 * @param  {Array<Any>} arr an array containing any type
 * @param  {...Any} values values to filter out from the array
 * @return {Array<Any>} the filtered array
 */
export default (arr, ...values) => arr.filter(el => !values.some(exclude => el === exclude));
