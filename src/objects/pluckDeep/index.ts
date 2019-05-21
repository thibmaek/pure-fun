/**
 * Pluck an object via dot-notation from an object
 */
const pluckDeep = (key: string) => (obj: Object) => key.split(`.`).reduce((acc, key) => acc[key], obj);
export default pluckDeep;
