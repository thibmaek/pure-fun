/**
 * Checks if the given input is a number
 */
export default (x: any) => !Number.isNaN(Number(x)) && Number.isInteger(Math.trunc(x));
