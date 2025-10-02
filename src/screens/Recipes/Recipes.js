import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const Recipes = ({ navigation }) => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Chocolate Chip Cookies',
      cookingTime: 25,
      difficulty: 'Easy',
      image: 'https://via.placeholder.com/150',
      rating: 4.5,
      ingredients: ['2 cups flour', '1 cup butter', '1 cup sugar', 'Chocolate chips'],
      description: 'Delicious homemade chocolate chip cookies that are crispy on the outside and chewy on the inside.',
    },
    {
      id: 2,
      title: 'Spaghetti Carbonara',
      cookingTime: 20,
      difficulty: 'Medium',
      image: 'https://via.placeholder.com/150',
      rating: 4.8,
      ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan cheese', 'Black pepper'],
      description: 'Classic Italian pasta dish with creamy egg sauce and crispy bacon.',
    },
    {
      id: 3,
      title: 'Chicken Tikka Masala',
      cookingTime: 45,
      difficulty: 'Hard',
      image: 'https://via.placeholder.com/150',
      rating: 4.7,
      ingredients: ['Chicken breast', 'Yogurt', 'Tomatoes', 'Heavy cream', 'Indian spices'],
      description: 'Rich and creamy Indian curry dish with tender marinated chicken.',
    },
    {
      id: 4,
      title: 'Avocado Toast',
      cookingTime: 5,
      difficulty: 'Easy',
      image: 'https://via.placeholder.com/150',
      rating: 4.2,
      ingredients: ['Bread', 'Avocado', 'Lemon', 'Salt', 'Pepper'],
      description: 'Simple and healthy breakfast option with creamy avocado on toasted bread.',
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = selectedFilter === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.difficulty === selectedFilter);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'Hard': return '#F44336';
      default: return Colors.themeLightGrayTextColor;
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Text key={i} style={styles.star}>★</Text>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Text key="half" style={styles.star}>☆</Text>
      );
    }

    return stars;
  };

  const handleRecipePress = (recipe) => {
    Alert.alert(
      recipe.title,
      `${recipe.description}\n\nIngredients:\n${recipe.ingredients.join('\n• ')}\n\nCooking Time: ${recipe.cookingTime} minutes\nDifficulty: ${recipe.difficulty}`,
      [{ text: 'OK' }]
    );
  };

  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.recipeCard}
      onPress={() => handleRecipePress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <View style={styles.recipeDetails}>
          <Text style={styles.cookingTime}>{item.cookingTime} min</Text>
          <View style={styles.ratingContainer}>
            {renderStars(item.rating)}
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
          <Text style={styles.difficultyText}>{item.difficulty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFilterButton = (filter) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.filterButton,
        selectedFilter === filter && styles.activeFilterButton
      ]}
      onPress={() => setSelectedFilter(filter)}
    >
      <Text style={[
        styles.filterText,
        selectedFilter === filter && styles.activeFilterText
      ]}>
        {filter}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Recipe Collection</Text>
      </View>

      {/* Filter Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {filters.map(renderFilterButton)}
      </ScrollView>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          Showing {filteredRecipes.length} of {recipes.length} recipes
        </Text>
      </View>

      {/* Recipe List */}
      <FlatList
        data={filteredRecipes}
        renderItem={renderRecipeCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.recipeList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.themeYellowColor,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  filterContainer: {
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  filterContent: {
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    backgroundColor: '#f1f3f4',
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: Colors.themeYellowColor,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeFilterText: {
    color: 'white',
  },
  statsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  statsText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  recipeList: {
    padding: 16,
  },
  recipeCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  recipeInfo: {
    padding: 16,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cookingTime: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FFD700',
    fontSize: 16,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Recipes;
