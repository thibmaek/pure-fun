/**
 * Performs a sleep/delay/wait for a given amount of miliseconds.
 */
export default (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
