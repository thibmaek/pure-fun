/**
 * 
 * Get the entries for an isomorphic type
 */
export default any => Object.keys(any).map(key => [key, any[key]]);
