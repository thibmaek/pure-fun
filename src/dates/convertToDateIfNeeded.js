/**
 * @flow
 * Check if date needs to be parsed
 */
export default (date: Date | String): number | Date => typeof date.getMonth === `function` ? date : Date.parse(date);
