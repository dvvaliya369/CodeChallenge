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

/**
 * Creates a deep clone of the provided value. Handles objects, arrays, dates, 
 * regular expressions, and primitive values. Maintains proper prototype chains
 * and handles circular references.
 * 
 * @param {*} obj - The value to clone
 * @param {WeakMap} visited - Internal parameter to track visited objects (prevents infinite recursion)
 * @returns {*} - A deep copy of the input value
 * 
 * @example
 * const original = {
 *   name: 'John',
 *   age: 30,
 *   hobbies: ['reading', 'coding'],
 *   profile: {
 *     social: { twitter: '@john' }
 *   }
 * };
 * 
 * const cloned = Utils.clone(original);
 * cloned.hobbies.push('gaming'); // Won't affect original
 * console.log(original.hobbies); // ['reading', 'coding']
 * console.log(cloned.hobbies);   // ['reading', 'coding', 'gaming']
 */
const clone = (obj, visited = new WeakMap()) => {
  // Handle null, undefined, and primitive values
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle RegExp objects
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    const clonedArray = [];
    visited.set(obj, clonedArray);
    
    for (let i = 0; i < obj.length; i++) {
      clonedArray[i] = clone(obj[i], visited);
    }
    
    return clonedArray;
  }

  // Handle Objects
  const clonedObj = Object.create(Object.getPrototypeOf(obj));
  visited.set(obj, clonedObj);

  // Clone all enumerable properties
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = clone(obj[key], visited);
    }
  }

  // Clone non-enumerable properties
  const propertyNames = Object.getOwnPropertyNames(obj);
  for (const key of propertyNames) {
    if (!clonedObj.hasOwnProperty(key)) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key);
      if (descriptor && descriptor.value !== undefined) {
        descriptor.value = clone(descriptor.value, visited);
      }
      Object.defineProperty(clonedObj, key, descriptor);
    }
  }

  return clonedObj;
};

const Utils = {
  debounce,
  throttle,
  clone
};

export default Utils;
