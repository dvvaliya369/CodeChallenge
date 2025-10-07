import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  children,
  testID,
  ...props
}) => {
  // Combine base styles with variant and size styles
  const buttonStyle = [
    styles.button,
    styles[`button_${variant}`],
    styles[`button_${size}`],
    disabled && styles.button_disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    styles[`text_${size}`],
    disabled && styles.text_disabled,
    textStyle,
  ];

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handlePress}
      disabled={disabled || loading}
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      activeOpacity={disabled || loading ? 1 : 0.7}
      {...props}
    >
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            color={variant === 'primary' ? '#FFFFFF' : '#007AFF'}
            size="small"
          />
          {title && <Text style={[textStyles, styles.loadingText]}>{title}</Text>}
        </View>
      ) : (
        <>
          {children || <Text style={textStyles}>{title}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // Variant styles
  button_primary: {
    backgroundColor: '#007AFF',
    borderWidth: 0,
  },
  button_secondary: {
    backgroundColor: '#F2F2F7',
    borderWidth: 0,
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#007AFF',
  },
  button_danger: {
    backgroundColor: '#FF3B30',
    borderWidth: 0,
  },
  button_success: {
    backgroundColor: '#34C759',
    borderWidth: 0,
  },
  button_warning: {
    backgroundColor: '#FF9500',
    borderWidth: 0,
  },
  button_ghost: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  // Size styles
  button_small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: 32,
  },
  button_medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    minHeight: 44,
  },
  button_large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    minHeight: 56,
  },

  // Disabled state
  button_disabled: {
    opacity: 0.5,
  },

  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },

  // Text variant styles
  text_primary: {
    color: '#FFFFFF',
  },
  text_secondary: {
    color: '#007AFF',
  },
  text_outline: {
    color: '#007AFF',
  },
  text_danger: {
    color: '#FFFFFF',
  },
  text_success: {
    color: '#FFFFFF',
  },
  text_warning: {
    color: '#FFFFFF',
  },
  text_ghost: {
    color: '#007AFF',
  },

  // Text size styles
  text_small: {
    fontSize: 14,
    lineHeight: 16,
  },
  text_medium: {
    fontSize: 16,
    lineHeight: 20,
  },
  text_large: {
    fontSize: 18,
    lineHeight: 24,
  },

  // Disabled text
  text_disabled: {
    opacity: 0.7,
  },

  // Loading styles
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: 8,
  },
});

export default Button;
