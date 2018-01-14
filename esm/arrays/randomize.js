/**
 * 
 * Randomize an array index order, optionally trimming it
 */
export default (arr, limit = 0) => [
  ...arr.sort(() => parseInt(Math.random() * 10) % 2)
    .slice(- limit),
];
