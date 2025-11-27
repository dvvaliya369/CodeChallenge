import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Style from '../../styles/Style';
import Constants from '../../utilities/Constants';
import Colors from '../../utilities/Colors';

const Category = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ItemView = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={
          selectedIndex === index
            ? Style.selectedCategoryTypeView
            : Style.categoryTypeView
        }
        onPress={() => {
          setSelectedIndex(index);
        }}
      >
        <Text
          style={[
            Style.categoryTypeText,
            {
              color:
                selectedIndex === index
                  ? 'black'
                  : Colors.themeLightGrayTextColor,
            },
          ]}
        >
          {item.value}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text style={Style.categoryText}>{Constants.categoryText}</Text>
      <FlatList
        style={Style.categoryFlatList}
        data={Constants.categoryArray}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={ItemView}
        keyExtractor={index => index.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      />
    </SafeAreaView>
  );
};

export default Category;
