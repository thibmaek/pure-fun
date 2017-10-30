/**
 * Check if an object is empty or contains properties
 * @param  {Object} obj a plain object containing various properties
 * @return {Bool<true|false>} Output of the check
 */
export default obj => Object.entries(obj) < 1;
