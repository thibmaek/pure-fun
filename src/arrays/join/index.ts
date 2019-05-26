/**
 * Join together all input arrays into one new array.
 * This will created nested array structure!
 * For flat array structure use pure-fun/arrays/flatten
 */
const join = <T>(...arrs: T[]) => [...arrs];
export default join;
