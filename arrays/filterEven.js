/**
 * Returns even number values in an array
 * @param  {Array<Number>} arr an array containing a set of numbers (int, float)
 * @return {[type]} array consisting only of the even numbers
 */
export default arr => arr.filter(x => !(typeof x === `string`) && x % 2 === 0);
