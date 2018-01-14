/**
 * 
 * Deep merge a series of objects
 */
export default (() => (...objs) =>
  Object.assign(...objs.map(o =>
    JSON.parse(JSON.stringify(o))
  ))
)();
