/**
 * Returns all items in the input array except those specified in the second parameter.
 */
const without = <T>(arr: T[], ...values: T[]) => arr.filter(el => !values.some(excl => el === excl));
export default without;
