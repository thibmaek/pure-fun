/**
 * Returns only the unique elements in array.
 * If you want the duplicates use: pure-fun/arrays/duplicates.ts
 */
const unique = (arr: any[]): any[] => [...new Set(arr)];
export default unique;
