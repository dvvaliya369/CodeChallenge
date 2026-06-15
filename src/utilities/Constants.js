//List down all the constants here, so we can reuse constants in any screens of the app

import Images from './Images';
const Constants = {
  // for Home screen
  categoryText: 'Category',
  categoryArray: [
    { value: 'All' },
    { value: 'Vegan' },
    { value: 'Keto' },
    { value: 'Veggy' },
  ],

  recipeArray: [
    {
      recipeName: 'Pancake',
      image: Images.homerecipeimage1,
      type: 'Food',
      time: '>60 mins',
      userName: 'Calum Lewis',
      userImg: Images.homerecipeUserimage1,
    },
    {
      recipeName: 'Salad',
      image: Images.homerecipeimage2,
      type: 'Food',
      time: '>60 mins',
      userName: 'Eilif Sonas',
      userImg: Images.homerecipeUserimage2,
    },
    {
      recipeName: 'British Dessert',
      image: Images.homerecipeimage3,
      type: 'Dessert',
      time: '>50 mins',
      userName: 'Elena Shelby',
      userImg: Images.homerecipeUserimage3,
    },
    {
      recipeName: 'Fifteens',
      image: Images.homerecipeimage4,
      type: 'Dessert',
      time: '>50 mins',
      userName: 'John Priyadi',
      userImg: Images.homerecipeUserimage4,
    },
    {
      recipeName: 'Avocado Toast',
      image: Images.homerecipeimage1,
      type: 'Vegan',
      time: '<15 mins',
      userName: 'Maria Torres',
      userImg: Images.homerecipeUserimage1,
    },
    {
      recipeName: 'Green Smoothie Bowl',
      image: Images.homerecipeimage2,
      type: 'Vegan',
      time: '<20 mins',
      userName: 'Lena Park',
      userImg: Images.homerecipeUserimage2,
    },
    {
      recipeName: 'Keto Chicken Bowl',
      image: Images.homerecipeimage3,
      type: 'Keto',
      time: '>30 mins',
      userName: 'James Wilcox',
      userImg: Images.homerecipeUserimage3,
    },
    {
      recipeName: 'Cauliflower Rice',
      image: Images.homerecipeimage4,
      type: 'Keto',
      time: '>25 mins',
      userName: 'Sara Bloom',
      userImg: Images.homerecipeUserimage4,
    },
  ],

  homeStoryuserImageArray: [
    { value: Images.homeStoryUserimage1 },
    { value: Images.homeStoryUserimage2 },
    { value: Images.homeStoryUserimage3 },
    { value: Images.homeStoryUserimage4 },
    { value: Images.homeStoryUserimage5 },
  ],
  postTabHide: false,
};

export default Constants;
