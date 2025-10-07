import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import { Button } from '../components/Common';

const ButtonExamples = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = (buttonType) => {
    Alert.alert('Button Pressed', `You pressed the ${buttonType} button!`);
  };

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Variants</Text>
        
        <Button
          title="Primary Button"
          variant="primary"
          onPress={() => handlePress('primary')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Secondary Button"
          variant="secondary"
          onPress={() => handlePress('secondary')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Outline Button"
          variant="outline"
          onPress={() => handlePress('outline')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Danger Button"
          variant="danger"
          onPress={() => handlePress('danger')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Success Button"
          variant="success"
          onPress={() => handlePress('success')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Warning Button"
          variant="warning"
          onPress={() => handlePress('warning')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Ghost Button"
          variant="ghost"
          onPress={() => handlePress('ghost')}
          style={styles.buttonMargin}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Sizes</Text>
        
        <Button
          title="Small Button"
          size="small"
          onPress={() => handlePress('small')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Medium Button"
          size="medium"
          onPress={() => handlePress('medium')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Large Button"
          size="large"
          onPress={() => handlePress('large')}
          style={styles.buttonMargin}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button States</Text>
        
        <Button
          title="Disabled Button"
          disabled={true}
          onPress={() => handlePress('disabled')}
          style={styles.buttonMargin}
        />
        
        <Button
          title="Loading Button"
          loading={loading}
          onPress={handleLoadingTest}
          style={styles.buttonMargin}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Styles</Text>
        
        <Button
          title="Custom Styled"
          variant="primary"
          onPress={() => handlePress('custom')}
          style={[styles.buttonMargin, styles.customButton]}
          textStyle={styles.customText}
        />
        
        <Button
          variant="outline"
          onPress={() => handlePress('icon')}
          style={styles.buttonMargin}
        >
          <View style={styles.iconButtonContent}>
            <Text style={styles.iconText}>🚀</Text>
            <Text style={styles.iconButtonText}>Button with Icon</Text>
          </View>
        </Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Size Combinations</Text>
        
        <View style={styles.row}>
          <Button
            title="Small Primary"
            variant="primary"
            size="small"
            onPress={() => handlePress('small-primary')}
            style={styles.rowButton}
          />
          <Button
            title="Small Outline"
            variant="outline"
            size="small"
            onPress={() => handlePress('small-outline')}
            style={styles.rowButton}
          />
        </View>
        
        <View style={styles.row}>
          <Button
            title="Med Danger"
            variant="danger"
            size="medium"
            onPress={() => handlePress('med-danger')}
            style={styles.rowButton}
          />
          <Button
            title="Med Success"
            variant="success"
            size="medium"
            onPress={() => handlePress('med-success')}
            style={styles.rowButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },
  buttonMargin: {
    marginBottom: 10,
  },
  customButton: {
    borderRadius: 20,
    paddingHorizontal: 40,
  },
  customText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    marginRight: 8,
  },
  iconButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ButtonExamples;
