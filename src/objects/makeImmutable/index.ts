import isObject from "../isObject";

const getValue = (obj: Object) => (key: string) => obj[key];
const isMutable = (obj: any) => isObject(obj) && !Object.isFrozen(obj);

const immutable = (
  () => {
  return obj => {
    Object.keys(obj)
      .map(getValue(obj))
      .filter(isMutable)
      .forEach(immutable);

    return Object.freeze(obj);
  };
  }
)();

/**
 * Returns a new immutable object from the original;
 */
export default immutable;
