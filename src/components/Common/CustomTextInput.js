import React, { useState, forwardRef } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../utilities/Colors';

const CustomTextInput = forwardRef(({
  // Basic props
  label,
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  
  // Input types and behavior
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  autoCorrect = true,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  editable = true,
  
  // Validation and error handling
  required = false,
  error = '',
  validationRules = [],
  
  // Styling props
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  
  // Accessibility
  accessibilityLabel,
  accessibilityHint,
  testID,
  
  // Other props
  leftIcon,
  rightIcon,
  onRightIconPress,
  showCharacterCount = false,
  
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  
  // Handle focus
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  
  // Handle blur
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  
  // Toggle password visibility
  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };
  
  // Validate input based on rules
  const validateInput = (text) => {
    let validationError = '';
    
    if (required && (!text || text.trim().length === 0)) {
      validationError = 'This field is required';
    } else {
      for (const rule of validationRules) {
        const ruleError = rule(text);
        if (ruleError) {
          validationError = ruleError;
          break;
        }
      }
    }
    
    return validationError;
  };
  
  // Handle text change with validation
  const handleTextChange = (text) => {
    onChangeText && onChangeText(text);
  };
  
  // Get container style based on state
  const getContainerStyle = () => {
    let borderColor = Colors.themeLightGrayTextColor;
    
    if (error) {
      borderColor = '#ff4444';
    } else if (isFocused) {
      borderColor = Colors.themeColor || '#007AFF';
    }
    
    return [
      styles.inputContainer,
      { borderColor },
      !editable && styles.disabledContainer,
      containerStyle,
    ];
  };
  
  return (
    <View style={styles.container}>
      {/* Label */}
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>
            {label}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
          {showCharacterCount && maxLength && (
            <Text style={styles.characterCount}>
              {value ? value.length : 0}/{maxLength}
            </Text>
          )}
        </View>
      )}
      
      {/* Input Container */}
      <View style={getContainerStyle()}>
        {/* Left Icon */}
        {leftIcon && (
          <View style={styles.iconContainer}>
            {leftIcon}
          </View>
        )}
        
        {/* Text Input */}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            multiline && styles.multilineInput,
            inputStyle,
          ]}
          value={value}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          placeholderTextColor={Colors.themeLightGrayTextColor || '#999'}
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          maxLength={maxLength}
          editable={editable}
          accessibilityLabel={accessibilityLabel || label}
          accessibilityHint={accessibilityHint}
          testID={testID}
        />
        
        {/* Right Icon */}
        {(rightIcon || secureTextEntry) && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={secureTextEntry ? toggleSecureEntry : onRightIconPress}
            activeOpacity={0.7}
          >
            {secureTextEntry ? (
              <Text style={styles.passwordToggle}>
                {isSecure ? '👁️' : '🙈'}
              </Text>
            ) : (
              rightIcon
            )}
          </TouchableOpacity>
        )}
      </View>
      
      {/* Error Message */}
      {error ? (
        <Text style={[styles.errorText, errorStyle]}>
          {error}
        </Text>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  required: {
    color: '#ff4444',
    fontSize: 16,
  },
  characterCount: {
    fontSize: 12,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    minHeight: 48,
  },
  disabledContainer: {
    backgroundColor: '#f5f5f5',
    borderColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 0,
  },
  multilineInput: {
    textAlignVertical: 'top',
    paddingTop: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordToggle: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 14,
    color: '#ff4444',
    marginTop: 4,
    marginLeft: 4,
  },
});

// Common validation functions
export const ValidationRules = {
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },
  
  minLength: (min) => (value) => {
    if (value && value.length < min) {
      return `Minimum ${min} characters required`;
    }
    return null;
  },
  
  maxLength: (max) => (value) => {
    if (value && value.length > max) {
      return `Maximum ${max} characters allowed`;
    }
    return null;
  },
  
  phone: (value) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    if (value && !phoneRegex.test(value)) {
      return 'Please enter a valid phone number';
    }
    return null;
  },
  
  password: (value) => {
    if (value && value.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (value && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      return 'Password must contain uppercase, lowercase, and number';
    }
    return null;
  },
};

CustomTextInput.displayName = 'CustomTextInput';

export default CustomTextInput;
