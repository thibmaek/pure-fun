/**
 * 
 * Return an array of months
 */
export default (locale = `en-US`, format = `long`) => Array.from(
  { length: 12 },
  (month, idx) => (new Date(0, idx).toLocaleDateString(locale, { month: format }))
);
