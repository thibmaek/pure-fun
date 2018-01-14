/**
 * 
 * Get the intersection (equal values) between two arrays
 */
export default (a, b) => [...new Set(a.filter(i => new Set(b).has(i)))];