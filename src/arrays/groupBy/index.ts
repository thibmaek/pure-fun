/**
 * Groups an array of objects by the given key
 */
const groupBy = (arr: Object[], key: string) => (arr || []).reduce((acc, x = {}) => ({
  ...acc,
  [x[key]]: [...acc[x[key]] || [], x],
}), {});

export default groupBy;
