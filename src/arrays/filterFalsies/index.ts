type TruthyValues = object | string | number | true;

/**
 * Returns an array with only truthy values.
 * Considered falsy values: false, undefined, null, 0, NaN, ''
 */
const filterFalsies = (arr: any[]): TruthyValues[] => arr.filter(id => id);
export default filterFalsies;
