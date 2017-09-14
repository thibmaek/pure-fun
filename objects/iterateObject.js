/**
 * Create an iterable collection from Object<Any>
 * @param {Object<Any>} obj [An object of other types]
 * @return {Map<Any>}
**/
const iterateObject = obj => [...new Map(Object.entries(obj)).values()];
