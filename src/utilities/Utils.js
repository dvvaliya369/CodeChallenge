// Utility functions for the app - reusable helper functions

/**
 * Creates a debounced function that delays invoking the provided function until after
 * the specified delay has elapsed since the last time the debounced function was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @param {Object} options - Optional configuration
 * @param {boolean} options.immediate - If true, trigger the function on the leading edge instead of trailing
 * @returns {Function} - The debounced function with a cancel method
 * 
 * @example
 * const debouncedSearch = debounce((query) => {
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * // Usage in React component
 * const handleSearch = debouncedSearch;
 * 
 * // Cancel if needed
 * debouncedSearch.cancel();
 */
const debounce = (func, delay, options = {}) => {
  let timeoutId;
  let lastCallTime;
  const { immediate = false } = options;

  const debounced = function(...args) {
    const callNow = immediate && !timeoutId;
    lastCallTime = Date.now();

    // Clear existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);

    // Call immediately if immediate is true and no timeout exists
    if (callNow) {
      func.apply(this, args);
    }
  };

  // Add cancel method to clear pending executions
  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  // Add flush method to immediately execute pending function
  debounced.flush = function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      func.apply(this, args);
    }
  };

  return debounced;
};

/**
 * Creates a throttled function that only invokes the provided function at most once per
 * every specified delay milliseconds.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The throttled function
 * 
 * @example
 * const throttledScroll = throttle((event) => {
 *   console.log('Scroll event:', event);
 * }, 100);
 */
const throttle = (func, delay) => {
  let lastExecution = 0;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastExecution >= delay) {
      lastExecution = now;
      func.apply(this, args);
    }
  };
};

const Utils = {
  debounce,
  throttle
};

export default Utils;
