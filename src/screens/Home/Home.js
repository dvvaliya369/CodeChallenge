import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Category from '../../components/Home/Category';
import HomeRecipeList from '../../components/Home/HomeRecipeList';
import HomeUserStory from '../../components/Home/HomeUserStory';
import Style from '../../styles/Style';

const Home = ({ route }) => {
  useEffect(() => {
    let fontName = 'Inter-Medium';
    GlobalFont.applyGlobal(fontName);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      <HomeUserStory />
      <Category />
      <View style={Style.homeSeperator} />
      <HomeRecipeList />
    </ScrollView>
  );
};

export default Home;
