/**
 * A simplified wrapper around global.fetch() that returns JSON by default
 * and sets the Content-Type to `application/json`
 */
export default async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    headers: {
      Accept: `application/json, text/plain, */*`,
      'Content-Type': `application/json`,
    },
    ...options,
  });
  return response.json();
};
