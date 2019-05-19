/**
 * Zips together 2 input arrays via either the provided zipper function,
 * or by performing a standard zipping operation.
 */
export default (arr1: any[], arr2: any[], zipper: Function) => zipper
  ? arr1.map((val, i) => zipper(val, arr2[i]))
  : arr1.map((val, i) => [val, arr2[i]]);
