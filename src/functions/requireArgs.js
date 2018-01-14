/**
 * @flow
 * Force require arguments for a function
 */
export default (fn: Function): any | void => (...args: Array<any>) => args.length < fn.length ? undefined : fn(...args);
