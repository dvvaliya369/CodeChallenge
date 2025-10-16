//List down all the styles here, so we can reuse styles in any screens of the app

import { Platform, Dimensions } from 'react-native';
import Colors from '../utilities/Colors';

const Style = {
  //Botom tabbar
  searchTabBar: {
    position: 'absolute', // space from bottombar
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: Colors.themeYellowColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTabBarImage: {
    width: 20,
    height: 20,
    tintColor: '#9FA5C0',
    alignContent: 'center',
  },
  //Home-category
  homeUserStory: {
    width: 56,
    height: 56,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  homeUserStoryAdd: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  homeUserStoryAddImage: { width: 12, height: 12, alignSelf: 'center' },
  homeSeperator: {
    height: 8,
    backgroundColor: Colors.categoryTypeLightGreyColor,
    marginTop: 24,
  },

  categoryText: {
    color: Colors.themePoloBlueColor,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 24,
    marginTop: 24,
    fontFamily: 'Inter-Medium',
  },
  selectedCategoryTypeView: {
    backgroundColor: Colors.themeYellowColor,
    borderRadius: 16,
  },
  categoryTypeView: {
    backgroundColor: Colors.categoryTypeLightGreyColor,
    borderRadius: 16,
  },
  categoryTypeText: { fontSize: 15, margin: 12, fontWeight: '700' },
  categoryFlatList: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
    marginBottom: 16,
  },

  homeRecipeListView: {
    width: Dimensions.get('window').width / 2 - 4,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  homeRecipeUserImg: { width: 30, height: 30 },
  homeRecipeUserName: {
    alignSelf: 'center',
    marginLeft: 8,
    color: Colors.recipeUserTextColor,
  },
  homeTranparentImage: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 60,
    right: 55,
    backgroundColor: 'white',
    opacity: 0.4,
    borderRadius: 8,
  },
  homeLikeIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 60,
    right: 55,
    margin: 5,
  },
  homeRecipeName: {
    marginTop: 16,
    color: Colors.themePoloBlueColor,
    fontWeight: '700',
    fontSize: 17,
  },
  homeRecipeTypeText: { color: Colors.themeLightGrayTextColor, fontSize: 12 },
  homeRecipeTypeDotView: {
    width: 5,
    height: 5,
    backgroundColor: Colors.themeLightGrayTextColor,
    borderRadius: 2.5,
    alignSelf: 'center',
    marginLeft: 8,
  },
  homeRecipeFoodTime: {
    color: Colors.themeLightGrayTextColor,
    marginLeft: 8,
    fontSize: 12,
  },

  //Post
  cancelText: {
    marginLeft: 24,
    color: '#FF6464',
    fontSize: 17,
    fontWeight: '700',
    marginTop: Platform.OS === 'android' ? 40 : 0,
  },
  coverpictureBg: {
    width: 55,
    height: 55,
    alignSelf: 'center',
    marginTop: 24,
  },
  coverPicture: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  recipeNameTextInput: {
    borderWidth: 1,
    borderColor: '#D0DBEA',
    borderRadius: 32,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  recipeDescriptionTextInput: {
    borderWidth: 1,
    borderColor: '#D0DBEA',
    borderRadius: 8,
    minHeight: 100,
    padding: 16,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  cookingText: {
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
    marginTop: 24,
    marginLeft: 24,
    fontSize: 17,
  },
  cookingSliderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
  },
  cookingSliderLeftText: {
    fontWeight: '700',
    fontSize: 15,
    color: Colors.themeYellowColor,
  },
  cookingSliderRightText: {
    fontWeight: '700',
    fontSize: 15,
    color: Colors.themeLightGrayTextColor,
  },
  slider: {
    marginLeft: 24,
    marginRight: 24,
  },
  addCoverPhotoText: {
    fontSize: 15,
    marginTop: 24,
    alignSelf: 'center',
    color: Colors.themePoloBlueColor,
    fontWeight: '700',
  },
  uptoText: {
    fontSize: 15,
    marginTop: 8,
    alignSelf: 'center',
    color: Colors.themeLightGrayTextColor,
  },
  coverPhotoButtonView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 32,
    borderStyle: 'dashed',
    height: 200,
    borderColor: '#D0DBEA',
    borderRadius: 1,
  },
  recipeText: {
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
    marginTop: 24,
    marginLeft: 24,
    fontSize: 17,
  },
  nextButtonView: {
    backgroundColor: Colors.themeYellowColor,
    height: 56,
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 25,
    marginTop: 24,
    marginBottom: 30,
  },
  nextButtonText: { alignSelf: 'center', fontSize: 15, fontWeight: '700' },

  //Pic
  picCameraBUttonOuterView: {
    alignSelf: 'center',
    top: 40,
    borderWidth: 5,
    borderColor: '#230B34',
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  picCameraButtonInnerView: {
    width: 56,
    height: 56,
    backgroundColor: Colors.themeYellowColor,
    borderRadius: 28,
    alignSelf: 'center',
    marginTop: 2,
  },

  //Search
  searchView: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  searchText: { alignSelf: 'center', fontWeight: '700', fontSize: 15 },
};

export default Style;
