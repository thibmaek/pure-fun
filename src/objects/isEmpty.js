/**
 * @flow
 * Check if an object is empty or contains properties
 */
export default (obj: Object): boolean => Object.entries(obj).length < 1;
