/**
 * Merge together functions into a combined output: fn(f(), g())
 */
export default (fn: Function, f: Function, g: Function) => (...args: any[]) => fn(f(...args), g(...args));
