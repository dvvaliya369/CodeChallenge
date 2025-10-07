import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth } = Dimensions.get('window');

/**
 * Reusable Button Component
 * 
 * @param {Object} props
 * @param {string} props.title - Button text
 * @param {function} props.onPress - Press handler
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'} props.variant - Button style variant
 * @param {'small'|'medium'|'large'} props.size - Button size
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.loading - Whether to show loading state
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {string} props.iconName - Material Icon name
 * @param {'left'|'right'} props.iconPosition - Icon position relative to text
 * @param {Object} props.style - Custom styles
 * @param {Object} props.textStyle - Custom text styles
 * @param {string} props.loadingColor - Loading indicator color
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.testID - Test identifier
 */
const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconName,
  iconPosition = 'left',
  style,
  textStyle,
  loadingColor,
  accessibilityLabel,
  testID,
  ...props
}) => {
  // Get styles based on variant and size
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    loading && styles.loading,
    style,
  ];

  const textStyles = [
    styles.baseText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  const iconColor = getIconColor(variant, disabled);
  const iconSize = getIconSize(size);
  const showLoadingIndicator = loading;
  const loadingIndicatorColor = loadingColor || getLoadingColor(variant);

  const renderIcon = () => {
    if (!iconName) return null;
    
    return (
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={[
          styles.icon,
          iconPosition === 'right' && styles.iconRight,
        ]}
      />
    );
  };

  const renderContent = () => {
    if (showLoadingIndicator) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size={size === 'small' ? 'small' : 'small'}
            color={loadingIndicatorColor}
          />
          {title && (
            <Text style={[textStyles, styles.loadingText]} numberOfLines={1}>
              {title}
            </Text>
          )}
        </View>
      );
    }

    return (
      <View style={styles.contentContainer}>
        {iconPosition === 'left' && renderIcon()}
        {title && (
          <Text style={textStyles} numberOfLines={1}>
            {title}
          </Text>
        )}
        {iconPosition === 'right' && renderIcon()}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole="button"
      accessibilityState={{
        disabled: disabled || loading,
        busy: loading,
      }}
      testID={testID}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

// Helper functions
const getIconColor = (variant, disabled) => {
  if (disabled) return '#999999';
  
  const colors = {
    primary: '#FFFFFF',
    secondary: '#333333',
    outline: '#007AFF',
    ghost: '#007AFF',
    danger: '#FFFFFF',
  };
  
  return colors[variant] || colors.primary;
};

const getIconSize = (size) => {
  const sizes = {
    small: 16,
    medium: 20,
    large: 24,
  };
  
  return sizes[size] || sizes.medium;
};

const getLoadingColor = (variant) => {
  const colors = {
    primary: '#FFFFFF',
    secondary: '#333333',
    outline: '#007AFF',
    ghost: '#007AFF',
    danger: '#FFFFFF',
  };
  
  return colors[variant] || colors.primary;
};

const styles = StyleSheet.create({
  // Base styles
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  
  baseText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  
  // Variant styles
  primary: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  
  primaryText: {
    color: '#FFFFFF',
  },
  
  secondary: {
    backgroundColor: '#F2F2F7',
    borderColor: '#F2F2F7',
  },
  
  secondaryText: {
    color: '#333333',
  },
  
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#007AFF',
  },
  
  outlineText: {
    color: '#007AFF',
  },
  
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  
  ghostText: {
    color: '#007AFF',
  },
  
  danger: {
    backgroundColor: '#FF3B30',
    borderColor: '#FF3B30',
  },
  
  dangerText: {
    color: '#FFFFFF',
  },
  
  // Size styles
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 32,
  },
  
  smallText: {
    fontSize: 14,
    lineHeight: 16,
  },
  
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  
  mediumText: {
    fontSize: 16,
    lineHeight: 20,
  },
  
  large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 52,
  },
  
  largeText: {
    fontSize: 18,
    lineHeight: 22,
  },
  
  // State styles
  disabled: {
    backgroundColor: '#F2F2F7',
    borderColor: '#F2F2F7',
    opacity: 0.6,
  },
  
  disabledText: {
    color: '#999999',
  },
  
  loading: {
    opacity: 0.8,
  },
  
  // Layout styles
  fullWidth: {
    width: '100%',
    alignSelf: 'stretch',
  },
  
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loadingText: {
    marginLeft: 8,
  },
  
  icon: {
    marginRight: 8,
  },
  
  iconRight: {
    marginRight: 0,
    marginLeft: 8,
  },
});

export default Button;
