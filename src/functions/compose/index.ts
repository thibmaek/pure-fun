/**
 * Compose together an array of functions into a higher-order function.
 */
const compose = (...fns: Function[]) => res => fns.reduce((acc, next) => next(acc), res);
export default compose;
