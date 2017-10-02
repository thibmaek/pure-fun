/**
 * Zip in two values into a new zipped array
 * @param  {Array<Any>} arr an array containing any type
 * @param  {Array<Any>} arr an array containing any type
 * @param  {?Function} zipper Optional zipper to fold collected values into
 * @return {Array<Any>} A fake-tupple (two-index Array) with the new values or return value of the zipper function
 */
export default (arr1, arr2, zipper) => zipper
  ? arr1.map((val, i) => zipper(val, arr2[i]))
  : arr1.map((val, i) => [val, arr2[i]]);
