import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * RedBox Component
 * A simple red box component that can be used in the home screen
 */
const RedBox = ({ width = 200, height = 100, children }) => {
  return (
    <View style={[styles.redBox, { width, height }]}>
      {children && (
        <Text style={styles.text}>{children}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  redBox: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RedBox;
