/**
 * Group an array by given property key
 * @param {Array<Object>} arr array consisting of objects
 * @param {String} key the key to group array objects by
 * @returns {Object}
 */
export default (arr, key) => (arr || []).reduce((acc, x = {}) => ({
  ...acc,
  [x[key]]: [...acc[x[key]] || [], x],
}), {});