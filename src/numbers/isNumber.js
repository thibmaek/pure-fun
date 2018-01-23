/**
 * @flow
 * Check if given number is a valid Number
 */
export default (x: any): boolean => !Number.isNaN(Number(x)) && Number.isInteger(Math.trunc(x));
