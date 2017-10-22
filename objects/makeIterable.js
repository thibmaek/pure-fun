/**
 * Make on object iterable (through generator fn)
 * @param  {Object} obj an object containing any type of values
 * @return {Generator} an iterable object
 */
export default function* (obj) {
  yield* Object.keys(obj).map(key => [key, obj[key]]);
}
