/**
 * CodeChallenge
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import ButtonExamples from './ButtonExamples';

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <>
      <ButtonExamples />
    </>
  );
};

export default App;
