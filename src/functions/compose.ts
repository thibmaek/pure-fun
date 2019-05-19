/**
 * Compose together an array of functions into a higher-order function.
 */
export default (...fns: Function[]) => res => fns.reduce((acc, next) => next(acc), res);
