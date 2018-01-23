/**
 * @flow
 * Get the intersection (equal values) between two arrays
 */
export default (a: Array<any>, b: Array<any>): Array<any> => [...new Set(a.filter(i => new Set(b).has(i)))];