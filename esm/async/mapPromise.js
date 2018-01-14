/**
 *      
 * Map over an array of promises
 */
export default (inputs, mapper)=>{
  const promises = [];

  inputs.forEach(i=>i instanceof Promise ? promises.push(i) : promises.push(mapper(i)));

  return Promise.all(promises);
};
