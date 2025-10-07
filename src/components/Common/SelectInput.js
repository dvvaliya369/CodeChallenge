import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Colors from '../../utilities/Colors';

const { width, height } = Dimensions.get('window');

const SelectInput = ({
  data = [],
  value = null,
  onSelect,
  placeholder = 'Select an option',
  searchable = false,
  multiple = false,
  disabled = false,
  error = false,
  errorMessage = '',
  loading = false,
  loadingText = 'Loading...',
  labelKey = 'label',
  valueKey = 'value',
  style = {},
  dropdownStyle = {},
  itemStyle = {},
  textStyle = {},
  placeholderTextColor = Colors.themeLightGrayTextColor,
  maxHeight = 250,
  renderItem = null,
  searchPlaceholder = 'Search...',
  emptyMessage = 'No options available',
  closeOnSelect = true,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState(
    multiple ? (Array.isArray(value) ? value : []) : value
  );

  // Filter data based on search text
  const filteredData = searchable
    ? data.filter(item =>
        item[labelKey]?.toLowerCase().includes(searchText.toLowerCase())
      )
    : data;

  // Get display text for the input
  const getDisplayText = () => {
    if (loading) return loadingText;
    
    if (multiple) {
      if (selectedItems.length === 0) return placeholder;
      if (selectedItems.length === 1) {
        const item = data.find(d => d[valueKey] === selectedItems[0]);
        return item ? item[labelKey] : placeholder;
      }
      return `${selectedItems.length} items selected`;
    } else {
      if (!selectedItems) return placeholder;
      const item = data.find(d => d[valueKey] === selectedItems);
      return item ? item[labelKey] : placeholder;
    }
  };

  // Handle item selection
  const handleItemSelect = (item) => {
    if (multiple) {
      const newSelection = selectedItems.includes(item[valueKey])
        ? selectedItems.filter(id => id !== item[valueKey])
        : [...selectedItems, item[valueKey]];
      
      setSelectedItems(newSelection);
      onSelect?.(newSelection);
      
      if (closeOnSelect && newSelection.length === 1) {
        setModalVisible(false);
        setSearchText('');
      }
    } else {
      setSelectedItems(item[valueKey]);
      onSelect?.(item[valueKey]);
      
      if (closeOnSelect) {
        setModalVisible(false);
        setSearchText('');
      }
    }
  };

  // Check if item is selected
  const isItemSelected = (item) => {
    if (multiple) {
      return selectedItems.includes(item[valueKey]);
    }
    return selectedItems === item[valueKey];
  };

  // Open modal
  const openModal = () => {
    if (!disabled && !loading) {
      setModalVisible(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setSearchText('');
  };

  // Default item renderer
  const defaultRenderItem = ({ item }) => {
    const selected = isItemSelected(item);
    
    return (
      <TouchableOpacity
        style={[
          styles.item,
          selected && styles.selectedItem,
          itemStyle,
        ]}
        onPress={() => handleItemSelect(item)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.itemText,
            selected && styles.selectedItemText,
            textStyle,
          ]}
        >
          {item[labelKey]}
        </Text>
        {multiple && selected && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          disabled && styles.disabledContainer,
          error && styles.errorContainer,
          style,
        ]}
        onPress={openModal}
        disabled={disabled || loading}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.text,
            (!selectedItems || (multiple && selectedItems.length === 0)) && {
              color: placeholderTextColor,
            },
            textStyle,
          ]}
          numberOfLines={1}
        >
          {getDisplayText()}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      {error && errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={closeModal}
          activeOpacity={1}
        >
          <SafeAreaView style={styles.modalContainer}>
            <TouchableOpacity activeOpacity={1}>
              <View style={[styles.dropdown, dropdownStyle, { maxHeight }]}>
                {/* Header with close button */}
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>
                    {multiple ? 'Select Options' : 'Select Option'}
                  </Text>
                  <TouchableOpacity
                    onPress={closeModal}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>

                {/* Search input */}
                {searchable && (
                  <View style={styles.searchContainer}>
                    <TextInput
                      style={styles.searchInput}
                      placeholder={searchPlaceholder}
                      placeholderTextColor={placeholderTextColor}
                      value={searchText}
                      onChangeText={setSearchText}
                      autoCorrect={false}
                      autoCapitalize="none"
                    />
                  </View>
                )}

                {/* Options list */}
                {filteredData.length > 0 ? (
                  <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => 
                      item[valueKey]?.toString() || index.toString()
                    }
                    renderItem={renderItem || defaultRenderItem}
                    showsVerticalScrollIndicator={true}
                    style={styles.list}
                  />
                ) : (
                  <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>{emptyMessage}</Text>
                  </View>
                )}

                {/* Multiple selection footer */}
                {multiple && (
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>
                      {selectedItems.length} item(s) selected
                    </Text>
                    <TouchableOpacity
                      onPress={closeModal}
                      style={styles.doneButton}
                    >
                      <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E1E8ED',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    minHeight: 50,
  },
  disabledContainer: {
    backgroundColor: '#F5F5F5',
    opacity: 0.7,
  },
  errorContainer: {
    borderColor: '#FF6B6B',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  arrow: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 10,
  },
  errorText: {
    fontSize: 12,
    color: '#FF6B6B',
    marginTop: 5,
    marginHorizontal: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#999999',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E1E8ED',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
  },
  list: {
    maxHeight: 200,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  selectedItem: {
    backgroundColor: '#E3F2FD',
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  selectedItemText: {
    color: '#1976D2',
    fontWeight: '500',
  },
  checkmark: {
    fontSize: 16,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E1E8ED',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
  doneButton: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default SelectInput;
