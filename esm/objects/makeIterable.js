/**
 *      
 * Make on object iterable (through generator fn)
 */
export default function* (obj) {
  yield* Object.keys(obj).map(key=>[key, obj[key]]);
  return obj;
}
