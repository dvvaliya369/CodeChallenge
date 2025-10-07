/**
 * CodeChallenge with TextInput Component Demo
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
// Import our TextInput demo
import TextInputDemo from './components/TextInputDemo';
// Keep original navigator commented for reference
// import Navigator from './src/navigations/Navigator'

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <>
      {/* Show TextInput demo instead of navigator */}
      <TextInputDemo />
      {/* Original navigator: <Navigator /> */}
    </>
  );
};

export default App;
