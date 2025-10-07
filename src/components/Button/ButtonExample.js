// Example usage of the Button component

import React from 'react';
import { View, Alert } from 'react-native';
import Button from '../components/Button';

const ButtonExample = () => {
  const handlePrimaryPress = () => {
    Alert.alert('Primary Button Pressed');
  };

  const handleSecondaryPress = () => {
    Alert.alert('Secondary Button Pressed');
  };

  const handleOutlinePress = () => {
    Alert.alert('Outline Button Pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* Primary Button */}
      <Button
        title="Primary Button"
        onPress={handlePrimaryPress}
        variant="primary"
      />
      
      {/* Secondary Button */}
      <Button
        title="Secondary Button"
        onPress={handleSecondaryPress}
        variant="secondary"
      />
      
      {/* Outline Button */}
      <Button
        title="Outline Button"
        onPress={handleOutlinePress}
        variant="outline"
      />
      
      {/* Disabled Button */}
      <Button
        title="Disabled Button"
        onPress={() => {}}
        variant="primary"
        disabled={true}
      />
      
      {/* Custom Styled Button */}
      <Button
        title="Custom Button"
        onPress={() => Alert.alert('Custom Button')}
        variant="primary"
        style={{ marginHorizontal: 50, backgroundColor: '#FF6464' }}
        textStyle={{ color: 'white' }}
      />
    </View>
  );
};

export default ButtonExample;
