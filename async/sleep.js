/**
 * Sleep an amount of seconds before executing the next call
 * @param {Int}     ms [an amount of miliseconds to sleep]
 * @return {Promise} - [A resolved promise after specified time]
 */
module.exports = (ms) => new Promise(res => setTimeout(res, ms));
