/**
 * Returns the difference between 2 arrays
 */
const diff = <T>(a: T[], b: T[]) => [...new Set(a.filter(i => !new Set(b).has(i)))];
export default diff;
