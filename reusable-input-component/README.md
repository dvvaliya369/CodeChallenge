# Reusable Input Component

A modern, accessible, and customizable input component built with React and TypeScript.

## Features

- ✅ **TypeScript Support**: Fully typed with comprehensive prop interfaces
- ✅ **Accessibility**: ARIA labels, error announcements, and keyboard navigation
- ✅ **Validation**: Built-in error state handling and visual feedback
- ✅ **Responsive**: Works on all screen sizes with mobile-friendly design
- ✅ **Customizable**: Extensive styling options and CSS custom properties
- ✅ **Dark Mode**: Automatic dark mode support using CSS media queries
- ✅ **Form Integration**: Works seamlessly with form libraries
- ✅ **Zero Dependencies**: No external dependencies (peer deps: React 16.8+)

## Installation

```bash
npm install reusable-input-component
# or
yarn add reusable-input-component
# or
pnpm add reusable-input-component
```

## Quick Start

```tsx
import React, { useState } from 'react';
import { Input } from 'reusable-input-component';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (error) setError(''); // Clear error on change
  };

  const validateEmail = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
    }
  };

  return (
    <Input
      label="Email Address"
      type="email"
      value={email}
      onChange={handleChange}
      onBlur={validateEmail}
      error={error}
      placeholder="Enter your email"
      required
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | The input value |
| `placeholder` | `string` | - | Placeholder text |
| `label` | `string` | - | Label text (creates accessible label) |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `required` | `boolean` | `false` | Whether input is required |
| `error` | `string` | - | Error message to display |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Inline styles |
| `name` | `string` | - | Input name attribute |
| `id` | `string` | - | Input id (auto-generated if not provided) |
| `maxLength` | `number` | - | Maximum input length |
| `minLength` | `number` | - | Minimum input length |
| `autoComplete` | `string` | - | Autocomplete attribute |
| `autoFocus` | `boolean` | `false` | Whether to autofocus |
| `readOnly` | `boolean` | `false` | Whether input is read-only |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - | Change handler |
| `onBlur` | `(event: React.FocusEvent<HTMLInputElement>) => void` | - | Blur handler |
| `onFocus` | `(event: React.FocusEvent<HTMLInputElement>) => void` | - | Focus handler |
| `onKeyPress` | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | - | Key press handler |
| `onKeyDown` | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | - | Key down handler |
| `aria-label` | `string` | - | ARIA label for accessibility |
| `aria-describedby` | `string` | - | ARIA described by |

## Examples

### Basic Usage

```tsx
<Input
  label="Name"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### With Validation

```tsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={handleEmailChange}
  error={emailError}
  required
  autoComplete="email"
/>
```

### Password Input

```tsx
<Input
  label="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  minLength={8}
  required
  autoComplete="new-password"
/>
```

### Disabled State

```tsx
<Input
  label="Disabled Input"
  value="Cannot edit this"
  disabled
/>
```

### Read-only State

```tsx
<Input
  label="Read-only Input"
  value="This is read-only"
  readOnly
/>
```

### Custom Styling

```tsx
<Input
  label="Custom Styled"
  className="my-custom-input"
  style={{ borderColor: 'purple' }}
  placeholder="Custom styled input"
/>
```

## Styling

The component uses CSS modules and provides several CSS custom properties for easy customization:

```css
/* Override default styles */
.my-custom-input {
  --input-border-color: #purple;
  --input-focus-color: #purple;
  --input-padding: 1rem;
  --input-border-radius: 8px;
}
```

### CSS Classes

- `.input-container`: The main container
- `.input-label`: The label element
- `.input-wrapper`: Wrapper around the input
- `.input-field`: The input element itself
- `.error-message`: Error message container

## Accessibility

This component follows WAI-ARIA guidelines and includes:

- Proper labeling with `<label>` elements
- Error announcements with `role="alert"`
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Color contrast compliance

## TypeScript

Full TypeScript support with exported types:

```tsx
import { InputProps, InputState } from 'reusable-input-component';

const MyInput: React.FC<InputProps> = (props) => {
  return <Input {...props} />;
};
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Changelog

### 1.0.0
- Initial release
- Full TypeScript support
- Accessibility features
- Dark mode support
- Comprehensive validation
