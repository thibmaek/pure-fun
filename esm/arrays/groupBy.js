/**
 * 
 * Group an array by given property key
 */
export default (arr, key) => (arr || []).reduce((acc, x = {}) => ({
  ...acc,
  [x[key]]: [...acc[x[key]] || [], x],
}), {});