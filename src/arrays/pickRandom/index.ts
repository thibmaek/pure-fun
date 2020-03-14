/**
 * Returns a random item from the input array
 */
const pickRandom = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
export default pickRandom;
