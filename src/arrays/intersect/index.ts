/**
 * Returns the intersection between the two input arrays
 */
const intersect = <T>(a: T[], b: T[]) => [...new Set(a.filter(i => new Set(b).has(i)))];
export default intersect;
