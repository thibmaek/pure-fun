/**
 * @flow
 * Merge together a series of functions in the wrapping function's output
 */
export default (fn: Function, f: Function, g: Function): any => (...args: Array<any>) => fn(f(...args), g(...args));
