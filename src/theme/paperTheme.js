import { DefaultTheme } from 'react-native-paper';
import Colors from '../utilities/Colors';

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.themeYellowColor || '#FFC107',
    accent: Colors.themeYellowColor || '#FFC107',
    surface: '#FFFFFF',
    background: '#F5F5F5',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium', 
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
};
