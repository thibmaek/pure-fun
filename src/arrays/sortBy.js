/**
 * @flow
 * Sort an array of objects by key
 */
export default (arr: Array<Object>, key: string, order: string = `ASC`): Array<Object> => {
  if (arr && arr != null && arr.length > 0) {
    const sortedArr = arr.sort((a, b) => {
      if (a[key] < b[key]) return - 1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

    return order.toUpperCase() === `ASC` ? sortedArr : [...sortedArr.reverse()];
  }
  return arr;
};
