import React from 'react';
import { Text as RNText } from 'react-native';
import Style from '../../styles/Style';
import Colors from '../../utilities/Colors';

const Text = ({
  children,
  style,
  color,
  size,
  weight,
  align,
  numberOfLines,
  ellipsizeMode,
  onPress,
  ...props
}) => {
  const textStyle = [
    Style.defaultText,
    color && { color },
    size && { fontSize: size },
    weight && { fontWeight: weight },
    align && { textAlign: align },
    style,
  ];

  return (
    <RNText
      style={textStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
      {...props}
    >
      {children}
    </RNText>
  );
};

// Default props
Text.defaultProps = {
  color: Colors.defaultTextColor || '#000',
  size: 14,
  weight: 'normal',
  align: 'left',
};

export default Text;
