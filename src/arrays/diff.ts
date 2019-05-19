/**
 * Returns the difference between 2 arrays
 */
export default (a: any[], b: any[]) => [...new Set(a.filter(i => !new Set(b).has(i)))];
