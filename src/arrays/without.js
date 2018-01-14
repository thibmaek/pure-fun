/**
 * @flow
 * Filter out specific values from an array
 */
export default (arr: Array<any>, ...values: Array<any>): Array<any> => arr.filter(el => !values.some(excl => el === excl));
