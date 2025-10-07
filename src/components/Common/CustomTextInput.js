import React, { useState } from 'react';
import { 
  TextInput, 
  View, 
  Text, 
  TouchableOpacity,
  Image,
  Platform 
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../utilities/Colors';

/**
 * Reusable TextInput Component
 * 
 * Features:
 * - Customizable placeholder and styling
 * - Multiple input types (text, email, password, etc.)
 * - Optional label support
 * - Error state handling
 * - Icon support (left/right)
 * - Character limit
 * - Multiline support
 * - Focus/blur state handling
 */
const CustomTextInput = ({
  // Basic props
  value,
  onChangeText,
  placeholder,
  label,
  
  // Input configuration
  inputType = 'default',
  multiline = false,
  numberOfLines = 1,
  maxLength,
  editable = true,
  autoFocus = false,
  autoCorrect = false,
  autoCapitalize = 'none',
  
  // Styling props
  containerStyle,
  inputStyle,
  labelStyle,
  
  // Error handling
  error,
  errorMessage,
  
  // Icon props
  leftIcon,
  rightIcon,
  onRightIconPress,
  
  // State props
  showCharacterCount = false,
  required = false,
  
  // Event handlers
  onFocus,
  onBlur,
  onSubmitEditing,
  
  // Password specific
  secureTextEntry = false,
  
  // Additional props
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

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
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Get keyboard type based on input type
  const getKeyboardType = () => {
    switch (inputType) {
      case 'email':
        return 'email-address';
      case 'phone':
        return 'phone-pad';
      case 'number':
        return 'numeric';
      case 'decimal':
        return 'decimal-pad';
      default:
        return 'default';
    }
  };

  // Dynamic container style based on state
  const getContainerStyle = () => {
    const baseStyle = {
      marginBottom: 16,
    };

    return [baseStyle, containerStyle];
  };

  // Dynamic input container style based on state
  const getInputContainerStyle = () => {
    const baseStyle = {
      borderWidth: 1,
      borderRadius: multiline ? 8 : 32,
      borderColor: error ? '#FF6464' : (isFocused ? Colors.themePoloBlueColor : '#D0DBEA'),
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: multiline ? 'flex-start' : 'center',
      paddingHorizontal: 16,
      paddingVertical: multiline ? 16 : 0,
      minHeight: multiline ? 100 : 50,
    };

    if (!editable) {
      baseStyle.backgroundColor = '#F8F9FA';
    }

    return baseStyle;
  };

  // Dynamic input style
  const getInputStyle = () => {
    const baseStyle = {
      flex: 1,
      fontSize: 15,
      color: Colors.recipeUserTextColor,
      paddingVertical: multiline ? 0 : 12,
      textAlignVertical: multiline ? 'top' : 'center',
      minHeight: multiline ? 60 : undefined,
    };

    // Platform specific adjustments
    if (Platform.OS === 'android' && multiline) {
      baseStyle.paddingTop = 8;
    }

    return [baseStyle, inputStyle];
  };

  // Label style
  const getLabelStyle = () => {
    const baseStyle = {
      fontSize: 15,
      fontWeight: '600',
      color: Colors.themePoloBlueColor,
      marginBottom: 8,
      fontFamily: 'Inter-Medium',
    };

    return [baseStyle, labelStyle];
  };

  // Error style
  const getErrorStyle = () => ({
    fontSize: 12,
    color: '#FF6464',
    marginTop: 4,
    marginLeft: 4,
    fontFamily: 'Inter-Regular',
  });

  // Character count style
  const getCharacterCountStyle = () => ({
    fontSize: 12,
    color: Colors.themeLightGrayTextColor,
    textAlign: 'right',
    marginTop: 4,
    marginRight: 4,
  });

  return (
    <View style={getContainerStyle()}>
      {/* Label */}
      {label && (
        <Text style={getLabelStyle()}>
          {label}
          {required && <Text style={{ color: '#FF6464' }}> *</Text>}
        </Text>
      )}

      {/* Input Container */}
      <View style={getInputContainerStyle()}>
        {/* Left Icon */}
        {leftIcon && (
          <View style={{ marginRight: 12 }}>
            {typeof leftIcon === 'string' ? (
              <Image 
                source={{ uri: leftIcon }} 
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            ) : (
              leftIcon
            )}
          </View>
        )}

        {/* Text Input */}
        <TextInput
          style={getInputStyle()}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.themeLightGrayTextColor}
          keyboardType={getKeyboardType()}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          maxLength={maxLength}
          editable={editable}
          autoFocus={autoFocus}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          secureTextEntry={inputType === 'password' ? !isPasswordVisible : secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={onSubmitEditing}
          {...otherProps}
        />

        {/* Right Icon / Password Toggle */}
        {(rightIcon || inputType === 'password') && (
          <TouchableOpacity
            style={{ marginLeft: 12, padding: 4 }}
            onPress={inputType === 'password' ? togglePasswordVisibility : onRightIconPress}
            disabled={!onRightIconPress && inputType !== 'password'}
          >
            {inputType === 'password' ? (
              <Text style={{ fontSize: 12, color: Colors.themePoloBlueColor, fontWeight: '600' }}>
                {isPasswordVisible ? 'HIDE' : 'SHOW'}
              </Text>
            ) : (
              typeof rightIcon === 'string' ? (
                <Image 
                  source={{ uri: rightIcon }} 
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              ) : (
                rightIcon
              )
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && errorMessage && (
        <Text style={getErrorStyle()}>{errorMessage}</Text>
      )}

      {/* Character Count */}
      {showCharacterCount && maxLength && (
        <Text style={getCharacterCountStyle()}>
          {(value || '').length}/{maxLength}
        </Text>
      )}
    </View>
  );
};

// PropTypes for type checking
CustomTextInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.oneOf(['default', 'email', 'phone', 'number', 'decimal', 'password']),
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  maxLength: PropTypes.number,
  editable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onRightIconPress: PropTypes.func,
  showCharacterCount: PropTypes.bool,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

// Default props
CustomTextInput.defaultProps = {
  inputType: 'default',
  multiline: false,
  numberOfLines: 1,
  editable: true,
  autoFocus: false,
  autoCorrect: false,
  autoCapitalize: 'none',
  showCharacterCount: false,
  required: false,
  secureTextEntry: false,
  error: false,
};

export default CustomTextInput;
