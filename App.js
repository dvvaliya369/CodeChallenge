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
import customTheme from './src/utilities/Theme';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <PaperProvider theme={customTheme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
