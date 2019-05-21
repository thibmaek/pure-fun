/**
 * Returns a random section from the input array.
 * Not passing 2nd argument: `limit` will return the original array
 */
const randomize = (arr: any[], limit = 0) => [
  ...arr
    .sort(() => (Math.random() * 10) % 2)
    .slice(- limit),
];
export default randomize;
