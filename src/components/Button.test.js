import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('should render the title correctly', () => {
    let getByText;
    act(() => {
      ({ getByText } = render(<Button title="Test Button" onPress={() => {}} />));
    });
    const buttonText = getByText('Test Button');
    expect(buttonText).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    let getByText;
    act(() => {
      ({ getByText } = render(<Button title="Test Button" onPress={onPressMock} />));
    });
    const button = getByText('Test Button');
    act(() => {
      fireEvent.press(button);
    });
    expect(onPressMock).toHaveBeenCalled();
  });
});
