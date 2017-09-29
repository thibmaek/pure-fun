/**
 * Check if date needs to be typecasted
 * @param  {Any} date An Object<Date> or date-like type (e.g: String "29-10-1995")
 * @return {Object<Date>} If check is true: the original param, if failed: a parsed date
 */
export default date => isDate(date) ? date : Date.parse(date);
