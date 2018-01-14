/**
 * 
 * Returns even number values in an array
 */
export default arr => arr.filter(x => !(typeof x === `string`) && x % 2 === 0);
