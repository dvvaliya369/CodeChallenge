import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ButtonProps } from './types';
import { styles, getContainerStyles, getTextStyles, colors } from './styles';

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  iconSet = 'MaterialIcons',
  style,
  textStyle,
  onPress,
  onLongPress,
  testID,
  accessibilityLabel,
  accessibilityHint,
  fullWidth = false,
}) => {
  const isDisabled = disabled || loading;
  
  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 16;
      case 'medium':
        return 18;
      case 'large':
        return 20;
      default:
        return 18;
    }
  };
  
  const getLoadingSize = () => {
    switch (size) {
      case 'small':
        return 16;
      case 'medium':
        return 18;
      case 'large':
        return 20;
      default:
        return 18;
    }
  };
  
  const getIconColor = () => {
    if (isDisabled) {
      return colors.white;
    }
    
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return colors.white;
      case 'outline':
        return colors.outline;
      case 'ghost':
        return colors.ghost;
      default:
        return colors.white;
    }
  };
  
  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <View style={styles.iconContainer}>
        <Icon
          name={icon}
          size={getIconSize()}
          color={getIconColor()}
        />
      </View>
    );
  };
  
  const renderLoading = () => {
    if (!loading) return null;
    
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size={getLoadingSize()}
          color={getIconColor()}
        />
      </View>
    );
  };
  
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.textWrapper}>
          {renderLoading()}
          <Text style={getTextStyles(variant, size, isDisabled, textStyle)}>
            {title}
          </Text>
        </View>
      );
    }
    
    if (icon) {
      return (
        <View style={styles.textWrapper}>
          {iconPosition === 'left' && renderIcon()}
          <Text style={getTextStyles(variant, size, isDisabled, textStyle)}>
            {title}
          </Text>
          {iconPosition === 'right' && renderIcon()}
        </View>
      );
    }
    
    return (
      <Text style={getTextStyles(variant, size, isDisabled, textStyle)}>
        {title}
      </Text>
    );
  };
  
  return (
    <TouchableOpacity
      style={getContainerStyles(variant, size, isDisabled, fullWidth, style)}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={isDisabled}
      testID={testID}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;
