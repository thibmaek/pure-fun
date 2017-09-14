/**
 * Check if given date is an Object<Date>
 * @param {Any} date [A date like value to be checked]
 * @return {Bool} - True or false according if it conforms to Object<Date>
**/
module.exports = date => typeof date.getMonth === `function`;
