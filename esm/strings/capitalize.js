/**
 *      
 * Formats a string to title case
 */
export default str=>str.toLowerCase().replace(/^(.)|\s(.)/g, s=>s.toUpperCase());
