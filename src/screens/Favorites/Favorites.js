import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Style from '../../styles/Style';
import Colors from '../../utilities/Colors';
import Images from '../../utilities/Images';

const { width } = Dimensions.get('window');

const Favorites = ({ navigation }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];

  // Mock data for favorite recipes
  const mockFavoriteRecipes = [
    {
      id: '1',
      name: 'Chocolate Cake',
      image: Images.homeRecipe,
      category: 'Dessert',
      cookingTime: '45 mins',
      difficulty: 'Medium',
      rating: 4.8,
      likes: 234,
    },
    {
      id: '2',
      name: 'Avocado Toast',
      image: Images.homeRecipe2,
      category: 'Breakfast',
      cookingTime: '10 mins',
      difficulty: 'Easy',
      rating: 4.6,
      likes: 156,
    },
    {
      id: '3',
      name: 'Pasta Carbonara',
      image: Images.homeRecipe3,
      category: 'Dinner',
      cookingTime: '30 mins',
      difficulty: 'Medium',
      rating: 4.9,
      likes: 389,
    },
    {
      id: '4',
      name: 'Fruit Smoothie',
      image: Images.homeRecipe4,
      category: 'Snacks',
      cookingTime: '5 mins',
      difficulty: 'Easy',
      rating: 4.7,
      likes: 278,
    },
  ];

  useEffect(() => {
    // Load favorite recipes
    loadFavoriteRecipes();
  }, []);

  const loadFavoriteRecipes = () => {
    // In a real app, this would fetch from AsyncStorage or API
    setFavoriteRecipes(mockFavoriteRecipes);
  };

  const filteredRecipes = selectedCategory === 'All' 
    ? favoriteRecipes 
    : favoriteRecipes.filter(recipe => recipe.category === selectedCategory);

  const removeFromFavorites = (recipeId) => {
    setFavoriteRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item && styles.categoryButtonActive
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text style={[
        styles.categoryText,
        selectedCategory === item && styles.categoryTextActive
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeCard}>
      <Image source={item.image} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <View style={styles.recipeHeader}>
          <Text style={styles.recipeName}>{item.name}</Text>
          <TouchableOpacity 
            style={styles.favoriteButton}
            onPress={() => removeFromFavorites(item.id)}
          >
            <Image 
              source={Images.homeLike} 
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.recipeDetails}>
          <Text style={styles.recipeCategory}>{item.category}</Text>
          <Text style={styles.recipeMeta}>• {item.cookingTime} • {item.difficulty}</Text>
        </View>
        
        <View style={styles.recipeStats}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          </View>
          <View style={styles.likes}>
            <Image source={Images.homeLikeTransparentBg} style={styles.likeIcon} />
            <Text style={styles.likesText}>{item.likes}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Image source={Images.noImage} style={styles.emptyImage} />
      <Text style={styles.emptyTitle}>No Favorite Recipes Yet</Text>
      <Text style={styles.emptySubtitle}>
        Start exploring recipes and tap the heart icon to save your favorites!
      </Text>
      <TouchableOpacity 
        style={styles.exploreButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.exploreButtonText}>Explore Recipes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Favorites</Text>
        <Text style={styles.headerSubtitle}>
          {favoriteRecipes.length} saved recipe{favoriteRecipes.length !== 1 ? 's' : ''}
        </Text>
      </View>

      {favoriteRecipes.length > 0 ? (
        <>
          <View style={styles.categoriesContainer}>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            />
          </View>

          <FlatList
            data={filteredRecipes}
            renderItem={renderRecipeItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipesList}
          />
        </>
      ) : (
        renderEmptyState()
      )}
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.themeWhiteColor || '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.themeBlackColor || '#000000',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.themeLightGrayTextColor || '#666666',
  },
  categoriesContainer: {
    paddingVertical: 10,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: Colors.themeLightGrayColor || '#F5F5F5',
  },
  categoryButtonActive: {
    backgroundColor: Colors.themeYellowColor || '#FFD700',
  },
  categoryText: {
    fontSize: 14,
    color: Colors.themeDarkGrayTextColor || '#333333',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: Colors.themeWhiteColor || '#FFFFFF',
    fontWeight: '600',
  },
  recipesList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: Colors.themeWhiteColor || '#FFFFFF',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  recipeInfo: {
    flex: 1,
    padding: 15,
  },
  recipeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.themeBlackColor || '#000000',
    flex: 1,
    marginRight: 10,
  },
  favoriteButton: {
    padding: 5,
  },
  favoriteIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.themeRedColor || '#FF6B6B',
  },
  recipeDetails: {
    marginBottom: 10,
  },
  recipeCategory: {
    fontSize: 14,
    color: Colors.themeYellowColor || '#FFD700',
    fontWeight: '500',
    marginBottom: 2,
  },
  recipeMeta: {
    fontSize: 12,
    color: Colors.themeLightGrayTextColor || '#666666',
  },
  recipeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: Colors.themeDarkGrayTextColor || '#333333',
    fontWeight: '500',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  likesText: {
    fontSize: 12,
    color: Colors.themeLightGrayTextColor || '#666666',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.themeBlackColor || '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 16,
    color: Colors.themeLightGrayTextColor || '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  exploreButton: {
    backgroundColor: Colors.themeYellowColor || '#FFD700',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.themeWhiteColor || '#FFFFFF',
  },
};

export default Favorites;
