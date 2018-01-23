/**
 * @flow
 * Returns even number values in an array
 */
export default (arr: Array<number>): Array<number> => arr.filter(x => !(typeof x === `string`) && x % 2 === 0);
