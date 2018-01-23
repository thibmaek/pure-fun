/**
 * 
 * Deep clone a map with JSON compatible data
 */
export default map => new Map(JSON.parse(JSON.stringify([...map])));
