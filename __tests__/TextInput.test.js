import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import TextInput from '../src/components/common/TextInput'

describe('TextInput Component', () => {
    const mockOnChangeText = jest.fn()
    
    beforeEach(() => {
        jest.clearAllMocks()
    })
    
    it('renders correctly with basic props', () => {
        const { getByTestId, getByText } = render(
            <TextInput
                testID="text-input"
                label="Test Label"
                placeholder="Test Placeholder"
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        expect(getByTestId('text-input')).toBeTruthy()
        expect(getByText('Test Label')).toBeTruthy()
    })
    
    it('calls onChangeText when text changes', () => {
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        fireEvent.changeText(getByTestId('text-input'), 'new text')
        expect(mockOnChangeText).toHaveBeenCalledWith('new text')
    })
    
    it('displays error message when provided', () => {
        const { getByText } = render(
            <TextInput
                label="Test Label"
                errorMessage="This is an error"
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        expect(getByText('This is an error')).toBeTruthy()
    })
    
    it('displays required asterisk when required is true', () => {
        const { getByText } = render(
            <TextInput
                label="Test Label"
                required={true}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        expect(getByText('*')).toBeTruthy()
    })
    
    it('displays help text when provided and no error', () => {
        const { getByText } = render(
            <TextInput
                label="Test Label"
                helpText="This is help text"
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        expect(getByText('This is help text')).toBeTruthy()
    })
    
    it('hides help text when error message is provided', () => {
        const { queryByText, getByText } = render(
            <TextInput
                label="Test Label"
                helpText="This is help text"
                errorMessage="This is an error"
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        expect(getByText('This is an error')).toBeTruthy()
        expect(queryByText('This is help text')).toBeNull()
    })
    
    it('applies multiline styles when multiline is true', () => {
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                multiline={true}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        const input = getByTestId('text-input')
        expect(input.props.multiline).toBe(true)
    })
    
    it('applies secure text entry when secureTextEntry is true', () => {
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                secureTextEntry={true}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        const input = getByTestId('text-input')
        expect(input.props.secureTextEntry).toBe(true)
    })
    
    it('sets editable to false when editable prop is false', () => {
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                editable={false}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        const input = getByTestId('text-input')
        expect(input.props.editable).toBe(false)
    })
    
    it('applies custom styles correctly', () => {
        const customStyle = { backgroundColor: 'red' }
        
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                inputStyle={customStyle}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        const input = getByTestId('text-input')
        expect(input.props.style).toContainEqual(
            expect.objectContaining(customStyle)
        )
    })
    
    it('calls onFocus when input is focused', () => {
        const mockOnFocus = jest.fn()
        
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                onFocus={mockOnFocus}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        fireEvent(getByTestId('text-input'), 'focus')
        expect(mockOnFocus).toHaveBeenCalled()
    })
    
    it('calls onBlur when input loses focus', () => {
        const mockOnBlur = jest.fn()
        
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                onBlur={mockOnBlur}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        fireEvent(getByTestId('text-input'), 'blur')
        expect(mockOnBlur).toHaveBeenCalled()
    })
    
    it('calls onSubmitEditing when submit is pressed', () => {
        const mockOnSubmitEditing = jest.fn()
        
        const { getByTestId } = render(
            <TextInput
                testID="text-input"
                onSubmitEditing={mockOnSubmitEditing}
                value=""
                onChangeText={mockOnChangeText}
            />
        )
        
        fireEvent(getByTestId('text-input'), 'submitEditing')
        expect(mockOnSubmitEditing).toHaveBeenCalled()
    })
})
