/**
 * Performs a deep-merge on a given input of objects
 */
export default (
  () => (...objs: Array<Object>) => {
    return {
      ...objs.map(o => JSON.parse(JSON.stringify(o)))
    }
  }
)();
