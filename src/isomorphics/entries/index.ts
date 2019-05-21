/**
 * Isomorphic Object.entries()
 */
const entries = (any: any[] | Object | string) => Object.keys(any).map(key => [key, any[key]]);
export default entries;
