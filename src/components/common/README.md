# TextInput Component

A highly reusable and customizable TextInput component for React Native applications.

## Features

- ✅ **Comprehensive Props Support**: Supports all standard React Native TextInput props
- ✅ **Label & Validation**: Built-in label support with error and required field handling
- ✅ **Multiple Input Types**: Text, email, password, multiline, and more
- ✅ **Styling Options**: Customizable styles for container, input, label, error, and help text
- ✅ **Accessibility**: Built-in accessibility features and proper ref forwarding
- ✅ **State Management**: Visual feedback for error, disabled, and focused states
- ✅ **Help Text**: Support for helper text and character counting
- ✅ **Keyboard Handling**: Proper keyboard types and return key behavior

## Installation

The component is located at `src/components/common/TextInput.js` and can be imported as:

```javascript
import TextInput from '../components/common/TextInput'
// or
import { TextInput } from '../components/common'
```

## Basic Usage

### Simple Text Input
```javascript
import React, { useState } from 'react'
import TextInput from '../components/common/TextInput'

const MyComponent = () => {
    const [text, setText] = useState('')
    
    return (
        <TextInput
            label="Name"
            placeholder="Enter your name..."
            value={text}
            onChangeText={setText}
        />
    )
}
```

### Email Input with Validation
```javascript
const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState('')

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address')
    } else {
        setEmailError('')
    }
}

return (
    <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={(text) => {
            setEmail(text)
            validateEmail(text)
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        errorMessage={emailError}
        required={true}
    />
)
```

### Password Input
```javascript
const [password, setPassword] = useState('')

return (
    <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        helpText="Password should be at least 8 characters long"
    />
)
```

### Multiline Text Input
```javascript
const [description, setDescription] = useState('')
const maxLength = 500

return (
    <TextInput
        label="Description"
        placeholder="Enter a detailed description..."
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
        maxLength={maxLength}
        helpText={`${description.length}/${maxLength} characters`}
    />
)
```

## Props

### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | `''` | The value of the text input |
| `onChangeText` | function | - | Callback when text changes |
| `placeholder` | string | `''` | Placeholder text |
| `multiline` | boolean | `false` | Whether the input is multiline |
| `secureTextEntry` | boolean | `false` | Whether to hide the text (for passwords) |
| `keyboardType` | string | `'default'` | Type of keyboard to display |
| `autoCapitalize` | string | `'sentences'` | Auto-capitalization behavior |
| `autoCorrect` | boolean | `true` | Whether to enable auto-correct |
| `autoFocus` | boolean | `false` | Whether to auto-focus the input |
| `editable` | boolean | `true` | Whether the input is editable |
| `maxLength` | number | - | Maximum number of characters |

### UI Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Label text for the input |
| `errorMessage` | string | - | Error message to display |
| `helpText` | string | - | Help text to display |
| `required` | boolean | `false` | Whether the field is required (shows *) |
| `placeholderTextColor` | string | `Colors.themeLightGrayTextColor` | Color of the placeholder text |

### Style Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `containerStyle` | object | - | Style for the container |
| `inputStyle` | object | - | Style for the input |
| `labelStyle` | object | - | Style for the label |
| `errorStyle` | object | - | Style for the error message |
| `helpStyle` | object | - | Style for the help text |

### Event Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onFocus` | function | - | Callback when input is focused |
| `onBlur` | function | - | Callback when input loses focus |
| `onSubmitEditing` | function | - | Callback when submit is pressed |
| `returnKeyType` | string | `'done'` | Return key type |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `testID` | string | - | Test ID for testing purposes |

## Styling

The component uses a predefined style system but allows customization through style props:

```javascript
<TextInput
    label="Custom Styled Input"
    placeholder="Custom styling example..."
    value={text}
    onChangeText={setText}
    containerStyle={{
        marginVertical: 16,
        backgroundColor: '#F8F9FA'
    }}
    inputStyle={{
        fontSize: 18,
        fontWeight: '500'
    }}
    labelStyle={{
        fontSize: 18,
        color: Colors.themePoloBlueColor,
        fontWeight: 'bold'
    }}
/>
```

## States

### Error State
When `errorMessage` is provided, the component automatically applies error styling:
- Red border color
- Red label color
- Error message display

### Disabled State
When `editable={false}`, the component applies disabled styling:
- Gray background
- Gray border
- Gray text color

### Required Fields
When `required={true}`, a red asterisk (*) is displayed next to the label.

## Advanced Usage

### Using Refs
```javascript
import React, { useRef } from 'react'

const MyComponent = () => {
    const inputRef = useRef(null)
    
    const focusInput = () => {
        inputRef.current?.focus()
    }
    
    return (
        <TextInput
            ref={inputRef}
            label="Referenced Input"
            placeholder="This input can be focused programmatically"
            // ... other props
        />
    )
}
```

### Form Integration
```javascript
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
})

const [errors, setErrors] = useState({})

const updateField = (field, value) => {
    setFormData(prev => ({
        ...prev,
        [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
        setErrors(prev => ({
            ...prev,
            [field]: ''
        }))
    }
}

return (
    <View>
        <TextInput
            label="Name"
            placeholder="Enter your name..."
            value={formData.name}
            onChangeText={(text) => updateField('name', text)}
            errorMessage={errors.name}
            required={true}
        />
        
        <TextInput
            label="Email"
            placeholder="Enter your email..."
            value={formData.email}
            onChangeText={(text) => updateField('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            errorMessage={errors.email}
            required={true}
        />
        
        <TextInput
            label="Message"
            placeholder="Enter your message..."
            value={formData.message}
            onChangeText={(text) => updateField('message', text)}
            multiline={true}
            numberOfLines={4}
            errorMessage={errors.message}
        />
    </View>
)
```

## Keyboard Types

Supported keyboard types:
- `default`
- `email-address`
- `numeric`
- `phone-pad`
- `number-pad`
- `decimal-pad`
- `url`
- `web-search`

## Return Key Types

Supported return key types:
- `done`
- `go`
- `next`
- `search`
- `send`

## Testing

The component includes a `testID` prop for testing purposes:

```javascript
<TextInput
    testID="email-input"
    label="Email"
    // ... other props
/>
```

## Color Customization

The component uses colors from `Colors.js`. You can customize the appearance by modifying the color constants or overriding styles:

```javascript
// Default colors used
Colors.themeLightGrayTextColor     // Placeholder text
Colors.recipeUserTextColor         // Input text and label
Colors.categoryTypeLightGreyColor  // Border color
'#FF6B6B'                         // Error color
'#FFFFFF'                         // Background color
```

## Migration from PostTextInput

If you're currently using the existing `PostTextInput` component, here's how to migrate:

### Before (PostTextInput):
```javascript
<PostTextInput
    onChangeText={setText}
    inputvalue={text}
    placeholdervalue="Enter text..."
    multiline={false}
    inputStyle={styles.input}
/>
```

### After (TextInput):
```javascript
<TextInput
    onChangeText={setText}
    value={text}
    placeholder="Enter text..."
    multiline={false}
    containerStyle={styles.input} // Note: containerStyle instead of inputStyle
/>
```

## Examples

A complete example component is available at `src/components/common/TextInputExample.js` showing various use cases and configurations.
