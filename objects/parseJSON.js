/**
 * Safely try to parse JSON
 * @param  {String} json any type of JSON data
 * @return {Object} parsed json, or empty Object if invalid json
 */
export default json => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
};
