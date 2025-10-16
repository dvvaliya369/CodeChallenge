import React from 'react';
import { TextInput, View } from 'react-native';
import Colors from '../../utilities/Colors';

// Common Textinput for recipe name & description
const PostTextInput = ({
  onChangeText,
  inputvalue,
  placeholdervalue,
  multiline,
  inputStyle,
}) => {
  return (
    <View style={inputStyle}>
      <TextInput
        style={{ flex: 1 }}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholdervalue}
        multiline={multiline}
        placeholderTextColor={Colors.themeLightGrayTextColor}
        value={inputvalue}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default PostTextInput;
