import React, { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  /** Label text displayed above the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom input style */
  inputStyle?: TextStyle;
  /** Custom label style */
  labelStyle?: TextStyle;
  /** Custom error style */
  errorStyle?: TextStyle;
  /** Custom helper text style */
  helperStyle?: TextStyle;
  /** Input variant */
  variant?: 'default' | 'outlined' | 'filled';
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Whether to show character count */
  showCharacterCount?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      helperStyle,
      variant = 'default',
      size = 'medium',
      showCharacterCount = false,
      maxLength,
      value = '',
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error);
    const characterCount = value ? value.length : 0;

    const getInputStyles = () => {
      const baseStyle = [styles.input];
      
      // Size variations
      switch (size) {
        case 'small':
          baseStyle.push(styles.inputSmall);
          break;
        case 'large':
          baseStyle.push(styles.inputLarge);
          break;
        default:
          baseStyle.push(styles.inputMedium);
      }

      // Variant styles
      switch (variant) {
        case 'outlined':
          baseStyle.push(styles.inputOutlined);
          break;
        case 'filled':
          baseStyle.push(styles.inputFilled);
          break;
        default:
          baseStyle.push(styles.inputDefault);
      }

      // Error state
      if (hasError) {
        baseStyle.push(styles.inputError);
      }

      // Disabled state
      if (props.editable === false) {
        baseStyle.push(styles.inputDisabled);
      }

      return [...baseStyle, inputStyle];
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {/* Label */}
        {label && (
          <View style={styles.labelContainer}>
            <Text style={[styles.label, labelStyle]}>
              {label}
              {required && <Text style={styles.required}> *</Text>}
            </Text>
          </View>
        )}

        {/* Input */}
        <RNTextInput
          ref={ref}
          style={getInputStyles()}
          value={value}
          maxLength={maxLength}
          placeholderTextColor={hasError ? '#dc3545' : '#999'}
          {...props}
        />

        {/* Bottom section */}
        <View style={styles.bottomSection}>
          <View style={styles.leftBottom}>
            {/* Error message */}
            {error && (
              <Text style={[styles.errorText, errorStyle]}>{error}</Text>
            )}
            {/* Helper text */}
            {!error && helperText && (
              <Text style={[styles.helperText, helperStyle]}>{helperText}</Text>
            )}
          </View>

          {/* Character count */}
          {showCharacterCount && maxLength && (
            <Text style={styles.characterCount}>
              {characterCount}/{maxLength}
            </Text>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  required: {
    color: '#dc3545',
  },
  input: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  inputSmall: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 36,
  },
  inputMedium: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48,
  },
  inputLarge: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 56,
  },
  inputDefault: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputOutlined: {
    borderWidth: 2,
    borderColor: '#007bff',
    backgroundColor: 'transparent',
  },
  inputFilled: {
    backgroundColor: '#f8f9fa',
    borderWidth: 0,
  },
  inputError: {
    borderColor: '#dc3545',
    borderWidth: 2,
  },
  inputDisabled: {
    backgroundColor: '#f5f5f5',
    color: '#999',
    borderColor: '#ccc',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 4,
    minHeight: 20,
  },
  leftBottom: {
    flex: 1,
  },
  errorText: {
    fontSize: 12,
    color: '#dc3545',
    marginTop: 4,
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  characterCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
});

TextInput.displayName = 'TextInput';

export default TextInput;
