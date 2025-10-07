import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInput from './TextInput';

const TextInputDemo = () => {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [multilineValue, setMultilineValue] = useState('');
  const [errorValue, setErrorValue] = useState('invalid');
  const [disabledValue, setDisabledValue] = useState('This is disabled');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>TextInput Component Demo</Text>
        
        {/* Basic Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Input</Text>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            value={basicValue}
            onChangeText={setBasicValue}
            helperText="This is a basic text input"
          />
        </View>

        {/* Email Input with Validation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Email Input with Validation</Text>
          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            value={emailValue}
            onChangeText={setEmailValue}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailValue && !validateEmail(emailValue) ? 'Please enter a valid email' : ''}
            leftIcon={<Icon name="email" size={20} color="#718096" />}
            required
          />
        </View>

        {/* Password Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Password Input</Text>
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry={!showPassword}
            leftIcon={<Icon name="lock" size={20} color="#718096" />}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon 
                  name={showPassword ? "visibility-off" : "visibility"} 
                  size={20} 
                  color="#718096" 
                />
              </TouchableOpacity>
            }
            helperText="Minimum 8 characters"
            maxCharacters={20}
            showCharacterCount
          />
        </View>

        {/* Multiline Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Multiline Input</Text>
          <TextInput
            label="Comments"
            placeholder="Enter your comments here..."
            value={multilineValue}
            onChangeText={setMultilineValue}
            multiline
            numberOfLines={4}
            maxCharacters={200}
            showCharacterCount
            containerStyle={{ minHeight: 100 }}
          />
        </View>

        {/* Different Variants */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variants</Text>
          
          <TextInput
            label="Default Variant"
            placeholder="Default input"
            variant="default"
            containerStyle={styles.variantInput}
          />
          
          <TextInput
            label="Outlined Variant"
            placeholder="Outlined input"
            variant="outlined"
            containerStyle={styles.variantInput}
          />
          
          <TextInput
            label="Filled Variant"
            placeholder="Filled input"
            variant="filled"
            containerStyle={styles.variantInput}
          />
        </View>

        {/* Different Sizes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sizes</Text>
          
          <TextInput
            label="Small Size"
            placeholder="Small input"
            size="small"
            containerStyle={styles.variantInput}
          />
          
          <TextInput
            label="Medium Size"
            placeholder="Medium input"
            size="medium"
            containerStyle={styles.variantInput}
          />
          
          <TextInput
            label="Large Size"
            placeholder="Large input"
            size="large"
            containerStyle={styles.variantInput}
          />
        </View>

        {/* Error State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Error State</Text>
          <TextInput
            label="Username"
            placeholder="Enter username"
            value={errorValue}
            onChangeText={setErrorValue}
            error="Username must be at least 3 characters long"
            leftIcon={<Icon name="person" size={20} color="#E53E3E" />}
          />
        </View>

        {/* Disabled State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disabled State</Text>
          <TextInput
            label="Disabled Input"
            value={disabledValue}
            disabled
            helperText="This input is disabled"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
  },
  variantInput: {
    marginBottom: 16,
  },
});

export default TextInputDemo;
