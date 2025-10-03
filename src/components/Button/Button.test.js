import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import Button from './Button';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  test('renders correctly with title', () => {
    const tree = renderer.create(
      <Button title="Test Button" onPress={mockOnPress} />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly when disabled', () => {
    const tree = renderer.create(
      <Button title="Test Button" onPress={mockOnPress} disabled />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly when loading', () => {
    const tree = renderer.create(
      <Button title="Test Button" onPress={mockOnPress} loading />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with different variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'];
    
    variants.forEach(variant => {
      const tree = renderer.create(
        <Button title="Test Button" variant={variant} onPress={mockOnPress} />
      ).toJSON();
      
      expect(tree).toMatchSnapshot();
    });
  });

  test('renders correctly with different sizes', () => {
    const sizes = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      const tree = renderer.create(
        <Button title="Test Button" size={size} onPress={mockOnPress} />
      ).toJSON();
      
      expect(tree).toMatchSnapshot();
    });
  });

  test('renders correctly with custom styles', () => {
    const tree = renderer.create(
      <Button 
        title="Test Button" 
        onPress={mockOnPress}
        style={{ backgroundColor: 'red' }}
        textStyle={{ color: 'white' }}
      />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly without title', () => {
    const tree = renderer.create(
      <Button onPress={mockOnPress} />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  // Basic functional test using react-test-renderer
  test('calls onPress when pressed (simulation)', () => {
    const component = renderer.create(
      <Button title="Test Button" onPress={mockOnPress} />
    );
    
    const instance = component.root;
    const touchable = instance.findByType(TouchableOpacity);
    
    // Simulate press
    touchable.props.onPress();
    
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress when disabled (simulation)', () => {
    const component = renderer.create(
      <Button title="Test Button" onPress={mockOnPress} disabled />
    );
    
    const instance = component.root;
    const touchable = instance.findByType(TouchableOpacity);
    
    // The TouchableOpacity should be disabled
    expect(touchable.props.disabled).toBe(true);
    
    // Even if we simulate press, the disabled prop should prevent the onPress
    if (!touchable.props.disabled) {
      touchable.props.onPress();
    }
    
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
