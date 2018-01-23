/**
 * @flow
 * Join together two sets into a new set
 */
export default (a: Set<any>, b: Set<any>): Set<any> => new Set([...a, ...b]);
