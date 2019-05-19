/**
 * Returns an a querystring from an object
 */
export default (obj: Object) => {
  const queries = Object.keys(obj)
    .map(param => {
      if (Array.isArray(obj[param])) {
        return obj[param]
          .map(val => `${encodeURIComponent(param)}[]=${encodeURIComponent(val)}`)
          .join(`&`);
      }

      return `${encodeURIComponent(param)}=${encodeURIComponent(obj[param])}`
    });

  return queries.join('&');
};
