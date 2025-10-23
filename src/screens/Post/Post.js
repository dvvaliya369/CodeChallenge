import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../utilities/Images';
import Style from '../../styles/Style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import PostTextInput from '../../components/Post/PostTextInput';
import CookingDurationSlider from '../../components/Post/CookingDurationSlider';

const Post = ({ navigation, route }) => {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [coverPicture, setCoverPicture] = useState('');

  useEffect(() => {
    if (route.params) {
      setCoverPicture(
        route.params.photo
      ); /* Fetchindg data from captured image to display */
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView />

      {/* To move screens up when click on any textinput */}
      <KeyboardAwareScrollView scrollEnabled={true}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Home'); //As we need to clear the state variables once user pressed cancel.
          }}
        >
          <Text style={Style.cancelText}>Cancel</Text>
        </TouchableOpacity>

        {/* Touch event to add cover photo  */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pic');
          }}
          style={[
            Style.coverPhotoButtonView,
            {
              borderWidth:
                coverPicture != '' &&
                coverPicture != null &&
                coverPicture != undefined
                  ? 0
                  : 2,
            },
          ]}
        >
          <View style={{ justifyContent: 'center' }}>
            <Image
              source={
                coverPicture != '' &&
                coverPicture != null &&
                coverPicture != undefined
                  ? { uri: coverPicture }
                  : Images.postBgImage
              }
              style={
                coverPicture != '' &&
                coverPicture != null &&
                coverPicture != undefined
                  ? Style.coverPicture
                  : Style.coverpictureBg
              }
            />
            {coverPicture != '' &&
            coverPicture != null &&
            coverPicture != undefined ? (
              <View></View>
            ) : (
              <>
                <Text style={Style.addCoverPhotoText}>Add Cover Photo</Text>
                <Text style={Style.uptoText}>(upto 12 Mb)</Text>
              </>
            )}
          </View>
        </TouchableOpacity>

        {/* Textinput for recipe name */}
        <Text style={Style.recipeText}>Recipe Name</Text>
        <PostTextInput
          inputStyle={Style.recipeNameTextInput}
          inputvalue={recipeName}
          placeholdervalue="Enter recipe name"
          onChangeText={text => {
            setRecipeName(text);
          }}
        />

        {/* Textinput for recipe description */}
        <Text style={Style.recipeText}>Description</Text>
        <PostTextInput
          inputStyle={Style.recipeDescriptionTextInput}
          inputvalue={description}
          multiline={true}
          placeholdervalue="Tell the community a little about your recipe"
          onChangeText={text => {
            setDescription(text);
          }}
        />

        {/* Slider for Cooking duration */}
        <CookingDurationSlider
          onChange={value => {
            console.log(Math.floor(value));
          }}
        />

        {/* Touch event */}
        <TouchableOpacity
          style={Style.nextButtonView}
          onPress={() => {
            // navigation.navigate('Pic')
          }}
        >
          <Text style={Style.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Post;
