import React, { useState, useRef } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native'
import TextInput from '../components/common/TextInput'
import Colors from '../utilities/Colors'

const TextInputExample = () => {
    const [basicText, setBasicText] = useState('')
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [multilineText, setMultilineText] = useState('')
    const [requiredText, setRequiredText] = useState('')
    const [disabledText, setDisabledText] = useState('This field is disabled')
    const [errorText, setErrorText] = useState('')
    
    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    
    // Simple email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    
    const handleEmailChange = (text) => {
        setEmailText(text)
    }
    
    const handleErrorTextChange = (text) => {
        setErrorText(text)
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>TextInput Component Examples</Text>
                
                {/* Basic Text Input */}
                <TextInput
                    label="Basic Text Input"
                    placeholder="Enter some text..."
                    value={basicText}
                    onChangeText={setBasicText}
                    helpText="This is a basic text input with a label and help text"
                />
                
                {/* Email Input */}
                <TextInput
                    ref={emailInputRef}
                    label="Email Address"
                    placeholder="Enter your email..."
                    value={emailText}
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    errorMessage={emailText && !validateEmail(emailText) ? 'Please enter a valid email address' : ''}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
                
                {/* Password Input */}
                <TextInput
                    ref={passwordInputRef}
                    label="Password"
                    placeholder="Enter your password..."
                    value={passwordText}
                    onChangeText={setPasswordText}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    helpText="Password should be at least 8 characters long"
                    returnKeyType="done"
                />
                
                {/* Required Field */}
                <TextInput
                    label="Required Field"
                    placeholder="This field is required..."
                    value={requiredText}
                    onChangeText={setRequiredText}
                    required={true}
                    errorMessage={requiredText === '' ? 'This field is required' : ''}
                />
                
                {/* Multiline Input */}
                <TextInput
                    label="Description"
                    placeholder="Enter a detailed description..."
                    value={multilineText}
                    onChangeText={setMultilineText}
                    multiline={true}
                    numberOfLines={4}
                    maxLength={500}
                    helpText={`${multilineText.length}/500 characters`}
                />
                
                {/* Disabled Input */}
                <TextInput
                    label="Disabled Field"
                    placeholder="This field is disabled"
                    value={disabledText}
                    onChangeText={() => {}} // No-op since it's disabled
                    editable={false}
                    helpText="This field cannot be edited"
                />
                
                {/* Input with Error */}
                <TextInput
                    label="Field with Error"
                    placeholder="Type something to see error..."
                    value={errorText}
                    onChangeText={handleErrorTextChange}
                    errorMessage={errorText ? 'This is an example error message' : ''}
                />
                
                {/* Custom Styled Input */}
                <TextInput
                    label="Custom Styled Input"
                    placeholder="Custom styling example..."
                    value={basicText}
                    onChangeText={setBasicText}
                    containerStyle={styles.customContainer}
                    inputStyle={styles.customInput}
                    labelStyle={styles.customLabel}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.recipeUserTextColor,
        marginBottom: 20,
        textAlign: 'center',
    },
    customContainer: {
        marginVertical: 12,
    },
    customInput: {
        fontSize: 18,
        fontWeight: '500',
    },
    customLabel: {
        fontSize: 18,
        color: Colors.themePoloBlueColor,
        fontWeight: 'bold',
    },
})

export default TextInputExample
