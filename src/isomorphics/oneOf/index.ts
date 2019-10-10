/**
 * Validate that the given data type exists as a primitive value in the given Array/Object/Enum shape
 */
const oneOf = (data: unknown, shape: Array<any> | Record<any, any>) => {
  if (!shape || typeof shape !== 'object') {
    throw new TypeError('You need to provide a shape to validate to oneOf');
  }

  if (Array.isArray(shape)) {
    return shape.some(s => s === data);
  }

  // @ts-ignore
  return Object.values(shape).some(s => s === data);
};

export default oneOf;
