/**
 * 
 * Zip in two values into a new zipped array
 */
export default (arr1, arr2, zipper) => zipper
  ? arr1.map((val, i) => zipper(val, arr2[i]))
  : arr1.map((val, i) => [val, arr2[i]]);
