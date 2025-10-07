# TextInput Component

A reusable, customizable TextInput component for React Native applications with extensive styling options, validation support, and accessibility features.

## Features

- ✅ Multiple variants (default, outlined, filled)
- ✅ Different sizes (small, medium, large)
- ✅ Label and helper text support
- ✅ Error state handling
- ✅ Disabled state
- ✅ Left and right icon support
- ✅ Character count display
- ✅ Multiline support
- ✅ Required field indicator
- ✅ Forward ref support
- ✅ TypeScript-style prop definitions
- ✅ Accessibility features
- ✅ Customizable styling

## Installation

Place the `TextInput.js` file in your components directory and import it where needed.

## Basic Usage

```javascript
import TextInput from './components/TextInput';

// Basic usage
<TextInput
  label="Name"
  placeholder="Enter your name"
  value={value}
  onChangeText={setValue}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Label text displayed above the input |
| `error` | string | - | Error message to display |
| `helperText` | string | - | Helper text displayed below the input |
| `variant` | 'default' \| 'outlined' \| 'filled' | 'default' | Visual variant of the input |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Size of the input |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | Shows required indicator (*) |
| `leftIcon` | ReactNode | - | Icon to display on the left side |
| `rightIcon` | ReactNode | - | Icon to display on the right side |
| `showCharacterCount` | boolean | false | Show current character count |
| `maxCharacters` | number | - | Maximum number of characters |
| `containerStyle` | object | - | Custom styles for the container |
| `inputStyle` | object | - | Custom styles for the input |
| `labelStyle` | object | - | Custom styles for the label |
| `errorStyle` | object | - | Custom styles for error text |
| `helperTextStyle` | object | - | Custom styles for helper text |

All other props from React Native's `TextInput` are also supported.

## Examples

### Email Input with Validation
```javascript
<TextInput
  label="Email Address"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  error={emailError}
  leftIcon={<Icon name="email" size={20} color="#718096" />}
  required
/>
```

### Password Input with Toggle
```javascript
<TextInput
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry={!showPassword}
  leftIcon={<Icon name="lock" size={20} color="#718096" />}
  rightIcon={
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
      <Icon 
        name={showPassword ? "visibility-off" : "visibility"} 
        size={20} 
        color="#718096" 
      />
    </TouchableOpacity>
  }
  maxCharacters={20}
  showCharacterCount
/>
```

### Multiline Input
```javascript
<TextInput
  label="Comments"
  placeholder="Enter your comments..."
  value={comments}
  onChangeText={setComments}
  multiline
  numberOfLines={4}
  maxCharacters={200}
  showCharacterCount
/>
```

### Different Variants
```javascript
// Default variant
<TextInput variant="default" placeholder="Default" />

// Outlined variant
<TextInput variant="outlined" placeholder="Outlined" />

// Filled variant
<TextInput variant="filled" placeholder="Filled" />
```

### Different Sizes
```javascript
<TextInput size="small" placeholder="Small input" />
<TextInput size="medium" placeholder="Medium input" />
<TextInput size="large" placeholder="Large input" />
```

## Styling Customization

The component accepts various style props for customization:

```javascript
<TextInput
  label="Custom Styled Input"
  containerStyle={{ backgroundColor: '#f0f0f0' }}
  inputStyle={{ fontSize: 18, color: '#333' }}
  labelStyle={{ fontWeight: 'bold', color: '#666' }}
  placeholder="Custom styling"
/>
```

## Accessibility

The component includes built-in accessibility features:
- Proper labeling for screen readers
- Disabled state handling
- Error state announcements
- Focus management

## Demo

Run the included `TextInputDemo.js` to see all features in action:

```javascript
import TextInputDemo from './components/TextInputDemo';

// In your App component
<TextInputDemo />
```

## Dependencies

- React Native
- react-native-vector-icons (for demo icons)

## License

This component is provided as-is for use in React Native projects.
