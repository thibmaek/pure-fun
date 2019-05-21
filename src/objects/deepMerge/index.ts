/**
 * Performs a deep-merge on a given input of objects
 */
const deepMerge = (
  () => (...objs: Array<Object>) => {
    return {
      ...objs.map(o => JSON.parse(JSON.stringify(o)))
    }
  }
)();
export default deepMerge;
