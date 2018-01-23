/**
 * @flow
 * Returns anything but the last item in an array
 */
export default (arr: Array<any>): Array<any> => arr.slice(0, - 1);
