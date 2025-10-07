import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import TextInputExamples from './src/examples/TextInputExamples';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <TextInputExamples />
      </SafeAreaView>
    </>
  );
};

export default App;
