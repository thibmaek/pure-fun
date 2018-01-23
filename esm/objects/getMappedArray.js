/**
 * 
 * Create an iterable key-value array from an Object
 */
export default obj => [...new Map(Object.entries(obj))];
