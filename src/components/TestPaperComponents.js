import React from 'react';
import { View } from 'react-native';
import { Button, Text, Card, Surface } from 'react-native-paper';

const TestPaperComponents = () => {
  return (
    <Surface style={{ flex: 1, padding: 16 }}>
      <Text variant="headlineLarge" style={{ marginBottom: 16 }}>
        React Native Paper Test
      </Text>
      
      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Paper Card Component</Text>
          <Text variant="bodyMedium">
            This card demonstrates that React Native Paper is working correctly.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log('Paper Button Pressed')}>
            Test Button
          </Button>
        </Card.Actions>
      </Card>
      
      <Button 
        mode="outlined" 
        icon="home"
        onPress={() => console.log('Icon Button Pressed')}
        style={{ marginBottom: 8 }}
      >
        Button with Icon
      </Button>
      
      <Button mode="text" onPress={() => console.log('Text Button Pressed')}>
        Text Button
      </Button>
    </Surface>
  );
};

export default TestPaperComponents;
