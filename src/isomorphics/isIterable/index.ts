/**
 * Check if the given data is an iterable instance
 */
const isIterable = (iterable: any) => {
  if (!iterable) return false;
  return typeof iterable[Symbol.iterator] === `function`
};
export default isIterable;
