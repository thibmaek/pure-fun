/**
 * @flow
 * Make on object iterable (through generator fn)
 */
export default function* (obj: Object) {
  yield* Object.keys(obj).map(key => [key, obj[key]]);
  return obj;
}
