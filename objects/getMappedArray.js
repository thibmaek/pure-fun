/**
 * Create an iterable from Map<Object>
 * @param {Object<Any>} obj [An object of other types]
 * @return {Map<Array>}
**/
module.exports = obj => [...new Map(Object.entries(obj))];
