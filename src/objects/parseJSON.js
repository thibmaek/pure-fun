/**
 * @flow
 * Safely try to parse JSON
 */
export default (json: string | any): Object => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
};
