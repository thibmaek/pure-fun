/**
 * Ellipsize a string at given character length.
 * Defaults to the 100th character.
 * An optional third argument can be provided to use the unicode ellepsis character or just three dots
 */
const ellipsize = (str: string, max = 100, useUnicodeEllipsis = true) =>
  `${str.substring(0, max)}${useUnicodeEllipsis ? '…' : '...'}`;

  export default ellipsize;
