/**
 * @flow
 * Get the entries for an isomorphic type
 */
export default (any: Array<any> | Object | string): Array<any> => Object.keys(any).map(key => [key, any[key]]);
