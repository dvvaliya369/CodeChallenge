/**
 * @format
 */

import 'react-native';
import React from 'react';

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(component => component),
    Directions: {},
  };
});

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock react-native-slider
jest.mock('react-native-slider', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return View;
});

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

// Mock react-native-global-font
jest.mock('react-native-global-font', () => ({
  applyGlobalFont: jest.fn(),
}));

// Mock react-native-camera
jest.mock('react-native-camera', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    RNCamera: {
      Constants: {
        FlashMode: {},
        Type: {},
      },
    },
    default: View,
  };
});

// Mock react-native-paper
jest.mock('react-native-paper', () => ({
  Button: 'Button',
  Card: 'Card',
  Title: 'Title',
  Paragraph: 'Paragraph',
}));

// Mock react-native-keyboard-aware-scrollview
jest.mock('react-native-keyboard-aware-scrollview', () => {
  const ScrollView = require('react-native').ScrollView;
  return { KeyboardAwareScrollView: ScrollView };
});

import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
