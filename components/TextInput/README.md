# TextInput Component

A flexible and accessible React TextInput component with TypeScript support.

## Features

- ✅ **TypeScript Support**: Full TypeScript definitions with proper prop types
- ✅ **Accessibility**: ARIA attributes, proper labeling, and keyboard navigation
- ✅ **Flexible Styling**: Multiple size variants and customization options
- ✅ **Error Handling**: Built-in error state and validation support
- ✅ **Dark Mode**: Automatic dark mode support via CSS media queries
- ✅ **Forward Ref**: Support for ref forwarding to access the input element
- ✅ **Full Width Option**: Easy full-width styling
- ✅ **Helper Text**: Support for helper text and error messages
- ✅ **Required Field Indicator**: Visual indicator for required fields

## Installation

```bash
# Copy the component files to your project
cp -r components/TextInput /your-project/src/components/
```

## Basic Usage

```tsx
import React, { useState } from 'react';
import { TextInput } from './components/TextInput';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <TextInput
      type="email"
      label="Email Address"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={error}
      helperText="We'll never share your email"
      required
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text to display below the input |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Visual size variant |
| `fullWidth` | `boolean` | `false` | Full width styling |
| `required` | `boolean` | `false` | Show required asterisk |
| `containerClassName` | `string` | `''` | Custom class name for the container |
| `inputClassName` | `string` | `''` | Custom class name for the input |

All standard HTML input attributes are also supported through props spreading.

## Examples

### Basic Input
```tsx
<TextInput
  label="Full Name"
  placeholder="Enter your full name"
  value={value}
  onChange={handleChange}
/>
```

### Input with Error
```tsx
<TextInput
  label="Email"
  type="email"
  value={email}
  onChange={handleEmailChange}
  error={emailError}
  required
/>
```

### Different Sizes
```tsx
<TextInput label="Small" size="small" />
<TextInput label="Medium" size="medium" />
<TextInput label="Large" size="large" />
```

### Full Width Input
```tsx
<TextInput
  label="Description"
  placeholder="Enter description"
  fullWidth
/>
```

### Disabled Input
```tsx
<TextInput
  label="Read Only"
  value="Cannot edit this"
  disabled
/>
```

### Custom Styling
```tsx
<TextInput
  label="Custom Style"
  containerClassName="my-custom-container"
  inputClassName="my-custom-input"
/>
```

## Accessibility Features

- **Proper labeling**: Each input is associated with its label using `htmlFor`/`id`
- **ARIA attributes**: Includes `aria-invalid`, `aria-describedby` for error states
- **Error announcements**: Error messages are announced to screen readers using `role="alert"`
- **Required field indicator**: Visual and semantic indication of required fields
- **Keyboard navigation**: Full keyboard support with proper focus management
- **High contrast support**: Respects user's high contrast preferences

## Styling

The component uses CSS modules with semantic class names:

- `.text-input-container`: Main container
- `.text-input`: Input element
- `.text-input-label`: Label element
- `.text-input-error`: Error message
- `.text-input-helper`: Helper text

### Size Variants
- `--small`: Compact size for dense layouts
- `--medium`: Standard size (default)
- `--large`: Larger size for emphasis

### State Modifiers
- `--error`: Error state styling
- `--disabled`: Disabled state styling
- `--full-width`: Full width styling

## Dark Mode

The component automatically adapts to dark mode based on the user's system preference using `prefers-color-scheme: dark`.

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- IE11+ (with appropriate polyfills)
- Supports `prefers-color-scheme` and `prefers-contrast` media queries

## Customization

### CSS Custom Properties

You can override the default styling using CSS custom properties:

```css
.text-input {
  --input-border-color: #custom-color;
  --input-focus-color: #custom-focus;
  --input-error-color: #custom-error;
}
```

### Extending the Component

```tsx
import { TextInput, TextInputProps } from './components/TextInput';

interface CustomTextInputProps extends TextInputProps {
  icon?: React.ReactNode;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ 
  icon, 
  ...props 
}) => {
  return (
    <div className="custom-input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      <TextInput {...props} />
    </div>
  );
};
```

## Testing

The component is designed to be easily testable:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './TextInput';

test('displays error message', () => {
  render(
    <TextInput 
      label="Email" 
      error="Invalid email" 
      data-testid="email-input"
    />
  );
  
  expect(screen.getByText('Invalid email')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
});
```

## License

MIT License - feel free to use in your projects!
