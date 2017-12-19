/**
 * Sort an array of objects by key
 * @param  {Array<Object>} arr an array of objects
 * @param  {String} key the key to sort arrays by
 * @param  {String} order the order to sort by (ASC|DESC)
 * @return {Array<Object>} the newly sorted array
 */
export default (arr, key, order = `ASC`) => {
  if (arr && arr != null && arr.length > 0) {
    const sortedArr = arr.sort((a, b) => {
      if (a[key] < b[key]) return - 1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

    return order.toUpperCase() === `ASC` ? sortedArr : sortedArr.reverse();
  }
  return arr;
};
