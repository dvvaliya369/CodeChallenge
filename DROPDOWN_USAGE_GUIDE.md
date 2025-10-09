# Red Dropdown Component - Usage Documentation

## Overview
A customizable, red-themed dropdown component created for React Native applications.

## Component Location
- **File:** `/src/components/Common/Dropdown.js`
- **Export:** Available through `/src/components/Common/index.js`

## Features
- ✅ Red color theme using project's color scheme
- ✅ Modal-based dropdown for better UX
- ✅ Touch outside to dismiss
- ✅ Flexible data format support
- ✅ Customizable styling props
- ✅ Smooth fade animation

## Usage Examples

### Basic Usage
```javascript
import { Dropdown } from '../components/Common';

const MyComponent = () => {
  const [selected, setSelected] = useState(null);
  
  const options = [
    { id: 1, label: 'Option 1', value: 'opt1' },
    { id: 2, label: 'Option 2', value: 'opt2' }
  ];

  return (
    <Dropdown
      data={options}
      placeholder="Choose option..."
      onSelect={setSelected}
      selectedValue={selected}
    />
  );
};
```

### Advanced Usage with Custom Styling
```javascript
<Dropdown
  data={cuisineOptions}
  placeholder="Select cuisine..."
  onSelect={(item) => console.log('Selected:', item)}
  selectedValue={selectedOption}
  containerStyle={{ marginTop: 20 }}
  dropdownStyle={{ borderRadius: 12 }}
  itemStyle={{ paddingVertical: 15 }}
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | Array | `[]` | Array of options to display |
| `placeholder` | String | `'Select an option'` | Placeholder text |
| `onSelect` | Function | - | Callback when item selected |
| `selectedValue` | Object | `null` | Currently selected item |
| `containerStyle` | Object | - | Style for container view |
| `dropdownStyle` | Object | - | Style for dropdown button |
| `itemStyle` | Object | - | Style for dropdown items |
| `placeholderStyle` | Object | - | Style for placeholder text |
| `selectedItemStyle` | Object | - | Style for selected item text |

## Data Format Support
The component supports flexible data formats:

```javascript
// Object format (recommended)
const data1 = [
  { id: 1, label: 'Display Text', value: 'internal_value' }
];

// Simple object format
const data2 = [
  { label: 'Display Text', value: 'internal_value' }
];

// String array format
const data3 = ['Option 1', 'Option 2', 'Option 3'];
```

## Color Scheme
The component uses the project's red theme colors:
- **Background:** `Colors.themeRedColor` (#FF6B6B)
- **Border:** `Colors.themeRedBorderColor` (#FF4757)  
- **Separator:** `Colors.themeRedLightColor` (#FFE8E8)

## Integration Example
The dropdown has been integrated into the Home screen as a recipe filter:

```javascript
// In Home.js
import { Dropdown } from '../../components/Common';

const filterOptions = [
  { id: 1, label: 'Most Popular', value: 'popular' },
  { id: 2, label: 'Latest', value: 'latest' },
  { id: 3, label: 'Quick & Easy', value: 'quick' },
  { id: 4, label: 'Healthy', value: 'healthy' },
];

<Dropdown
  data={filterOptions}
  placeholder="Select filter..."
  onSelect={(item) => setSelectedFilter(item)}
  selectedValue={selectedFilter}
/>
```

## Notes
- Component is fully responsive and adapts to screen width
- Uses React Native's Modal for dropdown overlay
- Includes proper accessibility support
- Follows the project's existing code patterns and styling conventions
