/**
 * Returns the head (everything but the list item) items in the array.
 */
const head = <T>(arr: T[]) => arr.slice(0, - 1);
export default head;
