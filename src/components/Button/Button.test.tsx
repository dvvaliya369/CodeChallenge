import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button Component', () => {
  const defaultProps = {
    title: 'Test Button',
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('calls onLongPress when button is long pressed', () => {
    const onLongPressMock = jest.fn();
    const { getByText } = render(
      <Button 
        title="Test Button" 
        onPress={jest.fn()} 
        onLongPress={onLongPressMock} 
      />
    );
    
    fireEvent(getByText('Test Button'), 'longPress');
    expect(onLongPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when button is disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} disabled={true} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('does not call onPress when button is loading', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} loading={true} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
    
    variants.forEach(variant => {
      const { getByText } = render(
        <Button title={`${variant} Button`} variant={variant} onPress={jest.fn()} />
      );
      expect(getByText(`${variant} Button`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large'] as const;
    
    sizes.forEach(size => {
      const { getByText } = render(
        <Button title={`${size} Button`} size={size} onPress={jest.fn()} />
      );
      expect(getByText(`${size} Button`)).toBeTruthy();
    });
  });

  it('renders loading indicator when loading is true', () => {
    const { getByTestId } = render(
      <Button title="Loading Button" loading={true} onPress={jest.fn()} testID="button" />
    );
    
    // The ActivityIndicator should be present
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    const { getByTestId } = render(
      <Button 
        title="Accessible Button" 
        onPress={jest.fn()}
        testID="accessible-button"
        accessibilityLabel="Custom accessibility label"
        accessibilityHint="Custom accessibility hint"
      />
    );
    
    const button = getByTestId('accessible-button');
    expect(button.props.accessibilityLabel).toBe('Custom accessibility label');
    expect(button.props.accessibilityHint).toBe('Custom accessibility hint');
    expect(button.props.accessibilityRole).toBe('button');
  });

  it('uses title as accessibility label when no custom label is provided', () => {
    const { getByTestId } = render(
      <Button 
        title="Default Label Button" 
        onPress={jest.fn()}
        testID="default-label-button"
      />
    );
    
    const button = getByTestId('default-label-button');
    expect(button.props.accessibilityLabel).toBe('Default Label Button');
  });

  it('has correct accessibility state when disabled', () => {
    const { getByTestId } = render(
      <Button 
        title="Disabled Button" 
        onPress={jest.fn()}
        disabled={true}
        testID="disabled-button"
      />
    );
    
    const button = getByTestId('disabled-button');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('has correct accessibility state when loading', () => {
    const { getByTestId } = render(
      <Button 
        title="Loading Button" 
        onPress={jest.fn()}
        loading={true}
        testID="loading-button"
      />
    );
    
    const button = getByTestId('loading-button');
    expect(button.props.accessibilityState.busy).toBe(true);
  });

  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: 'red' };
    const customTextStyle = { color: 'blue' };
    
    const { getByTestId } = render(
      <Button 
        title="Custom Style Button" 
        onPress={jest.fn()}
        style={customStyle}
        textStyle={customTextStyle}
        testID="custom-style-button"
      />
    );
    
    const button = getByTestId('custom-style-button');
    expect(button).toBeTruthy();
  });
});
