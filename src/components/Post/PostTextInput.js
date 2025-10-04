import React from 'react'
import { TextInput, View } from 'react-native'
import Colors from '../../utilities/Colors'
import { useDebounce } from '../../utilities/useDebounce'

// Common Textinput for recipe name & description with debounce support
const PostTextInput = ({ 
    onChangeText, 
    inputvalue, 
    placeholdervalue, 
    multiline, 
    inputStyle, 
    debounceDelay = 300,
    enableDebounce = false 
}) => {
    const { debouncedCallback } = useDebounce(onChangeText, debounceDelay);

    const handleTextChange = enableDebounce ? debouncedCallback : onChangeText;

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
                onChangeText={handleTextChange}
            />
        </View>
    )
}

export default PostTextInput;