# Debounce Implementation Guide

## Overview
This implementation adds debounce functionality to the React Native app to improve performance by reducing the frequency of function calls, particularly for text input and search operations.

## Files Added/Modified

### 1. **src/utilities/useDebounce.js** (New File)
Custom hooks for debouncing:
- `useDebounce(callback, delay)` - Debounces function calls
- `useDebounceValue(value, delay)` - Debounces value changes

### 2. **src/components/Post/PostTextInput.js** (Modified)
Enhanced with optional debounce support:
- Added `debounceDelay` prop (default: 300ms)
- Added `enableDebounce` prop (default: false)
- Backwards compatible with existing usage

### 3. **src/screens/Search/Search.js** (Modified) 
Implemented debounced search functionality:
- Real-time search with 500ms debounce delay
- Loading state management
- Mock search results (replace with actual API)
- Uses React Native Paper's Searchbar component

### 4. **src/screens/DemoDebounce/DemoDebounce.js** (New File)
Demo screen showing debounce functionality:
- Side-by-side comparison of regular vs debounced input
- Visual demonstration of debounce delay

## Usage Examples

### Basic Text Input with Debounce
```javascript
<PostTextInput
    onChangeText={handleTextChange}
    inputvalue={text}
    placeholdervalue="Enter text..."
    inputStyle={Style.postTextInputView}
    enableDebounce={true}
    debounceDelay={300}
/>
```

### Search with Debounced Value
```javascript
const [searchQuery, setSearchQuery] = useState('');
const debouncedSearchQuery = useDebounceValue(searchQuery, 500);

useEffect(() => {
    // Perform search with debounced query
    performSearch(debouncedSearchQuery);
}, [debouncedSearchQuery]);
```

### Function Call Debouncing
```javascript
const { debouncedCallback, cancel } = useDebounce(expensiveFunction, 1000);

// Use debouncedCallback instead of expensiveFunction
// Call cancel() to cancel pending calls if needed
```

## Benefits

1. **Performance**: Reduces unnecessary API calls and computations
2. **User Experience**: Prevents lag during rapid typing
3. **Resource Optimization**: Reduces server load and network requests
4. **Flexibility**: Configurable delay times for different use cases

## Integration

The debounce functionality is designed to be:
- **Non-intrusive**: Existing components work without changes
- **Optional**: Enable only when needed via props
- **Configurable**: Adjustable delay times
- **Reusable**: Custom hooks can be used throughout the app

## Testing

To test the implementation:
1. Run the app and navigate to the Search screen
2. Type rapidly in the search bar - notice the delayed search execution
3. Use the DemoDebounce screen to see side-by-side comparison
4. Verify that existing PostTextInput usage still works without debounce

## Next Steps

1. Replace mock search with actual API integration
2. Add debounce to other text inputs where beneficial
3. Consider adding debounce to form validation
4. Implement debounce for scroll-triggered API calls
5. Add unit tests for debounce hooks
