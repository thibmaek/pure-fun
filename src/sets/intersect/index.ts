/**
 * Returns the intersection between the two input sets
 */
const intersect = (a: Set<any>, b: Set<any>) => new Set([...a].filter(i => b.has(i)));
export default intersect;
