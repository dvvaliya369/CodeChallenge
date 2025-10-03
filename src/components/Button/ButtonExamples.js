import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import Button from '../components/Button';

/**
 * Example screen showcasing the Button component
 */
const ButtonExamples = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = (buttonType) => {
    Alert.alert('Button Pressed', `You pressed the ${buttonType} button!`);
  };

  const handleLoadingPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Loading Complete', 'Loading finished!');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.sectionTitle}>Button Variants</Text>
      
      <Button
        title="Primary Button"
        variant="primary"
        onPress={() => handlePress('primary')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title="Secondary Button"
        variant="secondary"
        onPress={() => handlePress('secondary')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title="Outline Button"
        variant="outline"
        onPress={() => handlePress('outline')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title="Ghost Button"
        variant="ghost"
        onPress={() => handlePress('ghost')}
        style={styles.buttonSpacing}
      />

      <Text style={styles.sectionTitle}>Button Sizes</Text>
      
      <Button
        title="Large Button"
        size="large"
        onPress={() => handlePress('large')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title="Medium Button"
        size="medium"
        onPress={() => handlePress('medium')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title="Small Button"
        size="small"
        onPress={() => handlePress('small')}
        style={styles.buttonSpacing}
      />

      <Text style={styles.sectionTitle}>Button States</Text>
      
      <Button
        title="Disabled Button"
        disabled
        onPress={() => handlePress('disabled')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title={loading ? 'Loading...' : 'Loading Button'}
        loading={loading}
        onPress={handleLoadingPress}
        style={styles.buttonSpacing}
      />

      <Text style={styles.sectionTitle}>Custom Styling</Text>
      
      <Button
        title="Custom Styled Button"
        onPress={() => handlePress('custom')}
        style={[styles.buttonSpacing, styles.customButton]}
        textStyle={styles.customButtonText}
      />

      <Text style={styles.sectionTitle}>Different Combinations</Text>
      
      <Button
        title="Large Outline"
        variant="outline"
        size="large"
        onPress={() => handlePress('large outline')}
        style={styles.buttonSpacing}
      />
      
      <Button
        title="Small Secondary"
        variant="secondary"
        size="small"
        onPress={() => handlePress('small secondary')}
        style={styles.buttonSpacing}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    color: '#333',
  },
  buttonSpacing: {
    marginBottom: 15,
  },
  customButton: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
    borderRadius: 25,
  },
  customButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ButtonExamples;
