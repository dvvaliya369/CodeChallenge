# SelectInput Component Documentation

## Overview

`SelectInput` is a fully customizable dropdown/select component for React Native applications. It provides a native mobile experience with features like search, multiple selection, custom styling, and accessibility support.

## Features

- ✅ Single and multiple selection modes
- ✅ Search/filter functionality
- ✅ Custom item rendering
- ✅ Error and loading states
- ✅ Disabled state support
- ✅ Fully customizable styling
- ✅ Accessibility features (ARIA support)
- ✅ Modal-based dropdown for better mobile UX
- ✅ TypeScript ready (prop types included)

## Installation

1. Copy the `SelectInput.js` file to your components directory
2. Import the component in your screen/component
3. Make sure you have the required dependencies (react-native components are built-in)

## Basic Usage

```jsx
import React, { useState } from 'react';
import SelectInput from '../components/Common/SelectInput';

const MyScreen = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <SelectInput
      data={options}
      value={selectedValue}
      onSelect={setSelectedValue}
      placeholder="Select an option"
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array` | `[]` | Array of options with `label` and `value` properties |
| `value` | `any` | `null` | Selected value (single) or array of values (multiple) |
| `onSelect` | `Function` | - | Callback function called when selection changes |
| `placeholder` | `String` | `'Select an option'` | Placeholder text when no option is selected |
| `searchable` | `Boolean` | `false` | Enable search functionality |
| `multiple` | `Boolean` | `false` | Enable multiple selection mode |
| `disabled` | `Boolean` | `false` | Disable the input |
| `error` | `Boolean` | `false` | Show error state styling |
| `errorMessage` | `String` | `''` | Error message to display |
| `loading` | `Boolean` | `false` | Show loading state |
| `loadingText` | `String` | `'Loading...'` | Text to show when loading |
| `labelKey` | `String` | `'label'` | Key for option label in data objects |
| `valueKey` | `String` | `'value'` | Key for option value in data objects |
| `style` | `Object` | `{}` | Custom styles for the input container |
| `dropdownStyle` | `Object` | `{}` | Custom styles for the dropdown modal |
| `itemStyle` | `Object` | `{}` | Custom styles for dropdown items |
| `textStyle` | `Object` | `{}` | Custom styles for text |
| `placeholderTextColor` | `String` | `Colors.themeLightGrayTextColor` | Color for placeholder text |
| `maxHeight` | `Number` | `250` | Maximum height for dropdown |
| `renderItem` | `Function` | `null` | Custom item renderer function |
| `searchPlaceholder` | `String` | `'Search...'` | Placeholder for search input |
| `emptyMessage` | `String` | `'No options available'` | Message when no options found |
| `closeOnSelect` | `Boolean` | `true` | Close dropdown after selection |

## Advanced Examples

### Multiple Selection

```jsx
const [selectedIngredients, setSelectedIngredients] = useState([]);

<SelectInput
  data={ingredients}
  value={selectedIngredients}
  onSelect={setSelectedIngredients}
  placeholder="Select ingredients"
  multiple={true}
/>
```

### Searchable Dropdown

```jsx
<SelectInput
  data={largeDataset}
  value={selectedItem}
  onSelect={setSelectedItem}
  placeholder="Search and select"
  searchable={true}
  searchPlaceholder="Type to search..."
/>
```

### Custom Styling

```jsx
<SelectInput
  data={options}
  value={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Custom styled select"
  style={{
    borderColor: '#9C27B0',
    borderWidth: 2,
    backgroundColor: '#F3E5F5',
  }}
  textStyle={{
    color: '#7B1FA2',
    fontWeight: '600',
  }}
  dropdownStyle={{
    backgroundColor: '#F3E5F5',
  }}
/>
```

### Error State

```jsx
<SelectInput
  data={options}
  value={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Required field"
  error={!selectedValue}
  errorMessage="This field is required"
/>
```

### Custom Item Renderer

```jsx
const renderCustomItem = ({ item }) => (
  <TouchableOpacity style={customItemStyle} onPress={() => handleSelect(item)}>
    <Image source={{ uri: item.icon }} style={iconStyle} />
    <Text style={labelStyle}>{item.label}</Text>
    <Text style={descriptionStyle}>{item.description}</Text>
  </TouchableOpacity>
);

<SelectInput
  data={optionsWithIcons}
  value={selectedValue}
  onSelect={setSelectedValue}
  renderItem={renderCustomItem}
/>
```

## Data Format

The component expects data in the following format:

```javascript
const data = [
  { label: 'Display Text', value: 'unique_value' },
  { label: 'Another Option', value: 'another_value' },
  // ... more options
];
```

You can customize the keys using `labelKey` and `valueKey` props:

```javascript
const customData = [
  { name: 'Display Text', id: 'unique_id' },
  { name: 'Another Option', id: 'another_id' },
];

<SelectInput
  data={customData}
  labelKey="name"
  valueKey="id"
  // ... other props
/>
```

## Accessibility

The component includes several accessibility features:

- Proper ARIA labels and roles
- Keyboard navigation support (on supported platforms)
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## Styling

The component provides multiple styling props for customization:

- `style`: Main container styling
- `dropdownStyle`: Modal dropdown styling
- `itemStyle`: Individual item styling
- `textStyle`: Text styling throughout the component

All styles are merged with default styles, so you only need to override what you want to change.

## Common Use Cases

1. **Category Selection**: Single selection from predefined categories
2. **Multi-select Tags**: Multiple selection for tags or filters
3. **Country/State Picker**: Searchable geographic selection
4. **User Assignment**: Searchable user selection with avatars
5. **Settings Options**: Various app settings with custom styling

## Tips

1. For better performance with large datasets, consider implementing pagination or virtualization
2. Use `searchable={true}` for datasets with more than 10-15 items
3. Customize `maxHeight` based on your screen space
4. Use `closeOnSelect={false}` for multiple selection when you want users to see their selections
5. Always provide meaningful `errorMessage` text for better UX

## Dependencies

This component uses only React Native core components:
- `View`, `Text`, `TouchableOpacity`, `Modal`, `FlatList`, `TextInput`, `SafeAreaView`
- No additional third-party dependencies required
