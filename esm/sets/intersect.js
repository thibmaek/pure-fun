/**
 * 
 * Get the intersection (equal values) between two sets
 */
export default (a, b) => new Set([...a].filter(i => b.has(i)));
