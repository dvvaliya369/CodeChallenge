/**
 * Utility functions for common operations
 */

/**
 * Creates a debounced function that delays invoking the provided function until after
 * `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The number of milliseconds to delay
 * @param {boolean} immediate - If true, trigger the function on the leading edge instead of trailing
 * @returns {Function} - The debounced function
 * 
 * @example
 * // Basic usage
 * const debouncedSearch = debounce((query) => {
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * // Usage with immediate execution
 * const debouncedClick = debounce(() => {
 *   console.log('Button clicked');
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
 * Creates a throttled function that only invokes the provided function at most once
 * per every `limit` milliseconds.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} limit - The number of milliseconds to throttle invocations to
 * @returns {Function} - The throttled function
 * 
 * @example
 * const throttledScroll = throttle(() => {
 *   console.log('Scroll event');
 * }, 100);
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Delays execution of a function by the specified number of milliseconds
 * 
 * @param {number} ms - Number of milliseconds to delay
 * @returns {Promise} - Promise that resolves after the delay
 * 
 * @example
 * await delay(1000); // Wait for 1 second
 */
export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object)
 * 
 * @param {*} value - The value to check
 * @returns {boolean} - True if the value is empty, false otherwise
 * 
 * @example
 * isEmpty(''); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty(null); // true
 * isEmpty('hello'); // false
 */
export const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

/**
 * Generates a random string of specified length
 * 
 * @param {number} length - Length of the random string
 * @returns {string} - Random string
 * 
 * @example
 * generateId(8); // Returns something like "a7b3x9m1"
 */
export const generateId = (length = 8) => {
  return Math.random().toString(36).substring(2, length + 2);
};

export default {
  debounce,
  throttle,
  delay,
  isEmpty,
  generateId
};
