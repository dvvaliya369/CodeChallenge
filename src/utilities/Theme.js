/**
 * Simple theme configuration for React Native Paper
 * This file can be imported and used across the app for consistent theming
 */

import { DefaultTheme } from 'react-native-paper';

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',        // Primary brand color
    accent: '#03dac6',         // Secondary brand color  
    background: '#f6f6f6',     // App background
    surface: '#ffffff',        // Card/surface background
    text: '#000000',           // Primary text
    onSurface: '#000000',      // Text on surfaces
    disabled: '#9e9e9e',       // Disabled elements
    placeholder: '#757575',    // Input placeholders
    backdrop: 'rgba(0, 0, 0, 0.5)', // Modal backdrop
    notification: '#ff5722',   // Notification color
  },
  roundness: 8,               // Border radius for components
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Inter-Medium', 
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: '100',
    },
  },
};

export default customTheme;
