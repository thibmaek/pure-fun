/**
 * Get the median from an array of numbers
 */
export default (arr: number[]) => {
  const a = [...arr.sort()];
  const idx = parseInt((a.length / 2).toFixed(0));

  return (a.length > 1) ? a[idx] : a[0];
};
