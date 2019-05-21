/**
 * Checks if an object is empty
 */
const isEmpty = (obj: Object) => Object.entries(obj).length < 1;
export default isEmpty;
