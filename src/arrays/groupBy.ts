/**
 * Groups an array of objects by the given key
 */
export default (arr: Object[], key: string) => (arr || []).reduce((acc, x = {}) => ({
  ...acc,
  [x[key]]: [...acc[x[key]] || [], x],
}), {});
