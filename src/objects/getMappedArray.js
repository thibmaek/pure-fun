/**
 * @flow
 * Create an iterable key-value array from an Object
 */
export default (obj: Object): Array<*> => [...new Map(Object.entries(obj))];
