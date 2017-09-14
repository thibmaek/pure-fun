/**
 * Check if date needs to be typecasted
 * @param {Any} date [A date like value]
 * @return {Object<Date>} - Original input if correct type, or parsed date if incorrect type
**/
module.exports = date => isDate(date) ? input : Date.parse(date);
