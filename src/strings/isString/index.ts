/**
 * Check if the given input is a string
 */
const isString = (str: any) => typeof str === 'string' && typeof str.endsWith === 'function';
export default isString;
