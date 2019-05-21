/**
 * Performs a sleep/delay/wait for a given amount of miliseconds.
 */
const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
export default sleep;
