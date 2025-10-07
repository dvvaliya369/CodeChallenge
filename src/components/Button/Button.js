import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../utilities/Colors';

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return [
          styles.primaryButton,
          disabled && styles.disabledButton,
          style
        ];
      case 'secondary':
        return [
          styles.secondaryButton,
          disabled && styles.disabledSecondaryButton,
          style
        ];
      case 'outline':
        return [
          styles.outlineButton,
          disabled && styles.disabledOutlineButton,
          style
        ];
      default:
        return [
          styles.primaryButton,
          disabled && styles.disabledButton,
          style
        ];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return [
          styles.primaryText,
          disabled && styles.disabledText,
          textStyle
        ];
      case 'secondary':
        return [
          styles.secondaryText,
          disabled && styles.disabledText,
          textStyle
        ];
      case 'outline':
        return [
          styles.outlineText,
          disabled && styles.disabledOutlineText,
          textStyle
        ];
      default:
        return [
          styles.primaryText,
          disabled && styles.disabledText,
          textStyle
        ];
    }
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Primary Button Styles
  primaryButton: {
    backgroundColor: Colors.themeYellowColor,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 24,
    marginVertical: 12,
  },
  primaryText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
  },

  // Secondary Button Styles
  secondaryButton: {
    backgroundColor: Colors.themePoloBlueColor,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 24,
    marginVertical: 12,
  },
  secondaryText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },

  // Outline Button Styles
  outlineButton: {
    backgroundColor: 'transparent',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.themeYellowColor,
    marginHorizontal: 24,
    marginVertical: 12,
  },
  outlineText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.themeYellowColor,
  },

  // Disabled States
  disabledButton: {
    backgroundColor: Colors.categoryTypeLightGreyColor,
  },
  disabledSecondaryButton: {
    backgroundColor: Colors.themeLightGrayTextColor,
  },
  disabledOutlineButton: {
    borderColor: Colors.themeLightGrayTextColor,
    backgroundColor: 'transparent',
  },
  disabledText: {
    color: Colors.themeLightGrayTextColor,
  },
  disabledOutlineText: {
    color: Colors.themeLightGrayTextColor,
  },
});

export default Button;
