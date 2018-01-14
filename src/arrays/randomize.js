/**
 * @flow
 * Randomize an array index order, optionally trimming it
 */
export default (arr: Array<any>, limit: number = 0): Array<any> => [
  ...arr.sort(() => parseInt(Math.random() * 10) % 2)
    .slice(- limit),
];
