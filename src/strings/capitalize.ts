/**
 * Capitalise a given string
 */
export default (str: string) => str.toLowerCase().replace(/^(.)|\s(.)/g, s => s.toUpperCase());
