/**
 * Returns the difference between 2 sets
 */
const diff = (a: Set<any>, b: Set<any>) => new Set([...a].filter(i => !b.has(i)));
export default diff;
