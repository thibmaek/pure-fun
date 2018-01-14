/**
 *      
 * Force require arguments for a function
 */
export default fn=>(...args)=>args.length < fn.length ? undefined : fn(...args);
