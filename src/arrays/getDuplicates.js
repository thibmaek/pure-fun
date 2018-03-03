const _count = names => names.reduce((acc, name) => Object.assign(acc, {  [name]: (acc[name] || 0) + 1  }), {});
const _duplicates = dict => Object.keys(dict).filter(a => dict[a] > 1);

/**
 * @flow
 * Return the duplicates in an array
 */
export default (arr: Array<mixed|any>): Array<string> => _duplicates(_count(arr));
