/**
 * Returns a iterable array of tuples from an input object.
 */
const getMappedArray = (obj: Object) => [...new Map(Object.entries(obj))];
export default getMappedArray;
