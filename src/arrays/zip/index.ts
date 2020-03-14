/**
 * Zips together 2 input arrays via either the provided zipper function,
 * or by performing a standard zipping operation.
 */
const zip = <T>(arr1: T[], arr2: T[], zipper: Function) => zipper
  ? arr1.map((val, i) => zipper(val, arr2[i]))
  : arr1.map((val, i) => [val, arr2[i]]);
export default zip;
