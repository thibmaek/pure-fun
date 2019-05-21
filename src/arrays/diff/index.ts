/**
 * Returns the difference between 2 arrays
 */
const diff = (a: any[], b: any[]) => [...new Set(a.filter(i => !new Set(b).has(i)))];
export default diff;
