/**
 * @flow
 * Return an array of months
 */
type FormatOptions = '2-digit' | 'long' | 'short' | 'narrow';
export default (locale: string = `en-US`, format: FormatOptions = `long`): Array<string> => Array.from(
  { length: 12 },
  (month, idx) => (new Date(0, idx).toLocaleDateString(locale, { month: format }))
);
