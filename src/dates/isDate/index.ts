/**
 * Checks if the given input is a Date object
 */
export default (date: any) => typeof date === 'object' && typeof date.getMonth === `function`;
