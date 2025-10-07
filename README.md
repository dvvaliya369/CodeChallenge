# Reusable TextInput Component

A flexible, accessible, and customizable TextInput component built with React and TypeScript.

## Features

- ✅ **Multiple Variants**: Outlined, filled, and standard styles
- ✅ **Size Options**: Small, medium, and large sizes
- ✅ **Icon Support**: Start and end icons
- ✅ **Validation**: Built-in error handling and helper text
- ✅ **Accessibility**: Full ARIA support and keyboard navigation
- ✅ **TypeScript**: Complete type safety
- ✅ **Customizable**: Extensive styling options via CSS custom properties
- ✅ **Dark Mode**: Built-in dark mode support
- ✅ **Character Count**: Optional character counting with max length
- ✅ **Form Integration**: Works seamlessly with forms and form libraries

## Installation

```bash
npm install reusable-textinput-component
# or
yarn add reusable-textinput-component
```

## Basic Usage

```tsx
import React, { useState } from 'react';
import { TextInput } from 'reusable-textinput-component';

function App() {
  const [value, setValue] = useState('');

  return (
    <TextInput
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text to display below the input |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant of the input |
| `variant` | `'outlined' \| 'filled' \| 'standard'` | `'outlined'` | Visual variant of the input |
| `required` | `boolean` | `false` | Whether the input is required |
| `showRequired` | `boolean` | `true` | Whether to show the required asterisk |
| `startIcon` | `React.ReactNode` | - | Icon to display at the start of the input |
| `endIcon` | `React.ReactNode` | - | Icon to display at the end of the input |
| `containerClassName` | `string` | - | Custom class name for the container |
| `inputClassName` | `string` | - | Custom class name for the input element |
| `labelClassName` | `string` | - | Custom class name for the label |
| `showCharacterCount` | `boolean` | `false` | Whether to display character count |
| `maxLength` | `number` | - | Maximum character count |

All standard HTML input props are also supported.

## Examples

### Basic Input

```tsx
<TextInput
  label="Username"
  placeholder="Enter your username"
/>
```

### With Icons

```tsx
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21L16.65 16.65"/>
  </svg>
);

<TextInput
  startIcon={<SearchIcon />}
  placeholder="Search..."
  label="Search"
/>
```

### With Validation

```tsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? '' : 'Please enter a valid email address';
};

<TextInput
  label="Email"
  type="email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    setError(validateEmail(e.target.value));
  }}
  error={error}
  required
/>
```

### Different Sizes

```tsx
<TextInput size="small" label="Small" placeholder="Small input" />
<TextInput size="medium" label="Medium" placeholder="Medium input" />
<TextInput size="large" label="Large" placeholder="Large input" />
```

### Different Variants

```tsx
<TextInput variant="outlined" label="Outlined" placeholder="Outlined input" />
<TextInput variant="filled" label="Filled" placeholder="Filled input" />
<TextInput variant="standard" label="Standard" placeholder="Standard input" />
```

### With Character Count

```tsx
<TextInput
  label="Bio"
  placeholder="Tell us about yourself"
  maxLength={100}
  showCharacterCount
  multiline
/>
```

## Styling

The component uses CSS custom properties for theming. You can override these in your CSS:

```css
:root {
  --text-input-border-radius: 8px;
  --text-input-border-focus: #your-brand-color;
  --text-input-font-size-medium: 16px;
  /* ... other custom properties */
}
```

### Available CSS Custom Properties

```css
:root {
  /* Colors */
  --text-input-bg: #ffffff;
  --text-input-border: #d1d5db;
  --text-input-border-hover: #9ca3af;
  --text-input-border-focus: #3b82f6;
  --text-input-border-error: #ef4444;
  --text-input-text: #111827;
  --text-input-placeholder: #6b7280;
  
  /* Sizes */
  --text-input-height-small: 32px;
  --text-input-height-medium: 40px;
  --text-input-height-large: 48px;
  
  /* Other properties... */
}
```

## Accessibility

The component follows WAI-ARIA guidelines:

- Proper labeling with `htmlFor` and `id` associations
- Error announcements with `role="alert"`
- Appropriate `aria-invalid` and `aria-describedby` attributes
- Keyboard navigation support
- High contrast mode support
- Reduced motion support

## TypeScript

Full TypeScript support with proper type definitions:

```tsx
import { TextInput, TextInputProps, TextInputRef } from 'reusable-textinput-component';

// Use with forwardRef
const MyInput = forwardRef<TextInputRef, TextInputProps>((props, ref) => (
  <TextInput ref={ref} {...props} />
));
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Your Name]
