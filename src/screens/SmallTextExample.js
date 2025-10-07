import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SmallText } from '../components/Common';
import Colors from '../utilities/Colors';

/**
 * Example screen showing different uses of the SmallText component
 */
const SmallTextExample = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        {/* Default SmallText */}
        <SmallText>Default small text</SmallText>
        
        {/* Custom color */}
        <SmallText color={Colors.themePoloBlueColor} marginTop={10}>
          Blue colored text
        </SmallText>
        
        {/* Custom font size and weight */}
        <SmallText 
          fontSize={14} 
          fontWeight="700" 
          color={Colors.recipeUserTextColor}
          marginTop={10}
        >
          Bold larger text
        </SmallText>
        
        {/* Centered text */}
        <SmallText 
          textAlign="center" 
          color={Colors.themeYellowColor}
          marginTop={10}
          fontSize={13}
        >
          Centered yellow text
        </SmallText>
        
        {/* Text with margins */}
        <SmallText 
          marginTop={20}
          marginLeft={16}
          marginRight={16}
          color={Colors.themeLightGrayTextColor}
        >
          Text with custom margins on all sides
        </SmallText>
        
        {/* Limited lines */}
        <SmallText 
          numberOfLines={2}
          marginTop={15}
          color={Colors.recipeUserTextColor}
        >
          This is a very long text that will be truncated after two lines. 
          It demonstrates the numberOfLines prop working correctly.
        </SmallText>
        
        {/* Different font families */}
        <SmallText 
          fontFamily="Inter-Medium"
          fontSize={13}
          color={Colors.themePoloBlueColor}
          marginTop={15}
        >
          Medium font family text
        </SmallText>
        
        <SmallText 
          fontFamily="Inter-Bold"
          fontSize={13}
          color={Colors.recipeUserTextColor}
          marginTop={10}
        >
          Bold font family text
        </SmallText>
        
        {/* Custom style override */}
        <SmallText 
          style={styles.customStyle}
          marginTop={15}
        >
          Text with custom style override
        </SmallText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    padding: 20,
  },
  customStyle: {
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    color: Colors.themeYellowColor,
  },
});

export default SmallTextExample;
