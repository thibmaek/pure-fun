/**
 * 
 * Check if given number is a valid Number
 */
export default x => !Number.isNaN(Number(x)) && Number.isInteger(Math.trunc(x));
