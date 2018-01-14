/**
 *      
 * Check if date needs to be parsed
 */
export default date=>typeof date.getMonth === `function` ? date : Date.parse(date);
