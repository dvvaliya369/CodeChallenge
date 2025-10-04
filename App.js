/**
 * CodeChallenge
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/navigations/Navigator';
import { theme } from './src/config/theme';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
