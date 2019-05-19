type FormatOptions = '2-digit' | 'long' | 'short' | 'narrow';

/**
 * Returns the months for the given locale and format.
 * Defaults to en-US/long
 */
export default (locale: string = `en-US`, format: FormatOptions = `long`) => Array.from(
  { length: 12 },
  (_, idx) => (new Date(0, idx).toLocaleDateString(locale, { month: format }))
);
