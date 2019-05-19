type FormatOptions = 'long' | 'short' | 'narrow';

/**
 * Returns the days for the given locale and format.
 * Defaults to en-US/long
 */
export default (locale: string = `en-US`, format: FormatOptions = `long`) => Array.from(
  { length: 7 },
  (_, idx) => (new Date(0, 0, idx).toLocaleDateString(locale, { weekday: format }))
);
