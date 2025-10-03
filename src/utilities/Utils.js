/**
 * Utility functions for the application
 */

/**
 * Creates a debounced function that delays invoking `func` until after `delay` 
 * milliseconds have elapsed since the last time the debounced function was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The number of milliseconds to delay
 * @param {boolean} [immediate=false] - If true, trigger the function on the leading edge instead of trailing edge
 * @returns {Function} The debounced function
 * 
 * @example
 * // Debounce a search function to avoid excessive API calls
 * const debouncedSearch = debounce((query) => {
 *   searchAPI(query);
 * }, 500);
 * 
 * // The search will only execute after user stops typing for 500ms
 * debouncedSearch('apple');
 * debouncedSearch('apple pie'); // Previous call is cancelled
 * 
 * @example
 * // Immediate execution on first call
 * const debouncedClick = debounce((event) => {
 *   handleClick(event);
 * }, 1000, true);
 */
export const debounce = (func, delay, immediate = false) => {
  let timeoutId;
  
  return function executedFunction(...args) {
    const later = () => {
      timeoutId = null;
      if (!immediate) func.apply(this, args);
    };
    
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    
    if (callNow) func.apply(this, args);
  };
};

/**
 * Creates a throttled function that only invokes `func` at most once per 
 * every `limit` milliseconds.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} limit - The number of milliseconds to limit executions to
 * @returns {Function} The throttled function
 * 
 * @example
 * // Throttle scroll event handler
 * const throttledScroll = throttle(() => {
 *   console.log('Scroll event handled');
 * }, 100);
 * 
 * window.addEventListener('scroll', throttledScroll);
 */
export const throttle = (func, limit) => {
  let inThrottle;
  
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Delays execution of a function by specified milliseconds
 * 
 * @param {number} ms - Number of milliseconds to delay
 * @returns {Promise} A promise that resolves after the delay
 * 
 * @example
 * // Wait 1 second before executing next line
 * await delay(1000);
 * console.log('This runs after 1 second');
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Default export containing all utility functions
 */
const Utils = {
  debounce,
  throttle,
  delay,
};

export default Utils;
