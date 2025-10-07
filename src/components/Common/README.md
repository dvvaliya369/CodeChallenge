# CustomTextInput Component

A highly reusable and customizable TextInput component built for React Native applications.

## Features

✅ **Basic Input Functionality**
- Text input with standard React Native TextInput properties
- Support for all keyboard types (email, phone, numeric, etc.)
- Multiline text input support
- Character limits and counting

✅ **Validation & Error Handling**
- Built-in validation rules (email, phone, password, length)
- Custom validation rule support
- Real-time error display
- Required field indicators

✅ **Security Features**
- Password input with show/hide toggle
- Secure text entry support

✅ **Accessibility**
- Full accessibility label support
- Screen reader compatible
- Test ID support for automated testing

✅ **Customization**
- Flexible styling options for container, input, label, and error text
- Left and right icon support
- Custom color schemes
- Disabled state styling

✅ **User Experience**
- Visual focus states
- Smooth animations and transitions
- Character count display
- Clear error messaging

## Installation

Simply import the component from your components directory:

```javascript
import { CustomTextInput, ValidationRules } from '../components/Common';
```

## Basic Usage

```javascript
import React, { useState } from 'react';
import { CustomTextInput } from '../components/Common';

const MyForm = () => {
  const [email, setEmail] = useState('');
  
  return (
    <CustomTextInput
      label="Email Address"
      placeholder="Enter your email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
};
```

## Props Reference

### Basic Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Label text displayed above the input |
| `placeholder` | string | - | Placeholder text when input is empty |
| `value` | string | - | Current input value |
| `onChangeText` | function | - | Callback when text changes |
| `onFocus` | function | - | Callback when input gains focus |
| `onBlur` | function | - | Callback when input loses focus |

### Input Type & Behavior

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `secureTextEntry` | boolean | false | Hide text for password inputs |
| `keyboardType` | string | 'default' | Keyboard type (email-address, phone-pad, etc.) |
| `autoCapitalize` | string | 'sentences' | Auto capitalization behavior |
| `autoCorrect` | boolean | true | Enable auto correction |
| `multiline` | boolean | false | Allow multiple lines of text |
| `numberOfLines` | number | 1 | Number of lines for multiline input |
| `maxLength` | number | - | Maximum character limit |
| `editable` | boolean | true | Whether input is editable |

### Validation & Errors

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `required` | boolean | false | Show required indicator (*) |
| `error` | string | '' | Error message to display |
| `validationRules` | array | [] | Array of validation functions |

### Styling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `containerStyle` | object | - | Style for the outer container |
| `inputStyle` | object | - | Style for the TextInput component |
| `labelStyle` | object | - | Style for the label text |
| `errorStyle` | object | - | Style for error message text |

### Icons & Accessories

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `leftIcon` | ReactNode | - | Icon/component displayed on the left |
| `rightIcon` | ReactNode | - | Icon/component displayed on the right |
| `onRightIconPress` | function | - | Callback when right icon is pressed |
| `showCharacterCount` | boolean | false | Show character count with maxLength |

### Accessibility

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilityLabel` | string | - | Accessibility label for screen readers |
| `accessibilityHint` | string | - | Accessibility hint for screen readers |
| `testID` | string | - | Test identifier for automated testing |

## Validation Rules

The component comes with built-in validation rules:

```javascript
import { ValidationRules } from '../components/Common';

// Email validation
<CustomTextInput
  validationRules={[ValidationRules.email]}
  // ... other props
/>

// Password validation (min 8 chars, uppercase, lowercase, number)
<CustomTextInput
  validationRules={[ValidationRules.password]}
  // ... other props
/>

// Minimum length validation
<CustomTextInput
  validationRules={[ValidationRules.minLength(3)]}
  // ... other props
/>

// Maximum length validation
<CustomTextInput
  validationRules={[ValidationRules.maxLength(100)]}
  // ... other props
/>

// Phone number validation
<CustomTextInput
  validationRules={[ValidationRules.phone]}
  // ... other props
/>
```

## Custom Validation Rules

You can create your own validation rules:

```javascript
const customValidation = (value) => {
  if (value && value.includes('test')) {
    return 'Value cannot contain the word "test"';
  }
  return null; // No error
};

<CustomTextInput
  validationRules={[customValidation]}
  // ... other props
/>
```

## Advanced Examples

### Form with Multiple Inputs

```javascript
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  return (
    <View>
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(value) => updateField('email', value)}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        validationRules={[ValidationRules.email]}
        required
      />
      
      <CustomTextInput
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(value) => updateField('password', value)}
        error={errors.password}
        secureTextEntry
        autoCapitalize="none"
        validationRules={[ValidationRules.password]}
        required
      />
    </View>
  );
};
```

### Multiline Input with Character Count

```javascript
<CustomTextInput
  label="Description"
  placeholder="Tell us about yourself..."
  value={description}
  onChangeText={setDescription}
  multiline
  numberOfLines={4}
  maxLength={200}
  showCharacterCount
  validationRules={[ValidationRules.maxLength(200)]}
/>
```

### Custom Styling

```javascript
<CustomTextInput
  label="Styled Input"
  placeholder="Custom styled input"
  containerStyle={{
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4682b4',
  }}
  inputStyle={{
    fontSize: 18,
    color: '#2c3e50',
  }}
  labelStyle={{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4682b4',
  }}
/>
```

## Component Architecture

The component is built with the following principles:

- **Reusability**: Can be used across different screens and forms
- **Flexibility**: Extensive customization options through props
- **Accessibility**: Built-in accessibility features for inclusive design
- **Performance**: Optimized with React.forwardRef for ref forwarding
- **Type Safety**: Clear prop interfaces (ready for TypeScript conversion)
- **Maintainability**: Well-structured code with clear separation of concerns

## File Structure

```
src/components/Common/
├── CustomTextInput.js     # Main component
├── TextInputExamples.js   # Usage examples
└── index.js              # Export file
```

## Testing

The component includes testID props for automated testing:

```javascript
<CustomTextInput
  testID="email-input"
  // ... other props
/>
```

## Migration from Existing TextInput

To migrate from the existing `PostTextInput` component:

```javascript
// Before
<PostTextInput
  onChangeText={setText}
  inputvalue={text}
  placeholdervalue="Enter text"
  multiline={true}
  inputStyle={styles.input}
/>

// After
<CustomTextInput
  onChangeText={setText}
  value={text}
  placeholder="Enter text"
  multiline={true}
  containerStyle={styles.input}
/>
```

## Browser/Platform Compatibility

This component is designed for React Native and supports:
- iOS (React Native)
- Android (React Native)
- All React Native supported versions

## Contributing

When contributing to this component:
1. Maintain backward compatibility
2. Add proper prop validation
3. Update documentation for new features
4. Include usage examples
5. Test on both iOS and Android platforms
