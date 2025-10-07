import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import { CustomTextInput, ValidationRules } from '../Common';

const TextInputExamples = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    description: '',
    requiredField: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailError = ValidationRules.email(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }
    
    // Password validation
    const passwordError = ValidationRules.password(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Phone validation
    const phoneError = ValidationRules.phone(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }
    
    // Required field validation
    if (!formData.requiredField.trim()) {
      newErrors.requiredField = 'This field is required';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      Alert.alert('Success', 'Form is valid!');
    }
  };
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>TextInput Component Examples</Text>
      
      {/* Basic Text Input */}
      <CustomTextInput
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.name}
        onChangeText={(value) => updateField('name', value)}
        error={errors.name}
        required
        autoCapitalize="words"
      />
      
      {/* Email Input */}
      <CustomTextInput
        label="Email Address"
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(value) => updateField('email', value)}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        validationRules={[ValidationRules.email]}
      />
      
      {/* Password Input */}
      <CustomTextInput
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(value) => updateField('password', value)}
        error={errors.password}
        secureTextEntry
        autoCapitalize="none"
        validationRules={[ValidationRules.password]}
      />
      
      {/* Confirm Password */}
      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChangeText={(value) => updateField('confirmPassword', value)}
        error={errors.confirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      
      {/* Phone Input */}
      <CustomTextInput
        label="Phone Number"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChangeText={(value) => updateField('phone', value)}
        error={errors.phone}
        keyboardType="phone-pad"
        validationRules={[ValidationRules.phone]}
      />
      
      {/* Multiline Input */}
      <CustomTextInput
        label="Description"
        placeholder="Tell us about yourself..."
        value={formData.description}
        onChangeText={(value) => updateField('description', value)}
        multiline
        numberOfLines={4}
        maxLength={200}
        showCharacterCount
        validationRules={[ValidationRules.maxLength(200)]}
      />
      
      {/* Required Field with Custom Styling */}
      <CustomTextInput
        label="Required Field"
        placeholder="This field is required"
        value={formData.requiredField}
        onChangeText={(value) => updateField('requiredField', value)}
        error={errors.requiredField}
        required
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
        labelStyle={styles.customLabel}
      />
      
      {/* Disabled Input */}
      <CustomTextInput
        label="Disabled Input"
        placeholder="This input is disabled"
        value="Cannot edit this"
        editable={false}
      />
      
      <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={validateForm}>
          Validate Form
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  customContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
  },
  customInput: {
    fontSize: 18,
    color: '#2c3e50',
  },
  customLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden',
  },
});

export default TextInputExamples;
