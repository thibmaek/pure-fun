/**
 * Compose a series of functions together
 * @param  {...Function} fns some functions to compose together
 * @return {Any} the result of the composed functions
 */
export default (...fns) => res => fns.reduce((acc, next) => next(acc), res);
