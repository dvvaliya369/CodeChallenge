import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from './src/components';

const App: React.FC = () => {
  const showAlert = (message: string) => {
    Alert.alert('Button Pressed', message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Primary Button"
          onPress={() => showAlert('Primary button pressed!')}
          variant="primary"
          size="medium"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Secondary Button"
          onPress={() => showAlert('Secondary button pressed!')}
          variant="secondary"
          size="medium"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Outline Button"
          onPress={() => showAlert('Outline button pressed!')}
          variant="outline"
          size="medium"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Danger Button"
          onPress={() => showAlert('Danger button pressed!')}
          variant="danger"
          size="medium"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Small Button"
          onPress={() => showAlert('Small button pressed!')}
          variant="primary"
          size="small"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Large Button"
          onPress={() => showAlert('Large button pressed!')}
          variant="primary"
          size="large"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Disabled Button"
          onPress={() => showAlert('This should not appear')}
          variant="primary"
          size="medium"
          disabled
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Custom Style Button"
          onPress={() => showAlert('Custom style button pressed!')}
          variant="primary"
          size="medium"
          style={styles.customButton}
          textStyle={styles.customButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 15,
  },
  customButton: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
    borderRadius: 20,
  },
  customButtonText: {
    fontSize: 17,
    fontWeight: '700',
  },
});

export default App;
