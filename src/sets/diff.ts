/**
 * Returns the difference between 2 sets
 */
export default (a: Set<any>, b: Set<any>) => new Set([...a].filter(i => !b.has(i)));
