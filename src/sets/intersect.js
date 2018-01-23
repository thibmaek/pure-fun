/**
 * @flow
 * Get the intersection (equal values) between two sets
 */
export default (a: Set<any>, b: Set<any>): Set<any> => new Set([...a].filter(i => b.has(i)));
