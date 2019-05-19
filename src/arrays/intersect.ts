/**
 * Returns the intersection between the two input arrays
 */
export default (a: any[], b: any[]) => [...new Set(a.filter(i => new Set(b).has(i)))];
