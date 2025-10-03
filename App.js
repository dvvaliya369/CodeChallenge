import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Card,
  Title,
  TextInput,
  Button,
  Text,
  Divider,
  Chip,
} from 'react-native-paper';
import SignupScreen from './SignupScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ea',
    accent: '#03dac4',
  },
};

const LoginScreen = ({ onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Login successful!');
    }, 2000);
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset link sent to your email');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.header}>
              <Title style={styles.title}>Welcome Back</Title>
              <Text style={styles.subtitle}>Sign in to your account</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                left={<TextInput.Icon icon="email" />}
                style={styles.input}
              />

              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                style={styles.input}
              />

              <Button
                mode="contained"
                onPress={handleLogin}
                loading={loading}
                disabled={loading}
                style={styles.loginButton}
                contentStyle={styles.buttonContent}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>

              <Button
                mode="text"
                onPress={handleForgotPassword}
                style={styles.forgotButton}
              >
                Forgot Password?
              </Button>
            </View>

            <Divider style={styles.divider} />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <Button
                mode="text"
                onPress={onNavigateToSignup}
              >
                Sign Up
              </Button>
            </View>

            <View style={styles.socialLogin}>
              <Text style={styles.socialText}>Or continue with</Text>
              <View style={styles.socialButtons}>
                <Chip
                  icon="google"
                  onPress={() => Alert.alert('Google Login', 'Google login pressed')}
                  style={styles.socialChip}
                >
                  Google
                </Chip>
                <Chip
                  icon="facebook"
                  onPress={() => Alert.alert('Facebook Login', 'Facebook login pressed')}
                  style={styles.socialChip}
                >
                  Facebook
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login' or 'signup'

  const handleNavigateToSignup = () => {
    setCurrentScreen('signup');
  };

  const handleNavigateToLogin = () => {
    setCurrentScreen('login');
  };

  return (
    <PaperProvider theme={theme}>
      {currentScreen === 'login' ? (
        <LoginScreen onNavigateToSignup={handleNavigateToSignup} />
      ) : (
        <SignupScreen onNavigateToLogin={handleNavigateToLogin} />
      )}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    elevation: 4,
    borderRadius: 12,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    marginTop: 16,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  forgotButton: {
    marginTop: 8,
    alignSelf: 'center',
  },
  divider: {
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#666',
  },
  socialLogin: {
    alignItems: 'center',
  },
  socialText: {
    color: '#666',
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialChip: {
    marginHorizontal: 8,
  },
});

export default App;
