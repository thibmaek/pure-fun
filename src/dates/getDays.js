/**
 * @flow
 * Return an array of days
 */
type FormatOptions = 'long' | 'short' | 'narrow';
export default (locale: string = `en-US`, format: FormatOptions = `long`): Array<string> => Array.from(
  { length: 7 },
  (day, idx) => (new Date(0, 0, idx).toLocaleDateString(locale, { weekday: format }))
);
