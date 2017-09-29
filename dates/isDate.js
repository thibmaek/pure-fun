/**
 * Check if given date is an Object<Date>
 * @param  {Any} date Any type to check conformity for
 * @return {Bool<true|false>} Output of the check
 */
export default date => typeof date.getMonth === `function`;
