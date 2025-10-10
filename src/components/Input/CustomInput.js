import React, { forwardRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

/**
 * CustomInput - A reusable input component with enhanced features
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the input
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Current value of the input
 * @param {function} props.onChangeText - Callback function called when text changes
 * @param {string} props.error - Error message to display
 * @param {boolean} props.disabled - Whether the input is disabled
 * @param {string} props.mode - Input mode ('outlined' or 'flat')
 * @param {string} props.keyboardType - Keyboard type for the input
 * @param {boolean} props.secureTextEntry - Whether to hide the text (for passwords)
 * @param {string} props.autoComplete - Auto-complete type
 * @param {boolean} props.multiline - Whether the input should be multiline
 * @param {number} props.numberOfLines - Number of lines for multiline input
 * @param {Object} props.style - Custom styles for the input container
 * @param {Object} props.inputStyle - Custom styles for the input itself
 * @param {string} props.testID - Test identifier for automated testing
 * @param {boolean} props.required - Whether the field is required
 * @param {number} props.maxLength - Maximum character length
 * @param {function} props.onFocus - Callback when input gains focus
 * @param {function} props.onBlur - Callback when input loses focus
 * @param {string} props.helperText - Helper text to display below the input
 */
const CustomInput = forwardRef(({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  disabled = false,
  mode = 'outlined',
  keyboardType = 'default',
  secureTextEntry = false,
  autoComplete = 'off',
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
  testID,
  required = false,
  maxLength,
  onFocus,
  onBlur,
  helperText,
  ...rest
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const displayLabel = required && label ? `${label} *` : label;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        ref={ref}
        label={displayLabel}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        mode={mode}
        error={!!error}
        disabled={disabled}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : undefined}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        testID={testID}
        style={[
          styles.input,
          inputStyle,
          isFocused && styles.focused,
          error && styles.errorInput,
          disabled && styles.disabled
        ]}
        theme={{
          colors: {
            primary: error ? '#d32f2f' : '#1976d2',
            error: '#d32f2f',
          }
        }}
        accessibilityLabel={displayLabel || placeholder}
        accessibilityHint={helperText || error}
        accessibilityRole="text"
        {...rest}
      />
      
      {/* Helper text or error message */}
      {(helperText || error) && (
        <Text
          style={[
            styles.helperText,
            error && styles.errorText
          ]}
          testID={testID ? `${testID}-helper` : undefined}
        >
          {error || helperText}
        </Text>
      )}
      
      {/* Character count */}
      {maxLength && value && (
        <Text
          style={[
            styles.characterCount,
            value.length > maxLength * 0.9 && styles.characterCountWarning
          ]}
          testID={testID ? `${testID}-count` : undefined}
        >
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
  );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  mode: PropTypes.oneOf(['outlined', 'flat']),
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoComplete: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  testID: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  helperText: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'transparent',
  },
  focused: {
    // Add any focus-specific styling here
  },
  errorInput: {
    // Error styling is handled by the theme
  },
  disabled: {
    opacity: 0.6,
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
    color: '#666',
  },
  errorText: {
    color: '#d32f2f',
  },
  characterCount: {
    fontSize: 12,
    textAlign: 'right',
    marginTop: 4,
    marginRight: 12,
    color: '#666',
  },
  characterCountWarning: {
    color: '#ff9800',
  },
});

export default CustomInput;
