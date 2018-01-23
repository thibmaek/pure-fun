/**
 * @flow
 * Get the values differing when comparing two sets
 */
export default (a: Set<any>, b: Set<any>): Set<any> => new Set([...a].filter(i => !b.has(i)));
