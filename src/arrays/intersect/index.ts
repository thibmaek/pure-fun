/**
 * Returns the intersection between the two input arrays
 */
const intersect = (a: any[], b: any[]) => [...new Set(a.filter(i => new Set(b).has(i)))];
export default intersect;
