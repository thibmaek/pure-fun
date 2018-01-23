/**
 * @flow
 * Formats a string to title case
 */
export default (str: string): string => str.toLowerCase().replace(/^(.)|\s(.)/g, s => s.toUpperCase());
