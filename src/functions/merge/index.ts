/**
 * Merge together functions into a combined output: fn(f(), g())
 */
const merge = (fn: Function, f: Function, g: Function) => (...args: any[]) => fn(f(...args), g(...args));
export default merge;
