/**
 * Returns the intersection between the two input sets
 */
export default (a: Set<any>, b: Set<any>) => new Set([...a].filter(i => b.has(i)));
