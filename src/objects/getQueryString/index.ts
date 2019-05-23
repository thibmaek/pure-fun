/**
 * Returns an a querystring from an object
 */
const getQueryString = (obj: Object) => {
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
export default getQueryString;
