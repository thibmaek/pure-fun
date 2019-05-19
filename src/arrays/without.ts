/**
 * Returns all items in the input array except those specified in the second parameter.
 */
export default (arr: any[], ...values: any[]) => arr.filter(el => !values.some(excl => el === excl));
