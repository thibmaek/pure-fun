/**
 * Perform a deep-clone on a map of Objects
 */
const deepClone = (map: Map<{}, {}>) => new Map(JSON.parse(JSON.stringify([...map])));
export default deepClone;
