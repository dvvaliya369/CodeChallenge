import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Colors from '../../utilities/Colors';

const Button = ({ 
  title, 
  onPress, 
  disabled = false, 
  loading = false, 
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  ...props 
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    
    // Add size styles
    switch (size) {
      case 'small':
        baseStyle.push(styles.buttonSmall);
        break;
      case 'large':
        baseStyle.push(styles.buttonLarge);
        break;
      default:
        baseStyle.push(styles.buttonMedium);
        break;
    }
    
    // Add variant styles
    switch (variant) {
      case 'secondary':
        baseStyle.push(styles.buttonSecondary);
        break;
      case 'outline':
        baseStyle.push(styles.buttonOutline);
        break;
      default:
        baseStyle.push(styles.buttonPrimary);
        break;
    }
    
    // Add disabled style if needed
    if (disabled || loading) {
      baseStyle.push(styles.buttonDisabled);
    }
    
    // Add custom style
    if (style) {
      baseStyle.push(style);
    }
    
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText];
    
    // Add size text styles
    switch (size) {
      case 'small':
        baseStyle.push(styles.buttonTextSmall);
        break;
      case 'large':
        baseStyle.push(styles.buttonTextLarge);
        break;
      default:
        baseStyle.push(styles.buttonTextMedium);
        break;
    }
    
    // Add variant text styles
    switch (variant) {
      case 'secondary':
        baseStyle.push(styles.buttonTextSecondary);
        break;
      case 'outline':
        baseStyle.push(styles.buttonTextOutline);
        break;
      default:
        baseStyle.push(styles.buttonTextPrimary);
        break;
    }
    
    // Add custom text style
    if (textStyle) {
      baseStyle.push(textStyle);
    }
    
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? Colors.themePoloBlueColor : '#000'} 
          size="small" 
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Base button styles
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  
  // Size styles
  buttonSmall: {
    height: 40,
    paddingHorizontal: 16,
  },
  buttonMedium: {
    height: 56,
    paddingHorizontal: 24,
  },
  buttonLarge: {
    height: 64,
    paddingHorizontal: 32,
  },
  
  // Variant styles
  buttonPrimary: {
    backgroundColor: Colors.themeYellowColor,
  },
  buttonSecondary: {
    backgroundColor: Colors.categoryTypeLightGreyColor,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.themePoloBlueColor,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  
  // Text styles
  buttonText: {
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonTextSmall: {
    fontSize: 13,
  },
  buttonTextMedium: {
    fontSize: 15,
  },
  buttonTextLarge: {
    fontSize: 17,
  },
  buttonTextPrimary: {
    color: '#000',
  },
  buttonTextSecondary: {
    color: Colors.themePoloBlueColor,
  },
  buttonTextOutline: {
    color: Colors.themePoloBlueColor,
  },
});

export default Button;
