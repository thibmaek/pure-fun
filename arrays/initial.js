/**
 * Returns anything but the last item in an array
 * @param  {Array<Any>} arr an array containing any type of value
 * @return {Array<Any>} the array without the last item
 */
export default arr => arr.slice(0, - 1);
