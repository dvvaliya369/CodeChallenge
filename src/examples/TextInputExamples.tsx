import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TextInput from '../components/TextInput';

const TextInputExamples: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = () => {
    Alert.alert('Form Data', `
Basic: ${basicValue}
Email: ${emailValue}
Password: ${passwordValue}
TextArea: ${textAreaValue}
    `);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TextInput Component Examples</Text>

      {/* Basic Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Input</Text>
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={basicValue}
          onChangeText={setBasicValue}
          required
        />
      </View>

      {/* Email Input with Validation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Email with Validation</Text>
        <TextInput
          label="Email Address"
          placeholder="user@example.com"
          value={emailValue}
          onChangeText={(text) => {
            setEmailValue(text);
            validateEmail(text);
          }}
          onBlur={() => validateEmail(emailValue)}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
          required
        />
      </View>

      {/* Password Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Password Input</Text>
        <TextInput
          label="Password"
          placeholder="Enter password"
          value={passwordValue}
          onChangeText={setPasswordValue}
          secureTextEntry
          helperText="Password must be at least 8 characters"
        />
      </View>

      {/* Text Area */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text Area with Character Count</Text>
        <TextInput
          label="Description"
          placeholder="Tell us about yourself..."
          value={textAreaValue}
          onChangeText={setTextAreaValue}
          multiline
          numberOfLines={4}
          maxLength={200}
          showCharacterCount
          helperText="Share a brief description"
        />
      </View>

      {/* Different Variants */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input Variants</Text>
        
        <TextInput
          label="Default Variant"
          placeholder="Default input"
          variant="default"
          containerStyle={styles.variantSpacing}
        />
        
        <TextInput
          label="Outlined Variant"
          placeholder="Outlined input"
          variant="outlined"
          containerStyle={styles.variantSpacing}
        />
        
        <TextInput
          label="Filled Variant"
          placeholder="Filled input"
          variant="filled"
          containerStyle={styles.variantSpacing}
        />
      </View>

      {/* Different Sizes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input Sizes</Text>
        
        <TextInput
          label="Small Size"
          placeholder="Small input"
          size="small"
          containerStyle={styles.variantSpacing}
        />
        
        <TextInput
          label="Medium Size"
          placeholder="Medium input"
          size="medium"
          containerStyle={styles.variantSpacing}
        />
        
        <TextInput
          label="Large Size"
          placeholder="Large input"
          size="large"
          containerStyle={styles.variantSpacing}
        />
      </View>

      {/* Disabled State */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disabled Input</Text>
        <TextInput
          label="Disabled Input"
          placeholder="This input is disabled"
          value="Cannot edit this text"
          editable={false}
        />
      </View>

      {/* Custom Styling */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Styling</Text>
        <TextInput
          label="Custom Styled Input"
          placeholder="Custom styled input"
          containerStyle={styles.customContainer}
          inputStyle={styles.customInput}
          labelStyle={styles.customLabel}
          helperText="This input has custom styling"
          helperStyle={styles.customHelper}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Form</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#555',
  },
  variantSpacing: {
    marginBottom: 12,
  },
  customContainer: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#87ceeb',
  },
  customInput: {
    backgroundColor: '#ffffff',
    borderColor: '#4682b4',
    borderWidth: 1,
    borderRadius: 8,
    color: '#2c5f7d',
  },
  customLabel: {
    color: '#2c5f7d',
    fontWeight: 'bold',
    fontSize: 16,
  },
  customHelper: {
    color: '#4682b4',
    fontStyle: 'italic',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 40,
  },
});

export default TextInputExamples;
