/**
 * Creates a debounced version of a function that delays its execution
 * until after the specified delay has passed since its last invocation.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The debounced function
 * 
 * @example
 * const debouncedSearch = debounce((query) => {
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * // Will only execute once after 300ms of no calls
 * debouncedSearch('hello');
 * debouncedSearch('hello world');
 */
function debounce(func, delay) {
  let timeoutId;
  
  return function debounced(...args) {
    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  
  return function throttled(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

module.exports = { debounce, throttle };
