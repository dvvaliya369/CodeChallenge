# SelectInput Component

A fully-featured, reusable dropdown/select component for React Native applications.

## 🚀 Quick Start

```jsx
import SelectInput from './src/components/Common/SelectInput';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
];

<SelectInput
  data={options}
  value={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select an option"
/>
```

## 📋 Features

- ✅ **Single & Multiple Selection**: Support for both selection modes
- ✅ **Search Functionality**: Filter options with built-in search
- ✅ **Custom Styling**: Fully customizable appearance
- ✅ **Error States**: Built-in error handling and display
- ✅ **Loading States**: Show loading indicators
- ✅ **Accessibility**: ARIA labels and screen reader support
- ✅ **Responsive Design**: Adapts to different screen sizes
- ✅ **Custom Rendering**: Override default item rendering

## 📁 Files Structure

```
src/
├── components/
│   └── Common/
│       ├── SelectInput.js          # Main component
│       └── SelectInput.md          # Detailed documentation
├── examples/
│   └── SelectInputExample.js       # Usage examples
└── TODO_SelectInput.md             # Development checklist
```

## 🎯 Use Cases

- **Category Selection**: Recipe categories, product types
- **Multi-select Filters**: Tags, ingredients, preferences  
- **Search & Select**: Users, locations, large datasets
- **Form Inputs**: Any dropdown needs in forms
- **Settings**: App configuration options

## 📖 Documentation

- **[Complete Documentation](src/components/Common/SelectInput.md)** - Detailed API reference and examples
- **[Usage Examples](src/examples/SelectInputExample.js)** - Interactive examples for all features

## 🎨 Key Features Demo

### Basic Usage
```jsx
<SelectInput
  data={categories}
  value={selected}
  onSelect={setSelected}
  placeholder="Choose category"
/>
```

### Multiple Selection
```jsx
<SelectInput
  data={ingredients}
  value={selectedItems}
  onSelect={setSelectedItems}
  multiple={true}
  placeholder="Select ingredients"
/>
```

### Searchable
```jsx
<SelectInput
  data={largeList}
  searchable={true}
  searchPlaceholder="Type to search..."
  placeholder="Search and select"
/>
```

## 🔧 Installation

1. Copy the `SelectInput.js` file to your components directory
2. Import and use in your components
3. No additional dependencies required (uses React Native core components only)

## 🤝 Contributing

Feel free to enhance the component with additional features:
- TypeScript definitions
- Additional animation options
- Performance optimizations
- More accessibility features

The component is designed to be easily extensible while maintaining a clean API.
