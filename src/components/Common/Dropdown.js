import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Colors from '../../utilities/Colors';

const { width } = Dimensions.get('window');

const Dropdown = ({
  data = [],
  placeholder = 'Select an option',
  onSelect,
  selectedValue,
  containerStyle,
  dropdownStyle,
  itemStyle,
  placeholderStyle,
  selectedItemStyle,
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(selectedValue || null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const selectItem = (item) => {
    setSelected(item);
    setVisible(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.dropdownItem, itemStyle]}
      onPress={() => selectItem(item)}
    >
      <Text style={styles.dropdownItemText}>{item.label || item.value || item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.dropdown, dropdownStyle]}
        onPress={toggleDropdown}
      >
        <Text
          style={[
            styles.dropdownText,
            selected ? selectedItemStyle : placeholderStyle,
          ]}
        >
          {selected ? (selected.label || selected.value || selected) : placeholder}
        </Text>
        <Text style={styles.arrow}>{visible ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.dropdownList}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => 
                item.id?.toString() || item.value?.toString() || index.toString()
              }
              style={styles.flatList}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: Colors.themeRedColor, // Red background
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.themeRedBorderColor, // Darker red border
    minHeight: 50,
  },
  dropdownText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    flex: 1,
  },
  arrow: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownList: {
    backgroundColor: 'white',
    borderRadius: 8,
    maxHeight: 200,
    width: width - 40,
    borderWidth: 1,
    borderColor: Colors.themeRedBorderColor,
  },
  flatList: {
    maxHeight: 200,
  },
  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.themeRedLightColor, // Light red separator
  },
  dropdownItemText: {
    fontSize: 16,
    color: Colors.themeRedBorderColor, // Red text
    fontWeight: '500',
  },
});

export default Dropdown;
