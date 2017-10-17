/**
 * Traverse an object to pluck a value from key from it
 * @param  {String} key the key to pluck deep (e.g: 'foo.bar.hello.world')
 * @return {Any} the value of the given key
 */
export default key => obj => key.split(`.`).reduce((acc, key) => acc[key], obj);
