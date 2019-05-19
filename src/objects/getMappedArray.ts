/**
 * Returns a iterable array of tuples from an input object.
 */
export default (obj: Object) => [...new Map(Object.entries(obj))];
