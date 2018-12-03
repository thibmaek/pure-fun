/**
 * 
 * Return an array of days
 */
export default (locale = `en-US`, format = `long`) => Array.from(
  { length: 7 },
  (month, idx) => (new Date(0, 0, idx).toLocaleDateString(locale, { weekday: format }))
);
