import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import CustomTextInput from '../components/Common/CustomTextInput';
import Colors from '../utilities/Colors';

/**
 * Example Screen showcasing CustomTextInput component usage
 * This demonstrates all the available features and props
 */
const TextInputExampleScreen = () => {
  // State for different input examples
  const [basicInput, setBasicInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [multilineInput, setMultilineInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [labeledInput, setLabeledInput] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [characterLimitInput, setCharacterLimitInput] = useState('');

  // Validation function for error example
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setErrorInput(text);
  };

  const isEmailError = errorInput.length > 0 && !validateEmail(errorInput);

  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: 'white' }}
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.themePoloBlueColor,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
      }}>
        CustomTextInput Examples
      </Text>

      {/* Basic Text Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>1. Basic Text Input</Text>
        <CustomTextInput
          value={basicInput}
          onChangeText={setBasicInput}
          placeholder="Enter your name..."
        />
      </View>

      {/* Email Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>2. Email Input</Text>
        <CustomTextInput
          value={emailInput}
          onChangeText={setEmailInput}
          placeholder="Enter your email..."
          inputType="email"
          label="Email Address"
        />
      </View>

      {/* Password Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>3. Password Input</Text>
        <CustomTextInput
          value={passwordInput}
          onChangeText={setPasswordInput}
          placeholder="Enter your password..."
          inputType="password"
          label="Password"
          required
        />
      </View>

      {/* Phone Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>4. Phone Input</Text>
        <CustomTextInput
          value={phoneInput}
          onChangeText={setPhoneInput}
          placeholder="Enter your phone number..."
          inputType="phone"
          label="Phone Number"
        />
      </View>

      {/* Number Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>5. Number Input</Text>
        <CustomTextInput
          value={numberInput}
          onChangeText={setNumberInput}
          placeholder="Enter a number..."
          inputType="number"
          label="Age"
        />
      </View>

      {/* Multiline Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>6. Multiline Text Input</Text>
        <CustomTextInput
          value={multilineInput}
          onChangeText={setMultilineInput}
          placeholder="Enter your recipe description..."
          multiline
          numberOfLines={4}
          label="Recipe Description"
        />
      </View>

      {/* Input with Character Limit */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>7. Input with Character Limit</Text>
        <CustomTextInput
          value={characterLimitInput}
          onChangeText={setCharacterLimitInput}
          placeholder="Enter a short message..."
          maxLength={50}
          showCharacterCount
          label="Short Message"
        />
      </View>

      {/* Input with Error State */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>8. Input with Error State</Text>
        <CustomTextInput
          value={errorInput}
          onChangeText={handleEmailChange}
          placeholder="Enter a valid email..."
          inputType="email"
          label="Email Validation"
          error={isEmailError}
          errorMessage={isEmailError ? "Please enter a valid email address" : ""}
          required
        />
      </View>

      {/* Labeled Required Input */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.exampleTitle}>9. Labeled Required Input</Text>
        <CustomTextInput
          value={labeledInput}
          onChangeText={setLabeledInput}
          placeholder="This field is required..."
          label="Full Name"
          required
        />
      </View>

      {/* Custom Styled Input */}
      <View style={{ marginBottom: 40 }}>
        <Text style={styles.exampleTitle}>10. Custom Styled Input</Text>
        <CustomTextInput
          value={basicInput}
          onChangeText={setBasicInput}
          placeholder="Custom styled input..."
          label="Custom Style Example"
          containerStyle={{ 
            backgroundColor: '#F8F9FA', 
            padding: 16, 
            borderRadius: 12,
            marginBottom: 8
          }}
          inputStyle={{ 
            fontSize: 16,
            fontWeight: '500'
          }}
          labelStyle={{
            color: Colors.themeYellowColor,
            fontSize: 16,
          }}
        />
      </View>

      <Text style={{
        textAlign: 'center',
        color: Colors.themeLightGrayTextColor,
        fontSize: 12,
        marginTop: 20,
        fontStyle: 'italic'
      }}>
        These examples showcase the flexibility of the CustomTextInput component
      </Text>
    </ScrollView>
  );
};

const styles = {
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.themePoloBlueColor,
    marginBottom: 8,
    fontFamily: 'Inter-SemiBold',
  }
};

export default TextInputExampleScreen;
