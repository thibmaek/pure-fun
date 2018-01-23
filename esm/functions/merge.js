/**
 * 
 * Merge together a series of functions in the wrapping function's output
 */
export default (fn, f, g) => (...args) => fn(f(...args), g(...args));
