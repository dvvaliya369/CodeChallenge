/**
 * CodeChallenge
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import Navigator from './src/navigations/Navigator'

// Custom theme - you can customize colors here
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // Customize theme colors if needed
    // primary: '#6200EE',
    // primaryContainer: '#BB86FC',
  },
};

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
