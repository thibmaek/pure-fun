/**
 * Performs a deep-merge on a given input of objects
 */
const deepMerge = (() => (...objs: Object[]) => {
  return Object.assign(
    // @ts-ignore
    ...objs.map((o) => JSON.parse(JSON.stringify(o))),
  );
})();
export default deepMerge;
