/**
 * 
 * Compose a series of functions together
 */
export default (...fns) => res => fns.reduce((acc, next) => next(acc), res);
