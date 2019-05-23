/**
 * Checks if the given input is an Object object (haha)
 */
const isObject = (obj: any) => {
  return Object(obj) === obj &&
    Object.prototype.toString.call(obj) === '[object Object]';
};
export default isObject;
