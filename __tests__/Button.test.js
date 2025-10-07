import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Common/Button';

describe('Button Component', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={mockOnPress} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={mockOnPress} disabled={true} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('does not call onPress when loading', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button 
        title="Test Button" 
        onPress={mockOnPress} 
        loading={true}
        testID="test-button"
      />
    );
    
    fireEvent.press(getByTestId('test-button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'danger', 'success', 'warning', 'ghost'];
    
    variants.forEach(variant => {
      const { getByText } = render(
        <Button title={`${variant} Button`} variant={variant} />
      );
      expect(getByText(`${variant} Button`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      const { getByText } = render(
        <Button title={`${size} Button`} size={size} />
      );
      expect(getByText(`${size} Button`)).toBeTruthy();
    });
  });

  it('renders loading state correctly', () => {
    const { getByTestId } = render(
      <Button 
        title="Loading Button" 
        loading={true}
        testID="loading-button"
      />
    );
    
    // Should render the button container
    expect(getByTestId('loading-button')).toBeTruthy();
  });

  it('renders custom children instead of title', () => {
    const CustomContent = () => <Text>Custom Content</Text>;
    
    const { getByText, queryByText } = render(
      <Button title="Should not show">
        <CustomContent />
      </Button>
    );
    
    expect(getByText('Custom Content')).toBeTruthy();
    expect(queryByText('Should not show')).toBeNull();
  });

  it('has correct accessibility props', () => {
    const { getByTestId } = render(
      <Button 
        title="Accessible Button"
        testID="accessible-button"
        disabled={true}
      />
    );
    
    const button = getByTestId('accessible-button');
    expect(button.props.accessibilityRole).toBe('button');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });
});
