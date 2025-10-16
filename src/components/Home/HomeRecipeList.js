import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Style from '../../styles/Style';
import Constants from '../../utilities/Constants';
import Images from '../../utilities/Images';

const HomeRecipeList = () => {
  /* UI Component for Receipe list*/
  const ItemView = ({ item, index }) => {
    return (
      <>
        <View style={Style.homeRecipeListView}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={item.userImg} style={Style.homeRecipeUserImg} />
            <Text style={Style.homeRecipeUserName}>{item.userName}</Text>
          </View>
          <Image source={item.image} style={{ marginTop: 16 }} />
          <Image source={Images.homeTransparentImage} style={Style.homeTranparentImage} />
          <Image source={Images.homeLikeIcon} style={Style.homeLikeIcon} />
          <Text style={Style.homeRecipeName}>{item.recipeName}</Text>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={Style.homeRecipeTypeText}>{item.type}</Text>
            <View style={Style.homeRecipeTypeDotView}></View>
            <Text style={Style.homeRecipeFoodTime}>{item.time}</Text>
          </View>
        </View>
      </>
    );
  };

  /* Flatlist Component for Receipe list*/
  return (
    <FlatList
      style={Style.categoryFlatList}
      // columnWrapperStyle={{justifyContent:'space-between'}}
      contentContainerStyle={{ marginHorizontal: 0 }}
      data={Constants.recipeArray}
      renderItem={ItemView}
      numColumns={2} /* To shows two items next to each other in Receipe list*/
      showsVerticalScrollIndicator={false}
      keyExtractor={index => index.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
};

export default HomeRecipeList;
