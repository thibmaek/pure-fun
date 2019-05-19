import isDate from "./isDate";

/**
 * Checks if the given input is a Date object, otherwise converts it to one
 */
export default (date: Date | string) => {
  if (isDate(date)) return date;

  if (typeof date === 'string') return Date.parse(date);
};
