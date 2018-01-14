/**
 * Recursive & async Array#forEach clone by callback
 * @param  {Array<Any>} arr an array consisting of any sort of values
 * @param  {Function} fn the callback to call forEach with
 * @param  {Function} cb the callback after forEach has completed
 * @param  {!Any} i private internal identifier for recursion
 * @return {Void}
 */
export default function forEach(arr, fn, cb, i) {
  if (typeof i === `undefined`) i = 0;
  if (arr[i]) {
    fn(arr[i], () => {
      forEach(arr, fn, cb, i + 1);
    });
  } else {
    cb(false);
  }
}
