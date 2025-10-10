import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import { Text, Card, Divider, Switch } from 'react-native-paper';
import CustomButton from './CustomButton';

/**
 * ButtonExampleScreen - Demonstrates various CustomButton configurations
 */
const ButtonExampleScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleBasicPress = () => {
    Alert.alert('Button Pressed', 'Basic button was pressed!');
  };

  const handleLoadingPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Action Complete', 'Loading action finished!');
    }, 2000);
  };

  const handleLongPress = () => {
    Alert.alert('Long Press', 'Button was long pressed!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text variant="headlineMedium" style={styles.title}>
        Custom Button Examples
      </Text>

      {/* Basic Buttons */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Basic Buttons
          </Text>
          
          <CustomButton
            title="Contained Button"
            onPress={handleBasicPress}
            testID="contained-button"
          />
          
          <CustomButton
            title="Outlined Button"
            mode="outlined"
            onPress={handleBasicPress}
            testID="outlined-button"
          />
          
          <CustomButton
            title="Text Button"
            mode="text"
            onPress={handleBasicPress}
            testID="text-button"
          />
        </Card.Content>
      </Card>

      {/* Button Sizes */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Button Sizes
          </Text>
          
          <CustomButton
            title="Small Button"
            size="small"
            onPress={handleBasicPress}
            testID="small-button"
          />
          
          <CustomButton
            title="Medium Button"
            size="medium"
            onPress={handleBasicPress}
            testID="medium-button"
          />
          
          <CustomButton
            title="Large Button"
            size="large"
            onPress={handleBasicPress}
            testID="large-button"
          />
        </Card.Content>
      </Card>

      {/* Button Variants */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Button Variants
          </Text>
          
          <CustomButton
            title="Primary"
            variant="primary"
            onPress={handleBasicPress}
          />
          
          <CustomButton
            title="Secondary"
            variant="secondary"
            onPress={handleBasicPress}
          />
          
          <CustomButton
            title="Success"
            variant="success"
            onPress={handleBasicPress}
          />
          
          <CustomButton
            title="Danger"
            variant="danger"
            onPress={handleBasicPress}
          />
          
          <CustomButton
            title="Warning"
            variant="warning"
            onPress={handleBasicPress}
          />
          
          <CustomButton
            title="Info"
            variant="info"
            onPress={handleBasicPress}
          />
        </Card.Content>
      </Card>

      {/* Button States */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Button States
          </Text>
          
          <View style={styles.switchContainer}>
            <Text>Toggle Loading State:</Text>
            <Switch
              value={isLoading}
              onValueChange={setIsLoading}
            />
          </View>
          
          <View style={styles.switchContainer}>
            <Text>Toggle Disabled State:</Text>
            <Switch
              value={isDisabled}
              onValueChange={setIsDisabled}
            />
          </View>
          
          <CustomButton
            title="Loading Button"
            loading={isLoading}
            onPress={handleLoadingPress}
            testID="loading-button"
          />
          
          <CustomButton
            title="Disabled Button"
            disabled={isDisabled}
            onPress={handleBasicPress}
            testID="disabled-button"
          />
        </Card.Content>
      </Card>

      {/* Button with Icons */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Buttons with Icons
          </Text>
          
          <CustomButton
            title="Left Icon"
            icon="heart"
            iconPosition="left"
            onPress={handleBasicPress}
            testID="left-icon-button"
          />
          
          <CustomButton
            title="Right Icon"
            icon="arrow-right"
            iconPosition="right"
            onPress={handleBasicPress}
            testID="right-icon-button"
          />
        </Card.Content>
      </Card>

      {/* Full Width Button */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Full Width Button
          </Text>
          
          <CustomButton
            title="Full Width Button"
            fullWidth
            onPress={handleBasicPress}
            testID="full-width-button"
          />
        </Card.Content>
      </Card>

      {/* Interactive Features */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Interactive Features
          </Text>
          
          <CustomButton
            title="Press & Hold Me"
            onPress={handleBasicPress}
            onLongPress={handleLongPress}
            testID="interactive-button"
          />
        </Card.Content>
      </Card>

      {/* Custom Styling */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Custom Styling
          </Text>
          
          <CustomButton
            title="Custom Styled"
            backgroundColor="#ff6b6b"
            textColor="#ffffff"
            elevation={8}
            onPress={handleBasicPress}
            style={styles.customButton}
            testID="custom-styled-button"
          />
        </Card.Content>
      </Card>
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
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  cardTitle: {
    marginBottom: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  customButton: {
    borderRadius: 25,
  },
});

export default ButtonExampleScreen;
