import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Button';

// Mock scheduler to avoid warnings in React Native tests
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(<Button title="Test Button" onPress={mockOnPress} />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<Button title="Test Button" onPress={mockOnPress} />);
    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders with primary variant by default', () => {
    const { getByTestId } = render(
      <Button title="Test Button" onPress={mockOnPress} testID="test-button" />
    );
    const button = getByTestId('test-button');
    expect(button).toBeTruthy();
  });

  it('does not call onPress when disabled', () => {
    const { getByText } = render(<Button title="Test Button" onPress={mockOnPress} disabled />);
    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'danger'] as const;

    variants.forEach(variant => {
      const { getByTestId } = render(
        <Button
          title="Test Button"
          onPress={mockOnPress}
          variant={variant}
          testID={`test-button-${variant}`}
        />
      );
      expect(getByTestId(`test-button-${variant}`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large'] as const;

    sizes.forEach(size => {
      const { getByTestId } = render(
        <Button
          title="Test Button"
          onPress={mockOnPress}
          size={size}
          testID={`test-button-${size}`}
        />
      );
      expect(getByTestId(`test-button-${size}`)).toBeTruthy();
    });
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    const customTextStyle = { color: 'blue' };

    const { getByTestId } = render(
      <Button
        title="Test Button"
        onPress={mockOnPress}
        style={customStyle}
        textStyle={customTextStyle}
        testID="custom-button"
      />
    );
    expect(getByTestId('custom-button')).toBeTruthy();
  });
});
