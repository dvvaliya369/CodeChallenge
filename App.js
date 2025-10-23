/**
 * CodeChallenge
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import Navigator from './src/navigations/Navigator';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
