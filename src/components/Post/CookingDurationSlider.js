import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';
import Slider from 'react-native-slider';

//Custom component for slider - Cooking Duration
const CookingDurationSlider = ({ onChange }) => {
  return (
    <>
      <Text style={Style.cookingText}> Cooking Duration (in minutes)</Text>
      <View style={Style.cookingSliderView}>
        <Text style={Style.cookingSliderLeftText}>{'<10'}</Text>
        <Text style={Style.cookingSliderLeftText}>{'30'}</Text>
        <Text style={Style.cookingSliderRightText}>{'>60'}</Text>
      </View>

      {/* Slider component for Cooking Duration */}
      <Slider
        minimumTrackTintColor={Colors.themeYellowColor}
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor={Colors.themeYellowColor}
        style={Style.slider}
        minimumValue={10}
        maximumValue={60}
        value={30}
        onValueChange={onChange} /* Slider Drag or change event */
      />
    </>
  );
};

export default CookingDurationSlider;
