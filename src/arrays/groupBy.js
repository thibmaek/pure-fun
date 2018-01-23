/**
 * @flow
 * Group an array by given property key
 */
export default (arr: Array<Object>, key: string): Object => (arr || []).reduce((acc, x = {}) => ({
  ...acc,
  [x[key]]: [...acc[x[key]] || [], x],
}), {});