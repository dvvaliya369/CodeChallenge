import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../utilities/Colors';

/**
 * Small Text Component
 * A reusable text component with predefined styles for consistent typography
 */
const SmallText = ({
  children,
  color = Colors.themeLightGrayTextColor,
  fontSize = 12,
  fontWeight = 'normal',
  textAlign = 'left',
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  fontFamily = 'Inter-Regular',
  numberOfLines,
  onPress,
  style,
  ...props
}) => {
  const textStyles = [
    styles.baseText,
    {
      color,
      fontSize,
      fontWeight,
      textAlign,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      fontFamily,
    },
    style,
  ];

  return (
    <Text
      style={textStyles}
      numberOfLines={numberOfLines}
      onPress={onPress}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.themeLightGrayTextColor,
  },
});

export default SmallText;
