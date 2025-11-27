import Images from './Images';
const Constants = {
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
