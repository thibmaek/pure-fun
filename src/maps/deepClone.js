/**
 * @flow
 * Deep clone a map with JSON compatible data
 */
export default (map: Map<any, any>): Map<any, any> => new Map(JSON.parse(JSON.stringify([...map])));
