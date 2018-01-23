/**
 * @flow
 * Compose a series of functions together
 */
export default (...fns: Array<Function>): any => res => fns.reduce((acc, next) => next(acc), res);
