/**
 * @flow
 * Take the median out of an array
 * @param  {Array<Number>} arr array consisting of numbers
 * @return {Number} the median in the array
 */
export default (arr: Array<number>): number => {
  const a = arr.sort();
  const idx = (a.length / 2).toFixed(0);

  return (a.length > 1) ? a[idx] : a[0];
};
