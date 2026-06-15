// SearchConstants.js
// Data constants powering the Search screen: catalogue, trending, categories, recent defaults.

import Images from './Images';

const SearchConstants = {
  // Default recent search chips shown before any interaction
  defaultRecentSearches: ['Pancake', 'Vegan', 'Keto', 'Dessert'],

  // Popular category cards with emoji and pastel background colours
  popularCategories: [
    { label: 'Vegan', emoji: '🥗', color: '#E8F5E9' },
    { label: 'Keto', emoji: '🥩', color: '#FFF3E0' },
    { label: 'Dessert', emoji: '🍰', color: '#FCE4EC' },
    { label: 'Breakfast', emoji: '🥞', color: '#E3F2FD' },
    { label: 'Veggy', emoji: '🥦', color: '#F3E5F5' },
    { label: 'Snacks', emoji: '🧁', color: '#FFFDE7' },
  ],

  // Trending recipes shown when the search bar is idle — reuses existing image assets
  trendingRecipes: [
    {
      recipeName: 'Pancake',
      image: Images.homerecipeimage1,
      type: 'Food',
      category: 'Breakfast',
      time: '>60 mins',
      userName: 'Calum Lewis',
      userImg: Images.homerecipeUserimage1,
    },
    {
      recipeName: 'Salad',
      image: Images.homerecipeimage2,
      type: 'Food',
      category: 'Vegan',
      time: '>60 mins',
      userName: 'Eilif Sonas',
      userImg: Images.homerecipeUserimage2,
    },
  ],

  // Full searchable catalogue — filtered by recipe name, type, category, or author
  allRecipes: [
    {
      recipeName: 'Pancake',
      image: Images.homerecipeimage1,
      type: 'Food',
      category: 'Breakfast',
      time: '>60 mins',
      userName: 'Calum Lewis',
      userImg: Images.homerecipeUserimage1,
    },
    {
      recipeName: 'Salad',
      image: Images.homerecipeimage2,
      type: 'Food',
      category: 'Vegan',
      time: '>60 mins',
      userName: 'Eilif Sonas',
      userImg: Images.homerecipeUserimage2,
    },
    {
      recipeName: 'British Dessert',
      image: Images.homerecipeimage3,
      type: 'Dessert',
      category: 'Dessert',
      time: '>50 mins',
      userName: 'Elena Shelby',
      userImg: Images.homerecipeUserimage3,
    },
    {
      recipeName: 'Fifteens',
      image: Images.homerecipeimage4,
      type: 'Dessert',
      category: 'Dessert',
      time: '>50 mins',
      userName: 'John Priyadi',
      userImg: Images.homerecipeUserimage4,
    },
    {
      recipeName: 'Avocado Toast',
      image: Images.homerecipeimage2,
      type: 'Food',
      category: 'Breakfast',
      time: '10 mins',
      userName: 'Calum Lewis',
      userImg: Images.homerecipeUserimage1,
    },
    {
      recipeName: 'Keto Bowl',
      image: Images.homerecipeimage1,
      type: 'Food',
      category: 'Keto',
      time: '20 mins',
      userName: 'John Priyadi',
      userImg: Images.homerecipeUserimage4,
    },
    {
      recipeName: 'Veggie Stir Fry',
      image: Images.homerecipeimage3,
      type: 'Food',
      category: 'Veggy',
      time: '30 mins',
      userName: 'Elena Shelby',
      userImg: Images.homerecipeUserimage3,
    },
    {
      recipeName: 'Chocolate Cake',
      image: Images.homerecipeimage4,
      type: 'Dessert',
      category: 'Dessert',
      time: '90 mins',
      userName: 'Eilif Sonas',
      userImg: Images.homerecipeUserimage2,
    },
  ],
};

export default SearchConstants;
