/**
 * @flow
 * Truncate/shorten/ellipsize string text
 */
export default (str: string, max: number = 100): string => `${str.substring(0, max)}…`;
