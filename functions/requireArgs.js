/**
 * Force require arguments for a function
 * @param  {Function} fn the function to require arguments for
 * @return {Any|Void} the function's result if check passed, undefined if it didn't
 */
export default fn => (...args) => args.length < fn.length ? undefined : fn(...args);
