// 
const deepCopy = obj => {
  if (typeof obj === `object` && !Array.isArray(obj)) {
    return Object.keys(obj)
      .map(k => ({ [k]: deepCopy(obj[k]) }))
      .reduce((a, b) => Object.assign(a, b), {});
  } else if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  return obj;
};
export default deepCopy;
