/**
 * @flow
 * Deep merge a series of objects
 */
export default (() => (...objs: Array<Object>): Object =>
  Object.assign(...objs.map(o =>
    JSON.parse(JSON.stringify(o))
  ))
)();
