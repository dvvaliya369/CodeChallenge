import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Style from '../../styles/Style';
import Constants from '../../utilities/Constants';

// Renders a star rating display for a given numeric rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <View style={Style.searchStarRow}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Text key={`full-${i}`} style={Style.searchStarFull}>
          ★
        </Text>
      ))}
      {hasHalf && <Text style={Style.searchStarHalf}>½</Text>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Text key={`empty-${i}`} style={Style.searchStarEmpty}>
          ★
        </Text>
      ))}
      <Text style={Style.searchRatingText}>{rating.toFixed(1)}</Text>
    </View>
  );
};

// Renders a single recipe card in the search results list
const SearchResultItem = ({ item }) => (
  <View style={Style.searchResultCard}>
    <Image source={item.image} style={Style.searchResultImage} />
    <View style={Style.searchResultInfo}>
      <Text style={Style.searchResultRecipeName}>{item.recipeName}</Text>
      <Text style={Style.searchResultType}>
        {item.type} · {item.time}
      </Text>
      <StarRating rating={item.rating} />
      <View style={Style.searchResultAuthorRow}>
        <Image source={item.userImg} style={Style.searchResultAuthorImg} />
        <Text style={Style.searchResultAuthorName}>{item.userName}</Text>
      </View>
    </View>
  </View>
);

const Search = () => {
  const [query, setQuery] = useState('');

  // Filter recipes in real-time by name, type, or chef name — case-insensitive
  const filteredRecipes = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return Constants.recipeArray;
    return Constants.recipeArray.filter(
      recipe =>
        recipe.recipeName.toLowerCase().includes(trimmed) ||
        recipe.type.toLowerCase().includes(trimmed) ||
        recipe.userName.toLowerCase().includes(trimmed),
    );
  }, [query]);

  return (
    <View style={Style.searchScreenContainer}>
      {/* Search input bar */}
      <View style={Style.searchInputWrapper}>
        <Text style={Style.searchInputIcon}>🔍</Text>
        <TextInput
          style={Style.searchInput}
          placeholder="Search recipes, types or chefs..."
          placeholderTextColor="#9FA5C0"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
          clearButtonMode="while-editing"
          autoCorrect={false}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Text style={Style.searchClearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Live result count */}
      <Text style={Style.searchResultCount}>
        {filteredRecipes.length === 0
          ? 'No recipes found'
          : `${filteredRecipes.length} recipe${filteredRecipes.length !== 1 ? 's' : ''} found`}
      </Text>

      {/* Scrollable results list */}
      <FlatList
        data={filteredRecipes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <SearchResultItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Style.searchResultList}
        ListEmptyComponent={
          <View style={Style.searchEmptyState}>
            <Text style={Style.searchEmptyIcon}>🍽️</Text>
            <Text style={Style.searchEmptyTitle}>No results</Text>
            <Text style={Style.searchEmptySubtitle}>
              Try searching for a recipe name, type (Food, Dessert) or a chef's
              name.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default Search;
