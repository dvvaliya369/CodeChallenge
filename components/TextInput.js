import React, { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';

// Define the props interface for our custom TextInput
export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: any;
  inputStyle?: any;
  labelStyle?: any;
  errorStyle?: any;
  helperTextStyle?: any;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showCharacterCount?: boolean;
  maxCharacters?: number;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      helperTextStyle,
      variant = 'default',
      size = 'medium',
      disabled = false,
      required = false,
      leftIcon,
      rightIcon,
      showCharacterCount = false,
      maxCharacters,
      value,
      multiline = false,
      ...props
    },
    ref,
  ) => {
    // Character count logic
    const characterCount = value ? value.length : 0;
    const showCount = showCharacterCount || (maxCharacters && maxCharacters > 0);
    
    // Dynamic styles based on props
    const getContainerStyle = () => {
      const baseStyle = [styles.container];
      if (disabled) baseStyle.push(styles.disabledContainer);
      return baseStyle;
    };

    const getInputContainerStyle = () => {
      const baseStyle = [styles.inputContainer];
      
      // Variant styles
      switch (variant) {
        case 'outlined':
          baseStyle.push(styles.outlined);
          break;
        case 'filled':
          baseStyle.push(styles.filled);
          break;
        default:
          baseStyle.push(styles.default);
      }
      
      // Size styles
      switch (size) {
        case 'small':
          baseStyle.push(styles.smallInput);
          break;
        case 'large':
          baseStyle.push(styles.largeInput);
          break;
        default:
          baseStyle.push(styles.mediumInput);
      }
      
      // Error state
      if (error) baseStyle.push(styles.errorInput);
      
      // Disabled state
      if (disabled) baseStyle.push(styles.disabledInput);
      
      return baseStyle;
    };

    const getInputStyle = () => {
      const baseStyle = [styles.input];
      if (multiline) baseStyle.push(styles.multilineInput);
      if (disabled) baseStyle.push(styles.disabledText);
      return baseStyle;
    };

    return (
      <View style={[getContainerStyle(), containerStyle]}>
        {/* Label */}
        {label && (
          <Text style={[styles.label, labelStyle]}>
            {label}
            {required && <Text style={styles.required}>*</Text>}
          </Text>
        )}
        
        {/* Input Container */}
        <View style={getInputContainerStyle()}>
          {/* Left Icon */}
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          
          {/* Text Input */}
          <RNTextInput
            ref={ref}
            style={[getInputStyle(), inputStyle]}
            value={value}
            multiline={multiline}
            editable={!disabled}
            maxLength={maxCharacters}
            placeholderTextColor={disabled ? '#A0A0A0' : '#888'}
            {...props}
          />
          
          {/* Right Icon */}
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
        
        {/* Helper Text / Error / Character Count */}
        <View style={styles.bottomRow}>
          <View style={styles.bottomLeft}>
            {error && (
              <Text style={[styles.errorText, errorStyle]}>{error}</Text>
            )}
            {!error && helperText && (
              <Text style={[styles.helperText, helperTextStyle]}>
                {helperText}
              </Text>
            )}
          </View>
          
          {showCount && (
            <Text style={styles.characterCount}>
              {characterCount}
              {maxCharacters && `/${maxCharacters}`}
            </Text>
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  disabledContainer: {
    opacity: 0.6,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  required: {
    color: '#E53E3E',
    marginLeft: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  // Variant styles
  default: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  outlined: {
    borderWidth: 2,
    borderColor: '#3B82F6',
    backgroundColor: 'transparent',
  },
  filled: {
    backgroundColor: '#F3F4F6',
    borderWidth: 0,
  },
  // Size styles
  smallInput: {
    minHeight: 36,
    paddingHorizontal: 8,
  },
  mediumInput: {
    minHeight: 48,
    paddingHorizontal: 12,
  },
  largeInput: {
    minHeight: 56,
    paddingHorizontal: 16,
  },
  // State styles
  errorInput: {
    borderColor: '#E53E3E',
    borderWidth: 1,
  },
  disabledInput: {
    backgroundColor: '#F7FAFC',
    borderColor: '#E2E8F0',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1A202C',
    padding: 0, // Remove default padding to control it via container
  },
  multilineInput: {
    textAlignVertical: 'top',
    paddingVertical: 8,
  },
  disabledText: {
    color: '#A0AEC0',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  bottomLeft: {
    flex: 1,
  },
  errorText: {
    fontSize: 14,
    color: '#E53E3E',
  },
  helperText: {
    fontSize: 14,
    color: '#718096',
  },
  characterCount: {
    fontSize: 12,
    color: '#A0AEC0',
    marginLeft: 8,
  },
});

TextInput.displayName = 'TextInput';

export default TextInput;
