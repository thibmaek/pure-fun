/**
 * 
 * Sleep an amount of seconds before executing the next call
 */
export default ms => new Promise(resolve => setTimeout(resolve, ms));
