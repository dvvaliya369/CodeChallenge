import React, { forwardRef, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, TouchableRipple } from 'react-native-paper';
import PropTypes from 'prop-types';

/**
 * CustomButton - A reusable button component with enhanced features
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Button text
 * @param {function} props.onPress - Callback function called when button is pressed
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {boolean} props.loading - Whether to show loading indicator
 * @param {string} props.mode - Button mode ('text', 'outlined', 'contained', 'elevated', 'contained-tonal')
 * @param {string} props.size - Button size ('small', 'medium', 'large')
 * @param {string} props.color - Button color
 * @param {string} props.backgroundColor - Button background color
 * @param {string} props.textColor - Button text color
 * @param {string} props.icon - Icon name to display
 * @param {string} props.iconPosition - Icon position ('left' or 'right')
 * @param {Object} props.style - Custom styles for the button container
 * @param {Object} props.buttonStyle - Custom styles for the button itself
 * @param {Object} props.textStyle - Custom styles for the button text
 * @param {string} props.testID - Test identifier for automated testing
 * @param {boolean} props.fullWidth - Whether the button should take full width
 * @param {string} props.variant - Button variant for different styling themes
 * @param {function} props.onLongPress - Callback when button is long pressed
 * @param {number} props.elevation - Button elevation (shadow depth)
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.accessibilityHint - Accessibility hint
 */
const CustomButton = forwardRef(({
  title,
  onPress,
  disabled = false,
  loading = false,
  mode = 'contained',
  size = 'medium',
  color,
  backgroundColor,
  textColor,
  icon,
  iconPosition = 'left',
  style,
  buttonStyle,
  textStyle,
  testID,
  fullWidth = false,
  variant = 'primary',
  onLongPress,
  elevation,
  accessibilityLabel,
  accessibilityHint,
  ...rest
}, ref) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };

  const handleLongPress = () => {
    if (!disabled && !loading && onLongPress) {
      onLongPress();
    }
  };

  // Get size-specific styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          minHeight: 32,
          paddingHorizontal: 12,
          fontSize: 12,
        };
      case 'large':
        return {
          minHeight: 52,
          paddingHorizontal: 24,
          fontSize: 18,
        };
      default: // medium
        return {
          minHeight: 40,
          paddingHorizontal: 16,
          fontSize: 14,
        };
    }
  };

  // Get variant-specific colors
  const getVariantColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: backgroundColor || '#6c757d',
          textColor: textColor || '#ffffff',
        };
      case 'success':
        return {
          backgroundColor: backgroundColor || '#28a745',
          textColor: textColor || '#ffffff',
        };
      case 'danger':
        return {
          backgroundColor: backgroundColor || '#dc3545',
          textColor: textColor || '#ffffff',
        };
      case 'warning':
        return {
          backgroundColor: backgroundColor || '#ffc107',
          textColor: textColor || '#000000',
        };
      case 'info':
        return {
          backgroundColor: backgroundColor || '#17a2b8',
          textColor: textColor || '#ffffff',
        };
      default: // primary
        return {
          backgroundColor: backgroundColor || '#007bff',
          textColor: textColor || '#ffffff',
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const variantColors = getVariantColors();

  // Custom button content for loading state
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="small"
            color={variantColors.textColor}
            style={styles.loadingIndicator}
          />
          <Text style={[
            styles.buttonText,
            { fontSize: sizeStyles.fontSize },
            { color: variantColors.textColor },
            textStyle
          ]}>
            {title}
          </Text>
        </View>
      );
    }

    return title;
  };

  return (
    <View style={[
      styles.container,
      fullWidth && styles.fullWidth,
      style
    ]}>
      <Button
        ref={ref}
        mode={mode}
        onPress={handlePress}
        onLongPress={handleLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || loading}
        icon={icon && !loading ? icon : undefined}
        contentStyle={[
          styles.buttonContent,
          {
            minHeight: sizeStyles.minHeight,
            paddingHorizontal: sizeStyles.paddingHorizontal,
          },
          iconPosition === 'right' && styles.iconRight,
        ]}
        labelStyle={[
          styles.buttonText,
          {
            fontSize: sizeStyles.fontSize,
            color: variantColors.textColor,
          },
          textStyle
        ]}
        buttonColor={variantColors.backgroundColor}
        textColor={variantColors.textColor}
        style={[
          styles.button,
          buttonStyle,
          isPressed && styles.pressed,
          disabled && styles.disabled,
          elevation !== undefined && { elevation }
        ]}
        testID={testID}
        accessibilityLabel={accessibilityLabel || title}
        accessibilityHint={accessibilityHint}
        accessibilityRole="button"
        accessibilityState={{
          disabled: disabled || loading,
          busy: loading,
        }}
        {...rest}
      >
        {renderContent()}
      </Button>
    </View>
  );
});

CustomButton.displayName = 'CustomButton';

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  mode: PropTypes.oneOf(['text', 'outlined', 'contained', 'elevated', 'contained-tonal']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  testID: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  onLongPress: PropTypes.func,
  elevation: PropTypes.number,
  accessibilityLabel: PropTypes.string,
  accessibilityHint: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    borderRadius: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    flexDirection: 'row-reverse',
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIndicator: {
    marginRight: 8,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.6,
  },
});

export default CustomButton;
