import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Button from './Button';

const ButtonExample: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    console.log('Button pressed!');
    setCounter(counter + 1);
  };

  const handleLoadingPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Loading completed!');
    }, 2000);
  };

  const handleLongPress = () => {
    console.log('Button long pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Button Component Examples</Text>
        
        {/* Basic Usage */}
        <Text style={styles.sectionTitle}>Basic Usage</Text>
        <View style={styles.section}>
          <Button
            title="Default Button"
            onPress={handlePress}
          />
        </View>

        {/* Button Variants */}
        <Text style={styles.sectionTitle}>Button Variants</Text>
        <View style={styles.section}>
          <Button
            title="Primary"
            variant="primary"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Secondary"
            variant="secondary"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Outline"
            variant="outline"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Ghost"
            variant="ghost"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Danger"
            variant="danger"
            onPress={handlePress}
          />
        </View>

        {/* Button Sizes */}
        <Text style={styles.sectionTitle}>Button Sizes</Text>
        <View style={styles.section}>
          <Button
            title="Small"
            size="small"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Medium"
            size="medium"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Large"
            size="large"
            onPress={handlePress}
          />
        </View>

        {/* Icons */}
        <Text style={styles.sectionTitle}>With Icons</Text>
        <View style={styles.section}>
          <Button
            title="Save"
            icon="save"
            iconPosition="left"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Delete"
            icon="delete"
            iconPosition="left"
            variant="danger"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Next"
            icon="arrow-forward"
            iconPosition="right"
            variant="outline"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Settings"
            icon="settings"
            iconPosition="left"
            variant="ghost"
            onPress={handlePress}
          />
        </View>

        {/* States */}
        <Text style={styles.sectionTitle}>Button States</Text>
        <View style={styles.section}>
          <Button
            title={loading ? 'Loading...' : 'Start Loading'}
            loading={loading}
            onPress={handleLoadingPress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Disabled Button"
            disabled={true}
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Disabled with Icon"
            icon="block"
            disabled={true}
            onPress={handlePress}
          />
        </View>

        {/* Full Width */}
        <Text style={styles.sectionTitle}>Full Width</Text>
        <View style={styles.section}>
          <Button
            title="Full Width Primary"
            variant="primary"
            fullWidth={true}
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Full Width Outline"
            variant="outline"
            fullWidth={true}
            onPress={handlePress}
          />
        </View>

        {/* Custom Styling */}
        <Text style={styles.sectionTitle}>Custom Styling</Text>
        <View style={styles.section}>
          <Button
            title="Custom Colors"
            style={{
              backgroundColor: '#FF6B6B',
              borderRadius: 20,
              ...styles.buttonSpacing,
            }}
            textStyle={{
              fontSize: 18,
              fontWeight: 'bold',
            }}
            onPress={handlePress}
          />
          <Button
            title="Custom Border"
            variant="outline"
            style={{
              borderColor: '#4ECDC4',
              borderWidth: 2,
              borderRadius: 15,
            }}
            textStyle={{
              color: '#4ECDC4',
              fontWeight: '700',
            }}
            onPress={handlePress}
          />
        </View>

        {/* Interactive Example */}
        <Text style={styles.sectionTitle}>Interactive Example</Text>
        <View style={styles.section}>
          <Text style={styles.counterText}>Button pressed {counter} times</Text>
          <Button
            title="Increment Counter"
            icon="add"
            onPress={handlePress}
            onLongPress={handleLongPress}
            accessibilityHint="Tap to increment counter, long press for additional action"
            style={styles.buttonSpacing}
          />
          <Button
            title="Reset Counter"
            variant="outline"
            onPress={() => setCounter(0)}
          />
        </View>

        {/* Different Sizes with Icons */}
        <Text style={styles.sectionTitle}>Sizes with Icons</Text>
        <View style={styles.section}>
          <Button
            title="Small with Icon"
            size="small"
            icon="star"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Medium with Icon"
            size="medium"
            icon="favorite"
            onPress={handlePress}
            style={styles.buttonSpacing}
          />
          <Button
            title="Large with Icon"
            size="large"
            icon="thumb-up"
            onPress={handlePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSpacing: {
    marginBottom: 10,
  },
  counterText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
});

export default ButtonExample;
