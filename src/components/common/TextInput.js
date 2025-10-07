import React, { forwardRef } from 'react'
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native'
import Colors from '../../utilities/Colors'

/**
 * A reusable TextInput component for React Native applications
 * @param {Object} props - Component props
 * @param {string} props.value - The value of the text input
 * @param {function} props.onChangeText - Callback when text changes
 * @param {string} props.placeholder - Placeholder text
 * @param {boolean} props.multiline - Whether the input is multiline
 * @param {boolean} props.secureTextEntry - Whether to hide the text (for passwords)
 * @param {string} props.keyboardType - Type of keyboard to display
 * @param {boolean} props.autoCapitalize - Auto-capitalization behavior
 * @param {boolean} props.autoCorrect - Whether to enable auto-correct
 * @param {boolean} props.autoFocus - Whether to auto-focus the input
 * @param {boolean} props.editable - Whether the input is editable
 * @param {number} props.maxLength - Maximum number of characters
 * @param {number} props.numberOfLines - Number of lines for multiline input
 * @param {string} props.label - Label text for the input
 * @param {string} props.errorMessage - Error message to display
 * @param {string} props.helpText - Help text to display
 * @param {Object} props.containerStyle - Style for the container
 * @param {Object} props.inputStyle - Style for the input
 * @param {Object} props.labelStyle - Style for the label
 * @param {Object} props.errorStyle - Style for the error message
 * @param {Object} props.helpStyle - Style for the help text
 * @param {string} props.placeholderTextColor - Color of the placeholder text
 * @param {boolean} props.required - Whether the field is required
 * @param {function} props.onFocus - Callback when input is focused
 * @param {function} props.onBlur - Callback when input loses focus
 * @param {function} props.onSubmitEditing - Callback when submit is pressed
 * @param {string} props.returnKeyType - Return key type
 * @param {string} props.testID - Test ID for testing purposes
 */
const TextInput = forwardRef(({
    value = '',
    onChangeText,
    placeholder = '',
    multiline = false,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'sentences',
    autoCorrect = true,
    autoFocus = false,
    editable = true,
    maxLength,
    numberOfLines = 1,
    label,
    errorMessage,
    helpText,
    containerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    helpStyle,
    placeholderTextColor = Colors.themeLightGrayTextColor,
    required = false,
    onFocus,
    onBlur,
    onSubmitEditing,
    returnKeyType = 'done',
    testID,
    ...props
}, ref) => {
    const hasError = Boolean(errorMessage)
    
    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <Text style={[styles.label, labelStyle, hasError && styles.labelError]}>
                    {label}{required && <Text style={styles.required}> *</Text>}
                </Text>
            )}
            
            <View style={[
                styles.inputContainer,
                hasError && styles.inputContainerError,
                !editable && styles.inputContainerDisabled
            ]}>
                <RNTextInput
                    ref={ref}
                    style={[
                        styles.textInput,
                        multiline && styles.textInputMultiline,
                        inputStyle,
                        hasError && styles.textInputError,
                        !editable && styles.textInputDisabled
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    multiline={multiline}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    autoFocus={autoFocus}
                    editable={editable}
                    maxLength={maxLength}
                    numberOfLines={multiline ? numberOfLines : 1}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    testID={testID}
                    {...props}
                />
            </View>
            
            {errorMessage && (
                <Text style={[styles.errorText, errorStyle]}>
                    {errorMessage}
                </Text>
            )}
            
            {helpText && !errorMessage && (
                <Text style={[styles.helpText, helpStyle]}>
                    {helpText}
                </Text>
            )}
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.recipeUserTextColor,
        marginBottom: 8,
    },
    labelError: {
        color: '#FF6B6B',
    },
    required: {
        color: '#FF6B6B',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.categoryTypeLightGreyColor,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        minHeight: 44,
    },
    inputContainerError: {
        borderColor: '#FF6B6B',
    },
    inputContainerDisabled: {
        backgroundColor: Colors.categoryTypeLightGreyColor,
        borderColor: Colors.themeLightGrayTextColor,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: Colors.recipeUserTextColor,
        padding: 0, // Remove default padding
    },
    textInputMultiline: {
        minHeight: 80,
        textAlignVertical: 'top',
        paddingTop: 8,
    },
    textInputError: {
        color: Colors.recipeUserTextColor,
    },
    textInputDisabled: {
        color: Colors.themeLightGrayTextColor,
    },
    errorText: {
        fontSize: 14,
        color: '#FF6B6B',
        marginTop: 4,
    },
    helpText: {
        fontSize: 14,
        color: Colors.themeLightGrayTextColor,
        marginTop: 4,
    },
})

// Set display name for debugging
TextInput.displayName = 'TextInput'

export default TextInput
