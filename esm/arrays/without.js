/**
 * 
 * Filter out specific values from an array
 */
export default (arr, ...values) => arr.filter(el => !values.some(excl => el === excl));
