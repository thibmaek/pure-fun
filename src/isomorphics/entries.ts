/**
 * Isomorphic Object.entries()
 */
export default (any: any[] | Object | string) => Object.keys(any).map(key => [key, any[key]]);
