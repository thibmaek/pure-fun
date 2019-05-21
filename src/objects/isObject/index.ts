/**
 * Checks if the given input is an Object object (haha)
 */
const isObject = (obj: any) => Object(obj) === obj;
export default isObject;
