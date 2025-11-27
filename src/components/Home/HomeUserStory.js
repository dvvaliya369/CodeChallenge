import React from 'react';
import { View, FlatList, SafeAreaView, Image } from 'react-native';
import Style from '../../styles/Style';
import Constants from '../../utilities/Constants';
import Images from '../../utilities/Images';

const HomeUserStory = () => {
  const ItemView = ({ item, index }) => {
    return (
      <View>
        <Image source={item.value} style={Style.homeUserStory} />
        {index === 0 ? (
          <View style={Style.homeUserStoryAdd}>
            <Image
              source={Images.homePlusIcon}
              style={Style.homeUserStoryAddImage}
            />
          </View>
        ) : (
          <View></View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        style={Style.categoryFlatList}
        data={Constants.homeStoryuserImageArray}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={ItemView}
        keyExtractor={index => index.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      />
    </SafeAreaView>
  );
};

export default HomeUserStory;
