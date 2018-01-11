/**
 * Formats a string to title case
 * @param  {String} str given string to format
 * @return {String} the formatted string
 */
export default str => {
  return str.toLowerCase().replace(/^(.)|\s(.)/g, s => s.toUpperCase());
};
