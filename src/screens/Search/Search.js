import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Style from '../../styles/Style';
import Constants from '../../utilities/Constants';
import Images from '../../utilities/Images';
import Colors from '../../utilities/Colors';

// Category filter options — 'All' plus each unique type present in the recipe data
const FILTER_CATEGORIES = ['All', 'Food', 'Dessert', 'Vegan', 'Keto'];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derive the filtered recipe list reactively from both filters
  const filteredRecipes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return Constants.recipeArray.filter(recipe => {
      const matchesQuery =
        query === '' || recipe.recipeName.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === 'All' || recipe.type === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Individual recipe result card
  const RecipeCard = ({ item }) => (
    <View style={Style.searchRecipeCard}>
      <Image source={item.image} style={Style.searchRecipeCardImage} />
      <View style={Style.searchRecipeCardBody}>
        <View style={Style.searchRecipeUserRow}>
          <Image source={item.userImg} style={Style.searchRecipeUserImg} />
          <Text style={Style.searchRecipeUserName}>{item.userName}</Text>
        </View>
        <Text style={Style.searchRecipeTitle}>{item.recipeName}</Text>
        <View style={Style.searchRecipeMetaRow}>
          <View style={Style.searchRecipeTypeBadge}>
            <Text style={Style.searchRecipeTypeText}>{item.type}</Text>
          </View>
          <Text style={Style.searchRecipeTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  // Shown when no recipes match the current query + category combination
  const EmptyState = () => (
    <View style={Style.searchEmptyState}>
      <Image source={Images.homeSearchIcon} style={Style.searchEmptyIcon} />
      <Text style={Style.searchEmptyTitle}>No recipes found</Text>
      <Text style={Style.searchEmptySubtitle}>
        Try a different keyword or category
      </Text>
    </View>
  );

  return (
    <View style={Style.searchScreenContainer}>
      {/* Page heading */}
      <Text style={Style.searchScreenTitle}>Find a Recipe</Text>

      {/* Search text input */}
      <View style={Style.searchInputWrapper}>
        <Image source={Images.homeSearchIcon} style={Style.searchInputIcon} />
        <TextInput
          style={Style.searchInput}
          placeholder="Search recipes…"
          placeholderTextColor={Colors.themeLightGrayTextColor}
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>

      {/* Horizontal category filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={Style.searchCategoryScroll}
        contentContainerStyle={Style.searchCategoryScrollContent}
      >
        {FILTER_CATEGORIES.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              Style.searchCategoryChip,
              selectedCategory === category && Style.searchCategoryChipActive,
            ]}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                Style.searchCategoryChipText,
                selectedCategory === category &&
                  Style.searchCategoryChipTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Live result count */}
      <Text style={Style.searchResultCount}>
        {filteredRecipes.length}{' '}
        {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
      </Text>

      {/* Scrollable recipe results list */}
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item, index) => `${item.recipeName}-${index}`}
        renderItem={({ item }) => <RecipeCard item={item} />}
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Style.searchRecipeList}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default Search;
