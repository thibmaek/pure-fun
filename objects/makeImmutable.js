/**
 * Make an object immutable
 * @param  {Object} obj object to make immutable
 * @return {Object} an immutable object
 */
const immutable = (() => {
  const getValue = obj => key => obj[key];
  const isObject = obj => Object(obj) === obj;
  const isMutable = obj => isObject(obj) && !Object.isFrozen(obj);

  return obj => {
    Object.keys(obj).map(getValue(obj)).filter(isMutable).forEach(immutable);
    return Object.freeze(obj);
  };
})();

export default immutable;
