/**
 * 
 * Traverse an object to pluck a value from key from it
 */
export default key => obj => key.split(`.`).reduce((acc, key) => acc[key], obj);
