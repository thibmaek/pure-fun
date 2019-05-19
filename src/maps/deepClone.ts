/**
 * Perform a deep-clone on a map of Objects
 */
export default (map: Map<{}, {}>) => new Map(JSON.parse(JSON.stringify([...map])));
