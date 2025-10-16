import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  testID,
}) => {
  const buttonStyles = [
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

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
      activeOpacity={0.8}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Base button styles
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },

  // Button variants
  button_primary: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  button_secondary: {
    backgroundColor: '#8E8E93',
    borderColor: '#8E8E93',
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderColor: '#007AFF',
  },
  button_danger: {
    backgroundColor: '#FF3B30',
    borderColor: '#FF3B30',
  },

  // Button sizes
  button_small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  button_medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  button_large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
  },

  // Disabled state
  button_disabled: {
    backgroundColor: '#E5E5EA',
    borderColor: '#E5E5EA',
    opacity: 0.6,
  },

  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },

  // Text variants
  text_primary: {
    color: '#FFFFFF',
  },
  text_secondary: {
    color: '#FFFFFF',
  },
  text_outline: {
    color: '#007AFF',
  },
  text_danger: {
    color: '#FFFFFF',
  },

  // Text sizes
  text_small: {
    fontSize: 14,
  },
  text_medium: {
    fontSize: 16,
  },
  text_large: {
    fontSize: 18,
  },

  // Disabled text
  text_disabled: {
    color: '#8E8E93',
  },
});

export default Button;
export type { ButtonProps };
