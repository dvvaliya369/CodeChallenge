# SelectInput Component

A reusable, accessible select input component built with React and TypeScript.

## Features

- ✅ Single and multiple selection support
- ✅ Keyboard navigation (Arrow keys, Enter, Escape, Tab)
- ✅ Search/filter functionality
- ✅ Loading and disabled states
- ✅ Error handling and validation
- ✅ Custom option rendering
- ✅ Full accessibility support (ARIA labels, roles)
- ✅ TypeScript support
- ✅ Customizable styling with CSS
- ✅ Responsive design
- ✅ Test coverage

## Installation

```bash
npm install react react-dom
```

Copy the following files to your project:
- `SelectInput.tsx`
- `SelectInput.css`
- `types.ts`

## Basic Usage

```tsx
import React, { useState } from 'react';
import { SelectInput } from './SelectInput';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' }
];

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <SelectInput
      label="Choose Framework"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a framework"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | - | Array of options to display |
| `value` | `string \| number \| (string \| number)[]` | - | Currently selected value(s) |
| `onChange` | `(value: string \| number \| (string \| number)[]) => void` | - | Callback when selection changes |
| `placeholder` | `string` | `'Select an option'` | Placeholder text when no option is selected |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `multiple` | `boolean` | `false` | Whether multiple selections are allowed |
| `error` | `string` | - | Error message to display |
| `loading` | `boolean` | `false` | Whether the component is in loading state |
| `className` | `string` | `''` | Custom className for styling |
| `label` | `string` | - | Label for the select input |
| `required` | `boolean` | `false` | Whether the field is required |
| `searchable` | `boolean` | `false` | Enable search/filter functionality |
| `renderOption` | `(option: SelectOption) => React.ReactNode` | - | Custom render function for options |
| `maxHeight` | `number` | `200` | Maximum height for the dropdown |
| `testId` | `string` | `'select-input'` | Test id for testing |

## SelectOption Interface

```tsx
interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
```

## Examples

### Multiple Selection

```tsx
<SelectInput
  label="Select Multiple Frameworks"
  options={frameworks}
  value={selectedFrameworks}
  onChange={setSelectedFrameworks}
  multiple
  placeholder="Choose one or more frameworks"
/>
```

### Searchable Select

```tsx
<SelectInput
  label="Search Countries"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  searchable
  placeholder="Search and select a country"
/>
```

### With Validation

```tsx
<SelectInput
  label="Required Field"
  options={options}
  value={value}
  onChange={setValue}
  required
  error={error}
  placeholder="This field is required"
/>
```

### Custom Option Rendering

```tsx
<SelectInput
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  renderOption={(option) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={option.avatar} alt="" width="20" height="20" />
      <span>{option.label}</span>
      <small>{option.email}</small>
    </div>
  )}
/>
```

### Loading State

```tsx
<SelectInput
  label="Loading Data"
  options={options}
  value={value}
  onChange={setValue}
  loading
/>
```

## Keyboard Navigation

- **Enter/Space**: Open/close dropdown, select focused option
- **Arrow Down/Up**: Navigate through options
- **Escape**: Close dropdown
- **Tab**: Move to next focusable element (closes dropdown)
- **Type**: Search for options (when searchable)

## Accessibility Features

- Full ARIA support with proper roles and labels
- Keyboard navigation
- Screen reader compatibility
- High contrast mode support
- Focus management
- Required field indication
- Error announcements

## Styling

The component uses CSS classes that can be customized:

```css
.select-input { /* Main container */ }
.select-input__control { /* The clickable control */ }
.select-input__dropdown { /* Dropdown container */ }
.select-input__option { /* Individual options */ }
.select-input--disabled { /* Disabled state */ }
.select-input--error { /* Error state */ }
```

You can override styles by:
1. Modifying `SelectInput.css`
2. Using the `className` prop
3. Using CSS-in-JS solutions

## Testing

The component includes comprehensive test coverage. Run tests with:

```bash
npm test SelectInput.test.tsx
```

Test utilities are provided for common testing scenarios.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Ensure all tests pass
2. Add tests for new features
3. Follow TypeScript best practices
4. Maintain accessibility standards

## License

MIT License - feel free to use in your projects!
