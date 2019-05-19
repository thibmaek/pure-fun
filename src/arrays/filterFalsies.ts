type TruthyValues = object | string | number | true;

/**
 * Returns an array with only truthy values.
 * Considered falsy values: false, undefined, null, 0, NaN, ''
 */
export default (arr: any[]): TruthyValues[] => arr.filter(id => id);
