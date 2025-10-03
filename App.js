/**
 * CodeChallenge
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { paperTheme } from './src/theme/paperTheme';
import Navigator from './src/navigations/Navigator'

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <PaperProvider theme={paperTheme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
