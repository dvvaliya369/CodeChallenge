import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import Style from '../../styles/Style';
import Colors from '../../utilities/Colors';
import Images from '../../utilities/Images';
import SearchConstants from '../../utilities/SearchConstants';

const Search = () => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(
    SearchConstants.defaultRecentSearches,
  );

  // Filter the full recipe catalogue based on the current query
  const filteredRecipes = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SearchConstants.allRecipes.filter(
      recipe =>
        recipe.recipeName.toLowerCase().includes(q) ||
        recipe.type.toLowerCase().includes(q) ||
        recipe.userName.toLowerCase().includes(q) ||
        recipe.category.toLowerCase().includes(q),
    );
  }, [query]);

  const handleSearch = text => {
    setQuery(text);
  };

  const handleRecentTap = term => {
    setQuery(term);
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
  };

  const handleSubmit = () => {
    const term = query.trim();
    if (!term) return;
    setRecentSearches(prev => {
      const updated = [term, ...prev.filter(r => r !== term)].slice(0, 6);
      return updated;
    });
  };

  const RecipeCard = ({ item }) => (
    <View style={SearchStyle.card}>
      <Image source={item.image} style={SearchStyle.cardImage} />
      {/* Bookmark overlay */}
      <View style={SearchStyle.bookmarkOverlay}>
        <Image source={Images.homeLikeIcon} style={SearchStyle.bookmarkIcon} />
      </View>
      <Text style={SearchStyle.cardName} numberOfLines={1}>
        {item.recipeName}
      </Text>
      <View style={SearchStyle.cardMeta}>
        <Text style={SearchStyle.cardMetaText}>{item.type}</Text>
        <View style={SearchStyle.dot} />
        <Text style={SearchStyle.cardMetaText}>{item.time}</Text>
      </View>
      <View style={SearchStyle.cardAuthorRow}>
        <Image source={item.userImg} style={SearchStyle.cardAuthorImg} />
        <Text style={SearchStyle.cardAuthorName} numberOfLines={1}>
          {item.userName}
        </Text>
      </View>
    </View>
  );

  const showEmpty = query.trim() && filteredRecipes.length === 0;

  return (
    <View style={SearchStyle.container}>
      <SafeAreaView />

      {/* Header */}
      <Text style={SearchStyle.header}>Search Recipes</Text>

      {/* Search Input */}
      <View style={SearchStyle.inputRow}>
        <View style={SearchStyle.inputWrapper}>
          <Image
            source={Images.homeSearchIcon}
            style={SearchStyle.searchIcon}
          />
          <TextInput
            style={SearchStyle.input}
            placeholder="Search recipes, chefs, categories..."
            placeholderTextColor={Colors.themeLightGrayTextColor}
            value={query}
            onChangeText={handleSearch}
            onSubmitEditing={handleSubmit}
            returnKeyType="search"
            autoCorrect={false}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <View style={SearchStyle.clearBtn}>
                <Text style={SearchStyle.clearBtnText}>✕</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Body */}
      {query.trim() === '' ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <View style={SearchStyle.section}>
              <View style={SearchStyle.sectionHeader}>
                <Text style={SearchStyle.sectionTitle}>Recent Searches</Text>
                <TouchableOpacity onPress={handleClearRecent}>
                  <Text style={SearchStyle.clearAllText}>Clear all</Text>
                </TouchableOpacity>
              </View>
              <View style={SearchStyle.chipsRow}>
                {recentSearches.map((term, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={SearchStyle.chip}
                    onPress={() => handleRecentTap(term)}
                  >
                    <Text style={SearchStyle.chipText}>{term}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Popular Categories */}
          <View style={SearchStyle.section}>
            <Text style={SearchStyle.sectionTitle}>Popular Categories</Text>
            <View style={SearchStyle.categoriesGrid}>
              {SearchConstants.popularCategories.map((cat, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    SearchStyle.categoryCard,
                    { backgroundColor: cat.color },
                  ]}
                  onPress={() => handleRecentTap(cat.label)}
                >
                  <Text style={SearchStyle.categoryEmoji}>{cat.emoji}</Text>
                  <Text style={SearchStyle.categoryLabel}>{cat.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Trending Recipes */}
          <View style={SearchStyle.section}>
            <Text style={SearchStyle.sectionTitle}>Trending Now</Text>
            <FlatList
              data={SearchConstants.trendingRecipes}
              keyExtractor={item => item.recipeName}
              renderItem={({ item }) => <RecipeCard item={item} />}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={SearchStyle.cardRow}
              ItemSeparatorComponent={() => (
                <View style={{ height: 16 }} />
              )}
            />
          </View>
        </ScrollView>
      ) : (
        // Results view
        <View style={{ flex: 1 }}>
          {showEmpty ? (
            <View style={SearchStyle.emptyState}>
              <Text style={SearchStyle.emptyEmoji}>🍽️</Text>
              <Text style={SearchStyle.emptyTitle}>No results found</Text>
              <Text style={SearchStyle.emptySubtitle}>
                Try a different name, category, or chef
              </Text>
            </View>
          ) : (
            <>
              <Text style={SearchStyle.resultsLabel}>
                {filteredRecipes.length} result
                {filteredRecipes.length !== 1 ? 's' : ''} for "{query.trim()}"
              </Text>
              <FlatList
                data={filteredRecipes}
                keyExtractor={item => item.recipeName + item.userName}
                renderItem={({ item }) => <RecipeCard item={item} />}
                numColumns={2}
                columnWrapperStyle={SearchStyle.cardRow}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: 16 }} />
                )}
              />
            </>
          )}
        </View>
      )}
    </View>
  );
};

// Local styles specific to Search screen
const SearchStyle = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
    marginTop: Platform.OS === 'android' ? 40 : 16,
    marginBottom: 16,
  },
  inputRow: {
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 50,
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.themeLightGrayTextColor,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Colors.themePoloBlueColor,
    paddingVertical: 0,
  },
  clearBtn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.themeLightGrayTextColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearBtnText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
  },
  clearAllText: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#F4F5F7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 14,
    color: Colors.themePoloBlueColor,
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '46%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  categoryEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
  },
  cardRow: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  bookmarkOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 8,
    padding: 4,
  },
  bookmarkIcon: {
    width: 16,
    height: 16,
  },
  cardName: {
    marginTop: 8,
    color: Colors.themePoloBlueColor,
    fontWeight: '700',
    fontSize: 14,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cardMetaText: {
    color: Colors.themeLightGrayTextColor,
    fontSize: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.themeLightGrayTextColor,
    marginHorizontal: 6,
  },
  cardAuthorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  cardAuthorImg: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
  },
  cardAuthorName: {
    fontSize: 12,
    color: Colors.themeLightGrayTextColor,
    flex: 1,
  },
  resultsLabel: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    marginTop: 8,
    marginBottom: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.themePoloBlueColor,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
};

export default Search;
