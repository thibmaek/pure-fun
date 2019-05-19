/**
 * Pluck an object via dot-notation from an object
 */
export default (key: string) => (obj: Object) => key.split(`.`).reduce((acc, key) => acc[key], obj);
