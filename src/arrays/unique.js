/**
 * @flow
 * Filter duplicates from an array using a Set
 */
export default (arr: Array<any>): Array<any> => [...new Set(arr)];
