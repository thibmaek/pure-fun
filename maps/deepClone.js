/**
 * Deep clone a map with JSON compatible data
 * @param  {Map<Any>} map a map containing any value
 * @return {Map<Any>} the deep cloned new map
 */
export default map => new Map(JSON.parse(JSON.stringify([...map])));
