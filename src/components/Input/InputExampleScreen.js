import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Title, Paragraph, Card } from 'react-native-paper';
import CustomInput from '../components/Input/CustomInput';

/**
 * InputExampleScreen - Demonstrates various use cases of the CustomInput component
 */
const InputExampleScreen = () => {
  const [basicInput, setBasicInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [multilineInput, setMultilineInput] = useState('');
  const [requiredInput, setRequiredInput] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [maxLengthInput, setMaxLengthInput] = useState('');

  const handleSubmit = () => {
    // Validate required fields
    if (!requiredInput.trim()) {
      Alert.alert('Validation Error', 'Please fill in the required field.');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    Alert.alert('Success', 'All inputs are valid!');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email && !emailRegex.test(email) ? 'Please enter a valid email address' : '';
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Title style={styles.title}>Custom Input Component Examples</Title>
      
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.sectionTitle}>Basic Inputs</Paragraph>
          
          {/* Basic Text Input */}
          <CustomInput
            label="Basic Text Input"
            placeholder="Enter some text..."
            value={basicInput}
            onChangeText={setBasicInput}
            helperText="This is a basic text input with helper text"
            testID="basic-input"
          />

          {/* Email Input */}
          <CustomInput
            label="Email Address"
            placeholder="example@email.com"
            value={emailInput}
            onChangeText={setEmailInput}
            keyboardType="email-address"
            autoComplete="email"
            error={validateEmail(emailInput)}
            testID="email-input"
          />

          {/* Password Input */}
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={passwordInput}
            onChangeText={setPasswordInput}
            secureTextEntry={true}
            autoComplete="password"
            helperText="Password should be at least 8 characters"
            testID="password-input"
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.sectionTitle}>Advanced Features</Paragraph>
          
          {/* Required Field */}
          <CustomInput
            label="Required Field"
            placeholder="This field is required"
            value={requiredInput}
            onChangeText={setRequiredInput}
            required={true}
            error={!requiredInput.trim() && requiredInput !== '' ? 'This field is required' : ''}
            testID="required-input"
          />

          {/* Multiline Input */}
          <CustomInput
            label="Comments"
            placeholder="Enter your comments here..."
            value={multilineInput}
            onChangeText={setMultilineInput}
            multiline={true}
            numberOfLines={4}
            helperText="You can enter multiple lines of text"
            testID="multiline-input"
          />

          {/* Input with Max Length */}
          <CustomInput
            label="Limited Text"
            placeholder="Max 50 characters"
            value={maxLengthInput}
            onChangeText={setMaxLengthInput}
            maxLength={50}
            helperText="This input has a 50 character limit"
            testID="maxlength-input"
          />

          {/* Error State Example */}
          <CustomInput
            label="Error State Example"
            placeholder="This will show an error"
            value={errorInput}
            onChangeText={setErrorInput}
            error="This is an example error message"
            testID="error-input"
          />

          {/* Disabled Input */}
          <CustomInput
            label="Disabled Input"
            placeholder="This input is disabled"
            value="Cannot edit this text"
            disabled={true}
            helperText="This input is disabled and cannot be edited"
            testID="disabled-input"
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.submitButton}
        testID="submit-button"
      >
        Validate Inputs
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#1976d2',
  },
  card: {
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  submitButton: {
    marginTop: 24,
    paddingVertical: 8,
  },
});

export default InputExampleScreen;
