/**
 * Create an iterable key-value array from an Object
 * @param  {Object} obj Any form of Object
 * @return {Array<Map>} Iterable array containing a Map dict from the object's properties
 */
export default obj => [...new Map(Object.entries(obj))];
