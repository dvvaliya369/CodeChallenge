# Custom Input Component

A flexible and feature-rich input component for React Native applications using react-native-paper.

## Features

- ✅ **Multiple Input Types**: Text, email, password, multiline
- ✅ **Validation Support**: Built-in error handling and display
- ✅ **Accessibility**: Full accessibility support with ARIA labels
- ✅ **Customizable Styling**: Custom themes and styles
- ✅ **Character Limits**: Optional character count with visual feedback
- ✅ **Required Field Indicators**: Visual indicators for required fields
- ✅ **Helper Text**: Support for helper text and error messages
- ✅ **Focus States**: Visual feedback for focused inputs
- ✅ **Disabled States**: Support for disabled inputs
- ✅ **Test Support**: Built-in test IDs for automated testing

## Installation

The component uses `react-native-paper` which should already be installed in your project.

```javascript
import CustomInput from './src/components/Input/CustomInput';
// or
import { CustomInput } from './src/components/Input';
```

## Basic Usage

```javascript
import React, { useState } from 'react';
import CustomInput from './src/components/Input/CustomInput';

const MyComponent = () => {
  const [text, setText] = useState('');

  return (
    <CustomInput
      label="Your Name"
      placeholder="Enter your name"
      value={text}
      onChangeText={setText}
    />
  );
};
```

## Advanced Usage Examples

### Email Input with Validation

```javascript
const [email, setEmail] = useState('');

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email && !emailRegex.test(email) ? 'Please enter a valid email' : '';
};

<CustomInput
  label="Email Address"
  placeholder="example@email.com"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoComplete="email"
  error={validateEmail(email)}
/>
```

### Password Input

```javascript
const [password, setPassword] = useState('');

<CustomInput
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry={true}
  helperText="Password should be at least 8 characters"
/>
```

### Required Field

```javascript
const [requiredField, setRequiredField] = useState('');

<CustomInput
  label="Required Field"
  placeholder="This field is required"
  value={requiredField}
  onChangeText={setRequiredField}
  required={true}
  error={!requiredField.trim() ? 'This field is required' : ''}
/>
```

### Multiline Input

```javascript
const [comments, setComments] = useState('');

<CustomInput
  label="Comments"
  placeholder="Enter your comments..."
  value={comments}
  onChangeText={setComments}
  multiline={true}
  numberOfLines={4}
/>
```

### Input with Character Limit

```javascript
const [limitedText, setLimitedText] = useState('');

<CustomInput
  label="Short Description"
  placeholder="Max 100 characters"
  value={limitedText}
  onChangeText={setLimitedText}
  maxLength={100}
  helperText="Keep it concise"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Current value of the input |
| `onChangeText` | `function` | - | Callback when text changes |
| `error` | `string` | - | Error message to display |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `mode` | `'outlined' \| 'flat'` | `'outlined'` | Input display mode |
| `keyboardType` | `string` | `'default'` | Keyboard type |
| `secureTextEntry` | `boolean` | `false` | Hide text (for passwords) |
| `autoComplete` | `string` | `'off'` | Auto-complete type |
| `multiline` | `boolean` | `false` | Enable multiline input |
| `numberOfLines` | `number` | `1` | Lines for multiline input |
| `required` | `boolean` | `false` | Mark field as required |
| `maxLength` | `number` | - | Maximum character length |
| `helperText` | `string` | - | Helper text below input |
| `style` | `object` | - | Custom container styles |
| `inputStyle` | `object` | - | Custom input styles |
| `testID` | `string` | - | Test identifier |
| `onFocus` | `function` | - | Focus callback |
| `onBlur` | `function` | - | Blur callback |

## Styling

The component uses react-native-paper theming and can be customized through:

1. **Theme Colors**: Modify the theme prop
2. **Custom Styles**: Use style and inputStyle props
3. **Global Styles**: Modify the component's StyleSheet

## Accessibility

The component includes comprehensive accessibility support:

- Screen reader labels
- Accessibility hints for helper text and errors
- Proper accessibility roles
- Focus management

## Testing

The component includes built-in test support with:

- Test IDs for automated testing
- Accessible elements for testing frameworks
- Predictable component behavior

## Example Screen

See `InputExampleScreen.js` for a comprehensive demonstration of all component features.

## File Structure

```
src/components/Input/
├── CustomInput.js       # Main component
├── InputExampleScreen.js # Usage examples
├── index.js            # Exports
└── README.md          # This documentation
```
