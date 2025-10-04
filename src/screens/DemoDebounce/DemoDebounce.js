import React, { useState } from 'react'
import { View, Text } from 'react-native'
import PostTextInput from '../../components/Post/PostTextInput'
import Style from '../../styles/Style'

const DemoDebounceScreen = () => {
    const [regularText, setRegularText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    const [textDisplay, setTextDisplay] = useState('');

    const handleRegularTextChange = (text) => {
        setRegularText(text);
    };

    const handleDebouncedTextChange = (text) => {
        setDebouncedText(text);
        setTextDisplay(text); // This will be called with delay
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
                Debounce Demo
            </Text>
            
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Regular Text Input (No Debounce):
            </Text>
            <PostTextInput
                onChangeText={handleRegularTextChange}
                inputvalue={regularText}
                placeholdervalue="Type here (immediate response)..."
                inputStyle={Style.postTextInputView}
                enableDebounce={false}
            />
            <Text style={{ marginTop: 10, color: 'blue' }}>
                Current value: {regularText}
            </Text>
            
            <Text style={{ fontSize: 18, marginTop: 30, marginBottom: 10 }}>
                Debounced Text Input (300ms delay):
            </Text>
            <PostTextInput
                onChangeText={handleDebouncedTextChange}
                inputvalue={debouncedText}
                placeholdervalue="Type here (debounced response)..."
                inputStyle={Style.postTextInputView}
                enableDebounce={true}
                debounceDelay={300}
            />
            <Text style={{ marginTop: 10, color: 'green' }}>
                Debounced value: {textDisplay}
            </Text>
            
            <Text style={{ marginTop: 30, fontSize: 14, color: 'gray' }}>
                Notice how the debounced input only updates the displayed value after you stop typing for 300ms.
            </Text>
        </View>
    )
}

export default DemoDebounceScreen;
