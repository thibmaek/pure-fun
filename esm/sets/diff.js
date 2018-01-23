/**
 * 
 * Get the values differing when comparing two sets
 */
export default (a, b) => new Set([...a].filter(i => !b.has(i)));
