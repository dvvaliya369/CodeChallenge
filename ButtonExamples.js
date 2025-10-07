import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import Button from './src/components/Button';

const ButtonExamples = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = (buttonType) => {
    Alert.alert('Button Pressed', `You pressed the ${buttonType} button!`);
  };

  const handleLoadingPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Loading completed!');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Button Component Examples</Text>
        
        {/* Variants Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variants</Text>
          
          <Button
            title="Primary Button"
            variant="primary"
            onPress={() => handlePress('Primary')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Secondary Button"
            variant="secondary"
            onPress={() => handlePress('Secondary')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Outline Button"
            variant="outline"
            onPress={() => handlePress('Outline')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Ghost Button"
            variant="ghost"
            onPress={() => handlePress('Ghost')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Danger Button"
            variant="danger"
            onPress={() => handlePress('Danger')}
            style={styles.buttonSpacing}
          />
        </View>

        {/* Sizes Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sizes</Text>
          
          <Button
            title="Small Button"
            size="small"
            onPress={() => handlePress('Small')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Medium Button"
            size="medium"
            onPress={() => handlePress('Medium')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Large Button"
            size="large"
            onPress={() => handlePress('Large')}
            style={styles.buttonSpacing}
          />
        </View>

        {/* Icons Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>With Icons</Text>
          
          <Button
            title="Save Document"
            variant="primary"
            iconName="save"
            iconPosition="left"
            onPress={() => handlePress('Save')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Download File"
            variant="outline"
            iconName="download"
            iconPosition="right"
            onPress={() => handlePress('Download')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Delete Item"
            variant="danger"
            iconName="delete"
            onPress={() => handlePress('Delete')}
            style={styles.buttonSpacing}
          />
          
          {/* Icon only button */}
          <Button
            variant="ghost"
            iconName="favorite"
            onPress={() => handlePress('Favorite')}
            style={styles.buttonSpacing}
            accessibilityLabel="Add to favorites"
          />
        </View>

        {/* States Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>States</Text>
          
          <Button
            title="Disabled Button"
            variant="primary"
            disabled={true}
            onPress={() => handlePress('Disabled')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title={isLoading ? "Loading..." : "Start Loading"}
            variant="primary"
            loading={isLoading}
            onPress={handleLoadingPress}
            style={styles.buttonSpacing}
          />
        </View>

        {/* Full Width Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Full Width</Text>
          
          <Button
            title="Full Width Button"
            variant="primary"
            size="large"
            fullWidth={true}
            onPress={() => handlePress('Full Width')}
            style={styles.buttonSpacing}
          />
          
          <Button
            title="Sign Up Now"
            variant="secondary"
            fullWidth={true}
            iconName="person_add"
            onPress={() => handlePress('Sign Up')}
            style={styles.buttonSpacing}
          />
        </View>

        {/* Custom Styling Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Styling</Text>
          
          <Button
            title="Custom Colors"
            variant="primary"
            style={[
              styles.buttonSpacing,
              {
                backgroundColor: '#FF6B6B',
                borderColor: '#FF6B6B',
                borderRadius: 25,
              }
            ]}
            textStyle={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
            onPress={() => handlePress('Custom')}
          />
          
          <Button
            title="Rounded Button"
            variant="outline"
            style={[
              styles.buttonSpacing,
              {
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#4ECDC4',
              }
            ]}
            textStyle={{
              color: '#4ECDC4',
              fontWeight: '700',
            }}
            onPress={() => handlePress('Rounded')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333333',
  },
  
  section: {
    marginBottom: 30,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333333',
  },
  
  buttonSpacing: {
    marginBottom: 12,
  },
});

export default ButtonExamples;
