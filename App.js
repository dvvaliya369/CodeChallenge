/**
 * CodeChallenge
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import Navigator from './src/navigations/Navigator';

// Only suppress logs in development; in production, all warnings remain
// visible so critical security/runtime warnings are never silently dropped.
if (__DEV__) {
  LogBox.ignoreAllLogs();
}

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
