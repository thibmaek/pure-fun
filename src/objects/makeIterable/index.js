/**
 * Creates a new IterableIterator object from the original
 */
// export default function* (obj) {
//   yield* Object.keys(obj).map(key => [key, obj[key]]);
//   return obj;
// }
const makeIterable = obj => {
  console.log(`
    This function is currently not implemented and will just return the original object.
    https://github.com/developit/microbundle/issues/319
  `);
  return obj;
};
export default makeIterable;
