/**
 * Deep merge a series of objects
 * @param  {...Object} objs a series of objects to merge
 * @return {Object} a deeply merged object from original input
 */
export default (() => (...objs) =>
  Object.assign(...objs.map(o =>
    JSON.parse(JSON.stringify(o))
  ))
)();
