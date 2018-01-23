/**
 * @flow
 * Pick a random value from an array
 */
export default (arr: Array<any>): any => arr[Math.floor(Math.random() * arr.length)];
