/**
 * Capitalise a given string
 */
const capitalize =(str: string) => str.toLowerCase().replace(/^(.)|\s(.)/g, s => s.toUpperCase());
export default capitalize;
