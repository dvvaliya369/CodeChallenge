/**
 * Utility functions for common operations
 */

/**
 * Creates a debounced version of the provided function.
 * The debounced function delays invoking the original function until after
 * the specified delay has elapsed since the last time it was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The debounced function
 * 
 * @example
 * const debouncedSearch = debounce((searchTerm) => {
 *   console.log('Searching for:', searchTerm);
 * }, 300);
 * 
 * // Will only execute once after 300ms delay
 * debouncedSearch('test');
 * debouncedSearch('test1');
 * debouncedSearch('test12');
 */
export const debounce = (func, delay) => {
  let timeoutId;
  
  return function debounced(...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 * Creates a debounced version of the provided function with a cancel method.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Object} Object with debounced function and cancel method
 * 
 * @example
 * const { debounced: debouncedFn, cancel } = debouncedWithCancel((value) => {
 *   console.log('Value:', value);
 * }, 300);
 * 
 * debouncedFn('test');
 * cancel(); // Cancels the pending execution
 */
export const debouncedWithCancel = (func, delay) => {
  let timeoutId;
  
  const debounced = function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
  
  const cancel = () => {
    clearTimeout(timeoutId);
  };
  
  return { debounced, cancel };
};

/**
 * Creates a throttled version of the provided function.
 * The throttled function only executes at most once per specified interval.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} delay - The throttle delay in milliseconds
 * @returns {Function} The throttled function
 * 
 * @example
 * const throttledScroll = throttle(() => {
 *   console.log('Scroll event');
 * }, 100);
 * 
 * // Will execute at most once per 100ms
 * window.addEventListener('scroll', throttledScroll);
 */
export const throttle = (func, delay) => {
  let lastCall = 0;
  
  return function throttled(...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
};

// Export all utilities as default object as well
const Utils = {
  debounce,
  debouncedWithCancel,
  throttle,
};

export default Utils;
