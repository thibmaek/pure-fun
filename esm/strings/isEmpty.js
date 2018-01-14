/**
 *      
 * Check if a string (and object & array) is empty or contains text
 * @param  {String|Object|Array} str a string (but also works for objects & arrays)
 */
export default (str                               = {})=>!Object.keys(str).length > 0;
