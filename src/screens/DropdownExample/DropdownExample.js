import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Dropdown } from '../components/Common';

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample data for dropdowns
  const cuisineOptions = [
    { id: 1, label: 'Italian', value: 'italian' },
    { id: 2, label: 'Mexican', value: 'mexican' },
    { id: 3, label: 'Chinese', value: 'chinese' },
    { id: 4, label: 'Indian', value: 'indian' },
    { id: 5, label: 'French', value: 'french' },
    { id: 6, label: 'Thai', value: 'thai' },
  ];

  const difficultyOptions = [
    { id: 1, label: 'Beginner', value: 'beginner' },
    { id: 2, label: 'Intermediate', value: 'intermediate' },
    { id: 3, label: 'Advanced', value: 'advanced' },
    { id: 4, label: 'Expert', value: 'expert' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Red Dropdown Component Demo</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Cuisine Type:</Text>
          <Dropdown
            data={cuisineOptions}
            placeholder="Choose a cuisine..."
            onSelect={(item) => setSelectedOption(item)}
            selectedValue={selectedOption}
          />
          {selectedOption && (
            <Text style={styles.selectedText}>
              Selected: {selectedOption.label}
            </Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Difficulty Level:</Text>
          <Dropdown
            data={difficultyOptions}
            placeholder="Choose difficulty..."
            onSelect={(item) => setSelectedCategory(item)}
            selectedValue={selectedCategory}
            containerStyle={styles.customContainer}
          />
          {selectedCategory && (
            <Text style={styles.selectedText}>
              Selected: {selectedCategory.label}
            </Text>
          )}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Component Features:</Text>
          <Text style={styles.infoText}>• Red color theme</Text>
          <Text style={styles.infoText}>• Customizable styling</Text>
          <Text style={styles.infoText}>• Modal-based dropdown</Text>
          <Text style={styles.infoText}>• Touch outside to dismiss</Text>
          <Text style={styles.infoText}>• Flexible data format</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4757',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  selectedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF4757',
    fontWeight: '500',
    textAlign: 'center',
  },
  customContainer: {
    marginTop: 5,
  },
  infoSection: {
    marginTop: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF4757',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4757',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
});

export default DropdownExample;
