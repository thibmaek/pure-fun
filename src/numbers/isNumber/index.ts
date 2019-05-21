/**
 * Checks if the given input is a number
 */
const isNumber = (x: any) => !Number.isNaN(Number(x)) && Number.isInteger(Math.trunc(x));
export default isNumber;
