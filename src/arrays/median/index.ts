/**
 * Get the median from an array of numbers
 */
const median = (arr: number[]) => {
  const a = [...arr.sort()];
  const idx = parseInt((a.length / 2).toFixed(0));

  return (a.length > 1) ? a[idx] : a[0];
};
export default median;
