/**
 * Truncate/shorten/ellipsize string text
 * @param  {String} str text to ellipsize
 * @param  {Number} [max=100] the character of the string to ellipsize at
 * @return {String}
 */
export default (str, max = 100) => `${str.substring(0, max)}…`;
