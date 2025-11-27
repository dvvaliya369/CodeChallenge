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
      );
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView />

      <KeyboardAwareScrollView scrollEnabled={true}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Home');
          }}
        >
          <Text style={Style.cancelText}>Cancel</Text>
        </TouchableOpacity>

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

        <Text style={Style.recipeText}>Recipe Name</Text>
        <PostTextInput
          inputStyle={Style.recipeNameTextInput}
          inputvalue={recipeName}
          placeholdervalue="Enter recipe name"
          onChangeText={text => {
            setRecipeName(text);
          }}
        />

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

        <CookingDurationSlider
          onChange={value => {
            console.log(Math.floor(value));
          }}
        />

        <TouchableOpacity
          style={Style.nextButtonView}
          onPress={() => {}}
        >
          <Text style={Style.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Post;
