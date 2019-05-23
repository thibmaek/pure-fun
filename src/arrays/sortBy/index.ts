type Order = 'ASC' | 'DESC';

/**
 * Sort an array of objects by the given key.
 * Supports an order parameter `order` as 3rd argument.
 */
const sortBy = (arr: Object[], key: string, order: Order = `ASC`) => {
  if (arr && arr != null && arr.length > 0) {
    const sortedArr = [...arr.sort((a, b) => {
      if (a[key] < b[key]) return - 1;
      if (a[key] > b[key]) return 1;
      return 0;
    })];

    return order.toUpperCase() === `ASC` ? sortedArr : [...sortedArr.reverse()];
  }

  return arr;
};
export default sortBy;
