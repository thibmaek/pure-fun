/**
 * Sleep an amount of seconds before executing the next call
 * @param  {Int} ms amount (in miliseconds) to sleep
 * @return {Promise} a fullfilled promise after the amount of ms passed
 */
export default ms => new Promise(resolve => setTimeout(resolve, ms));
