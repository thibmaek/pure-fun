/**
 * Returns an array with only even numbers
 */
export default (arr: number[]) => arr.filter(x => !(typeof x === `string`) && x % 2 === 0);
