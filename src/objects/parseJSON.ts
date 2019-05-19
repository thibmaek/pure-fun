import isObject from "./isObject";

/**
 * Safe wrapper around JSON.parse() which tries to parse stringified JSON,
 * returns the default if an object was passed or empty object if an error is thrown
 */
export default (json: string | any): {} => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return isObject(json) ? json : {};
  }
};
