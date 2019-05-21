/**
 * Performs synchronous-like Array.forEach() on an array of promises.
 */
const forEach = (arr: Promise<any>[], fn: Function, cb: Function, i = 0) => {
  if (arr[i]) {
    fn(arr[i], () => {
      forEach(arr, fn, cb, i + 1);
    });
  } else {
    cb(false);
  }
}
export default forEach;
