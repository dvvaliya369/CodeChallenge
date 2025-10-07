import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import SelectInput from '../components/Common/SelectInput';

const SelectInputExample = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [searchableSelection, setSearchableSelection] = useState(null);

  // Sample data
  const categories = [
    { label: 'Breakfast', value: 'breakfast' },
    { label: 'Lunch', value: 'lunch' },
    { label: 'Dinner', value: 'dinner' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Snacks', value: 'snacks' },
    { label: 'Beverages', value: 'beverages' },
  ];

  const ingredients = [
    { label: 'Tomatoes', value: 'tomatoes' },
    { label: 'Onions', value: 'onions' },
    { label: 'Garlic', value: 'garlic' },
    { label: 'Bell Peppers', value: 'bell_peppers' },
    { label: 'Carrots', value: 'carrots' },
    { label: 'Chicken', value: 'chicken' },
    { label: 'Beef', value: 'beef' },
    { label: 'Fish', value: 'fish' },
    { label: 'Rice', value: 'rice' },
    { label: 'Pasta', value: 'pasta' },
  ];

  const difficultyLevels = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>SelectInput Component Examples</Text>

        {/* Basic Single Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Single Selection</Text>
          <Text style={styles.description}>
            Simple dropdown with single selection
          </Text>
          <SelectInput
            data={categories}
            value={selectedCategory}
            onSelect={setSelectedCategory}
            placeholder="Select a category"
            style={styles.input}
          />
          <Text style={styles.result}>
            Selected: {selectedCategory || 'None'}
          </Text>
        </View>

        {/* Multiple Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Multiple Selection</Text>
          <Text style={styles.description}>
            Select multiple ingredients with checkmarks
          </Text>
          <SelectInput
            data={ingredients}
            value={selectedIngredients}
            onSelect={setSelectedIngredients}
            placeholder="Select ingredients"
            multiple={true}
            style={styles.input}
          />
          <Text style={styles.result}>
            Selected: {selectedIngredients.length > 0 
              ? selectedIngredients.join(', ') 
              : 'None'}
          </Text>
        </View>

        {/* Searchable Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Searchable Selection</Text>
          <Text style={styles.description}>
            Dropdown with search functionality
          </Text>
          <SelectInput
            data={ingredients}
            value={searchableSelection}
            onSelect={setSearchableSelection}
            placeholder="Search and select ingredient"
            searchable={true}
            searchPlaceholder="Type to search ingredients..."
            style={styles.input}
          />
          <Text style={styles.result}>
            Selected: {searchableSelection || 'None'}
          </Text>
        </View>

        {/* Custom Styled */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Styled</Text>
          <Text style={styles.description}>
            Custom colors and styling
          </Text>
          <SelectInput
            data={difficultyLevels}
            value={selectedDifficulty}
            onSelect={setSelectedDifficulty}
            placeholder="Select difficulty level"
            style={styles.customInput}
            textStyle={styles.customText}
            dropdownStyle={styles.customDropdown}
          />
          <Text style={styles.result}>
            Selected: {selectedDifficulty || 'None'}
          </Text>
        </View>

        {/* Error State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Error State</Text>
          <Text style={styles.description}>
            Input with error styling and message
          </Text>
          <SelectInput
            data={categories}
            value={null}
            onSelect={() => {}}
            placeholder="This field is required"
            error={true}
            errorMessage="Please select a category"
            style={styles.input}
          />
        </View>

        {/* Disabled State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disabled State</Text>
          <Text style={styles.description}>
            Disabled input that cannot be interacted with
          </Text>
          <SelectInput
            data={categories}
            value="breakfast"
            onSelect={() => {}}
            placeholder="Select a category"
            disabled={true}
            style={styles.input}
          />
        </View>

        {/* Loading State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Loading State</Text>
          <Text style={styles.description}>
            Input showing loading state
          </Text>
          <SelectInput
            data={[]}
            value={null}
            onSelect={() => {}}
            placeholder="Select option"
            loading={true}
            loadingText="Loading options..."
            style={styles.input}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  customInput: {
    borderColor: '#9C27B0',
    borderWidth: 2,
    backgroundColor: '#F3E5F5',
    marginBottom: 10,
  },
  customText: {
    color: '#7B1FA2',
    fontWeight: '600',
  },
  customDropdown: {
    backgroundColor: '#F3E5F5',
    borderColor: '#9C27B0',
    borderWidth: 1,
  },
  result: {
    fontSize: 14,
    color: '#4CAF50',
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default SelectInputExample;
