/**
 * Returns an array with only even numbers
 */
const filterEven = (arr: number[]) => arr.filter(x => !(typeof x === `string`) && x % 2 === 0);
export default filterEven;
