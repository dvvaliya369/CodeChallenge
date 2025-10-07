# TextInput Component

A highly customizable and reusable TextInput component for React Native applications with TypeScript support.

## Features

✅ **Flexible Styling** - Multiple variants (default, outlined, filled) and sizes (small, medium, large)  
✅ **Form Validation** - Built-in error handling and validation states  
✅ **Accessibility** - Full accessibility support with proper labeling  
✅ **TypeScript** - Complete TypeScript support with proper type definitions  
✅ **Customizable** - Extensive customization options for styling  
✅ **Helper Features** - Character count, helper text, required field indicators  
✅ **Ref Forwarding** - Direct access to the underlying TextInput component  

## Installation

Since this is a custom component, simply copy the `TextInput.tsx` file to your project's components folder.

```bash
# If using TypeScript (recommended)
cp src/components/TextInput.tsx your-project/components/
cp src/components/index.ts your-project/components/

# Also copy the examples if needed
cp src/examples/TextInputExamples.tsx your-project/examples/
```

## Basic Usage

```tsx
import React, { useState } from 'react';
import { TextInput } from '../components';

const MyForm = () => {
  const [name, setName] = useState('');

  return (
    <TextInput
      label="Full Name"
      placeholder="Enter your name"
      value={name}
      onChangeText={setName}
      required
    />
  );
};
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the input |
| `error` | `string` | - | Error message to display below the input |
| `helperText` | `string` | - | Helper text displayed below the input |
| `required` | `boolean` | `false` | Shows required asterisk (*) next to label |
| `variant` | `'default' \| 'outlined' \| 'filled'` | `'default'` | Input styling variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `showCharacterCount` | `boolean` | `false` | Shows character count (requires maxLength) |
| `containerStyle` | `ViewStyle` | - | Custom container styling |
| `inputStyle` | `TextStyle` | - | Custom input styling |
| `labelStyle` | `TextStyle` | - | Custom label styling |
| `errorStyle` | `TextStyle` | - | Custom error text styling |
| `helperStyle` | `TextStyle` | - | Custom helper text styling |

All standard React Native `TextInput` props are also supported.

## Examples

### Basic Input with Validation

```tsx
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

const validateEmail = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(text)) {
    setEmailError('Please enter a valid email');
  } else {
    setEmailError('');
  }
};

<TextInput
  label="Email"
  placeholder="user@example.com"
  value={email}
  onChangeText={(text) => {
    setEmail(text);
    validateEmail(text);
  }}
  keyboardType="email-address"
  autoCapitalize="none"
  error={emailError}
  required
/>
```

### Password Input

```tsx
<TextInput
  label="Password"
  placeholder="Enter password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  helperText="Password must be at least 8 characters"
/>
```

### Text Area with Character Count

```tsx
<TextInput
  label="Description"
  placeholder="Tell us about yourself..."
  value={description}
  onChangeText={setDescription}
  multiline
  numberOfLines={4}
  maxLength={200}
  showCharacterCount
/>
```

### Different Variants

```tsx
{/* Default variant */}
<TextInput
  label="Default"
  placeholder="Default input"
  variant="default"
/>

{/* Outlined variant */}
<TextInput
  label="Outlined"
  placeholder="Outlined input"
  variant="outlined"
/>

{/* Filled variant */}
<TextInput
  label="Filled"
  placeholder="Filled input"
  variant="filled"
/>
```

### Different Sizes

```tsx
<TextInput label="Small" size="small" />
<TextInput label="Medium" size="medium" />
<TextInput label="Large" size="large" />
```

### Custom Styling

```tsx
<TextInput
  label="Custom Styled"
  placeholder="Custom input"
  containerStyle={{
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 12,
  }}
  inputStyle={{
    borderColor: '#4682b4',
    borderWidth: 2,
  }}
  labelStyle={{
    color: '#2c5f7d',
    fontWeight: 'bold',
  }}
/>
```

### Using with Refs

```tsx
const inputRef = useRef<TextInput>(null);

const focusInput = () => {
  inputRef.current?.focus();
};

<TextInput
  ref={inputRef}
  label="Focusable Input"
  placeholder="Can be focused programmatically"
/>
```

## Styling Guide

The component uses a flexible styling system that allows for extensive customization:

### Variants
- **Default**: Standard border with background
- **Outlined**: Prominent border, transparent background
- **Filled**: No border, filled background

### Sizes
- **Small**: Compact size for dense layouts
- **Medium**: Standard size for most use cases
- **Large**: Prominent size for important inputs

### States
- **Normal**: Standard appearance
- **Error**: Red border and error message
- **Disabled**: Grayed out appearance
- **Focus**: Highlighted border (handled automatically)

## Accessibility

The component includes built-in accessibility features:

- Proper labeling with `accessibilityLabel`
- Error state announcements
- Required field indicators
- Keyboard navigation support
- Screen reader compatibility

## TypeScript Support

Full TypeScript support with:

- Proper prop type definitions
- Generic type support for refs
- IntelliSense support
- Type-safe event handlers

## Testing

To test the component, run the example app:

```bash
# Run the React Native app to see examples
npm start
# or
yarn start
```

The `TextInputExamples.tsx` file contains comprehensive examples of all features and use cases.

## Contributing

When contributing to this component:

1. Maintain TypeScript compatibility
2. Follow the existing code style
3. Add examples for new features
4. Update documentation
5. Test on both iOS and Android

## License

This component is part of your project and follows your project's license.
