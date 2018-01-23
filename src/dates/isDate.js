/**
 * @flow
 * Check if given date is an Object<Date>
 */
export default (date: any): boolean => typeof date.getMonth === `function`;
