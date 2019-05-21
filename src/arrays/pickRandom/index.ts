/**
 * Returns a random item from the input array
 */
const pickRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
export default pickRandom;
