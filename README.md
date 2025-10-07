# UI Components Library

A collection of reusable, accessible React components built with TypeScript.

## Components

### SelectInput Component

A reusable, accessible select input component built with React and TypeScript.

#### Features

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

### Button Component

A flexible, accessible button component with multiple variants and states.

#### Features

- ✅ Multiple variants (primary, secondary, outline, text, danger, success)
- ✅ Different sizes (small, medium, large)
- ✅ Disabled and loading states
- ✅ Icon support (left and right positioning)
- ✅ Custom styling props
- ✅ Full accessibility support (ARIA labels, focus management)
- ✅ TypeScript support
- ✅ Loading spinner animation
- ✅ Full-width and rounded options
- ✅ Test coverage

## Installation

```bash
npm install react react-dom
```

Copy the following files to your project:
- `SelectInput.tsx` + `SelectInput.css` + `types.ts`
- `Button.tsx` + `Button.css` + `types.ts`

## Basic Usage

### SelectInput

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

### Button

```tsx
import React from 'react';
import { Button } from './Button';

function MyComponent() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Primary Button
      </Button>
      
      <Button 
        variant="outline" 
        size="large" 
        icon={<SaveIcon />}
        loading={isLoading}
      >
        Save Document
      </Button>
    </div>
  );
}
```

## Component Props

### SelectInput Props

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

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button text content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'text' \| 'danger' \| 'success'` | `'primary'` | Button visual variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `icon` | `React.ReactNode` | - | Icon to display in the button |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `className` | `string` | `''` | Custom className for styling |
| `style` | `React.CSSProperties` | - | Custom inline styles |
| `fullWidth` | `boolean` | `false` | Whether button should take full width |
| `rounded` | `boolean` | `false` | Whether the button should have rounded corners |
| `testId` | `string` | - | Test id for testing |
| `aria-label` | `string` | - | ARIA label for accessibility |

## TypeScript Interfaces

### SelectOption

```tsx
interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
```

### ButtonProps

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  testId?: string;
  'aria-label'?: string;
  rounded?: boolean;
}
```

## Examples

### SelectInput Examples

#### Multiple Selection

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

#### Searchable Select

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

#### With Validation

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

### Button Examples

#### Button Variants

```tsx
<div>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="text">Text</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="success">Success</Button>
</div>
```

#### Button with Icon

```tsx
<Button 
  icon={<SaveIcon />} 
  iconPosition="left"
  variant="primary"
>
  Save Document
</Button>
```

#### Loading Button

```tsx
<Button 
  loading={isLoading} 
  onClick={handleAsyncAction}
  variant="primary"
>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>
```

#### Form Usage

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit
  </Button>
  <Button type="reset" variant="outline">
    Reset
  </Button>
  <Button type="button" variant="text" onClick={handleCancel}>
    Cancel
  </Button>
</form>
```

## Keyboard Navigation

### SelectInput
- **Enter/Space**: Open/close dropdown, select focused option
- **Arrow Down/Up**: Navigate through options
- **Escape**: Close dropdown
- **Tab**: Move to next focusable element (closes dropdown)
- **Type**: Search for options (when searchable)

### Button
- **Enter/Space**: Activate button
- **Tab**: Move to next focusable element

## Accessibility Features

Both components include:
- Full ARIA support with proper roles and labels
- Keyboard navigation
- Screen reader compatibility
- High contrast mode support
- Focus management
- Required field indication (SelectInput)
- Error announcements (SelectInput)

## Styling

### SelectInput Classes
```css
.select-input { /* Main container */ }
.select-input__control { /* The clickable control */ }
.select-input__dropdown { /* Dropdown container */ }
.select-input__option { /* Individual options */ }
.select-input--disabled { /* Disabled state */ }
.select-input--error { /* Error state */ }
```

### Button Classes
```css
.button { /* Base button styles */ }
.button--primary { /* Primary variant */ }
.button--secondary { /* Secondary variant */ }
.button--outline { /* Outline variant */ }
.button--small { /* Small size */ }
.button--medium { /* Medium size */ }
.button--large { /* Large size */ }
.button--disabled { /* Disabled state */ }
.button--loading { /* Loading state */ }
.button--full-width { /* Full width */ }
.button--rounded { /* Rounded corners */ }
```

You can override styles by:
1. Modifying the CSS files
2. Using the `className` prop
3. Using CSS-in-JS solutions

## Testing

Both components include comprehensive test coverage. Run tests with:

```bash
npm test SelectInput.test.tsx
npm test Button.test.tsx
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
