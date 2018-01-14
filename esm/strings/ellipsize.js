/**
 * 
 * Truncate/shorten/ellipsize string text
 */
export default (str, max = 100) => `${str.substring(0, max)}…`;
