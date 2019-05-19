/**
 * Require a given number of arguments for a function
 */
export default (fn: Function) => (...args: any[]) => args.length < fn.length ? undefined : fn(...args);
