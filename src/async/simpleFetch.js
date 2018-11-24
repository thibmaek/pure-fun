/**
 * @flow
 * Safe fetch which assumes JSON and returns it.
 */
export default async (url: string, options: RequestOptions = {}) => {
  const response = await fetch(url, {
    headers: {
      Accept: `application/json, text/plain, */*`,
      'Content-Type': `application/json`,
    },
    ...options,
  });
  return response.json();
};
