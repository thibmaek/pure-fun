/**
 * Get the intersection (equal values) between two arrays
 * @param  {Array<Any>} a left-hand side array to include in diff
 * @param  {Array<Any>} b right-hand side array to include in diff
 * @return {Array<Any>} the intersection between the two arrays
 */
export default (a, b) => [...new Set(a.filter(i => new Set(b).has(i)))];