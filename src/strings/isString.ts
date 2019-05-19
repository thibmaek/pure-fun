/**
 * Check if the given input is a string
 */
export default (str: any) => typeof str === 'string' && typeof str.endsWith === 'function';
