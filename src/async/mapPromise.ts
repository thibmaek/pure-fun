import isPromise from './isPromise';

type MappingFunction = (i: Promise<any>) => void;

/**
 * Maps over an array of promises like Array.map()
 * If the input array is not one of promises, the mapper function can be used
 * to map them first before mapping over them using Promise.all()
 */
export default (inputs: any[], mapper: MappingFunction) => {
  const promises = [];

  inputs.forEach(
    i => isPromise(i)
      ? promises.push(i)
      : promises.push(mapper(i))
  );

  return Promise.all(promises);
};
