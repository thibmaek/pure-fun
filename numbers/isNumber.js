/**
 * Check if given number is a valid Number
 * @param  {Any} x Any type to check conformity for
 * @return {Bool<true|false>} Output of the check
 */
export default x => !Number.isNaN(Number(x)) && Number.isInteger(Math.trunc(x));