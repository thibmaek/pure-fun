const _count = names => names.reduce((acc, name) => Object.assign(acc, {  [name]: (acc[name] || 0) + 1  }), {});
const _duplicates = dict => Object.keys(dict).filter(a => dict[a] > 1);

/**
 * Returns an array of values that are duplicate in the input array.
 */
const duplicates = <T>(arr: T[]) => _duplicates(_count(arr));
export default duplicates;
