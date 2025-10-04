import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'
import Style from '../../styles/Style'
import Colors from '../../utilities/Colors'
import { useDebounceValue } from '../../utilities/useDebounce'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // Debounce search query with 500ms delay
    const debouncedSearchQuery = useDebounceValue(searchQuery, 500);

    // Mock search function - replace with actual search API call
    const performSearch = async (query) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);
        
        // Mock API delay
        setTimeout(() => {
            // Mock search results
            const mockResults = [
                { id: 1, title: `Recipe for ${query}`, description: 'Delicious recipe description' },
                { id: 2, title: `${query} variations`, description: 'Different ways to cook' },
                { id: 3, title: `Best ${query} recipe`, description: 'Top rated recipe' },
            ];
            
            setSearchResults(mockResults);
            setLoading(false);
        }, 300);
    };

    // Effect to trigger search when debounced query changes
    useEffect(() => {
        performSearch(debouncedSearchQuery);
    }, [debouncedSearchQuery]);

    const renderSearchResult = ({ item }) => (
        <View style={styles.resultItem}>
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text style={styles.resultDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={Style.searchView}>
            <Searchbar
                placeholder="Search recipes..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.searchbar}
                inputStyle={styles.searchInput}
            />
            
            {loading && (
                <Text style={styles.loadingText}>Searching...</Text>
            )}
            
            <FlatList
                data={searchResults}
                renderItem={renderSearchResult}
                keyExtractor={(item) => item.id.toString()}
                style={styles.resultsList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        margin: 16,
        elevation: 2,
    },
    searchInput: {
        fontSize: 16,
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.themeLightGrayTextColor,
        marginTop: 20,
    },
    resultsList: {
        flex: 1,
        paddingHorizontal: 16,
    },
    resultItem: {
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 1,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    resultDescription: {
        fontSize: 14,
        color: Colors.themeLightGrayTextColor,
    },
});

export default Search;