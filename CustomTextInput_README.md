# CustomTextInput Component Documentation

## Overview
A highly customizable and reusable TextInput component for React Native applications. This component provides a comprehensive solution for various input needs while maintaining consistent styling and behavior across your app.

## Features

✅ **Multiple Input Types**: text, email, password, phone, number, decimal
✅ **Flexible Styling**: Customizable container, input, and label styles
✅ **Validation Support**: Built-in error states and custom error messages
✅ **Icon Support**: Left and right icon placement
✅ **Password Visibility Toggle**: Built-in show/hide password functionality
✅ **Character Limit**: Optional character count display and enforcement
✅ **Multiline Support**: Single and multi-line text input modes
✅ **Focus States**: Visual feedback for focused/unfocused states
✅ **Accessibility**: Proper labeling and required field indicators
✅ **Consistent Theming**: Uses app color scheme and fonts

## Installation & Usage

### Basic Import
```javascript
import CustomTextInput from '../components/Common/CustomTextInput';
```

### Basic Usage Examples

#### 1. Simple Text Input
```javascript
const [name, setName] = useState('');

<CustomTextInput
  value={name}
  onChangeText={setName}
  placeholder="Enter your name..."
/>
```

#### 2. Email Input with Validation
```javascript
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState(false);

const validateEmail = (text) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  setEmailError(!isValid && text.length > 0);
  setEmail(text);
};

<CustomTextInput
  value={email}
  onChangeText={validateEmail}
  placeholder="Enter your email..."
  inputType="email"
  label="Email Address"
  required
  error={emailError}
  errorMessage="Please enter a valid email address"
/>
```

#### 3. Password Input
```javascript
const [password, setPassword] = useState('');

<CustomTextInput
  value={password}
  onChangeText={setPassword}
  placeholder="Enter your password..."
  inputType="password"
  label="Password"
  required
/>
```

#### 4. Multiline Text Input
```javascript
const [description, setDescription] = useState('');

<CustomTextInput
  value={description}
  onChangeText={setDescription}
  placeholder="Enter description..."
  multiline
  numberOfLines={4}
  label="Description"
  maxLength={500}
  showCharacterCount
/>
```

## Props Reference

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | - | Current input value |
| `onChangeText` | function | - | Callback when text changes (required) |
| `placeholder` | string | - | Placeholder text |
| `label` | string | - | Optional label above input |

### Input Configuration
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inputType` | string | 'default' | Input type: 'default', 'email', 'phone', 'number', 'decimal', 'password' |
| `multiline` | boolean | false | Enable multiline input |
| `numberOfLines` | number | 1 | Number of lines for multiline input |
| `maxLength` | number | - | Maximum character limit |
| `editable` | boolean | true | Whether input is editable |
| `autoFocus` | boolean | false | Auto-focus input on mount |
| `autoCorrect` | boolean | false | Enable auto-correction |
| `autoCapitalize` | string | 'none' | Auto-capitalization: 'none', 'sentences', 'words', 'characters' |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `containerStyle` | object | - | Style for outer container |
| `inputStyle` | object | - | Style for text input |
| `labelStyle` | object | - | Style for label text |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `error` | boolean | false | Show error state |
| `errorMessage` | string | - | Error message to display |
| `required` | boolean | false | Show required indicator (*) |

### Icon Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `leftIcon` | string/element | - | Left icon (URI string or React element) |
| `rightIcon` | string/element | - | Right icon (URI string or React element) |
| `onRightIconPress` | function | - | Callback for right icon press |

### Additional Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showCharacterCount` | boolean | false | Show character count (requires maxLength) |
| `secureTextEntry` | boolean | false | Hide text input (for non-password fields) |
| `onFocus` | function | - | Callback when input gains focus |
| `onBlur` | function | - | Callback when input loses focus |
| `onSubmitEditing` | function | - | Callback when submit is pressed |

## Advanced Examples

### Custom Styled Input
```javascript
<CustomTextInput
  value={customInput}
  onChangeText={setCustomInput}
  placeholder="Custom styled input..."
  label="Custom Style"
  containerStyle={{ 
    backgroundColor: '#F8F9FA', 
    padding: 16, 
    borderRadius: 12,
  }}
  inputStyle={{ 
    fontSize: 16,
    fontWeight: '500'
  }}
  labelStyle={{
    color: Colors.themeYellowColor,
    fontSize: 16,
  }}
/>
```

### Input with Icons
```javascript
<CustomTextInput
  value={searchInput}
  onChangeText={setSearchInput}
  placeholder="Search..."
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
  onRightIconPress={() => setSearchInput('')}
/>
```

### Form Validation Example
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const [errors, setErrors] = useState({});

const updateField = (field, value) => {
  setFormData(prev => ({ ...prev, [field]: value }));
  // Clear error when user starts typing
  if (errors[field]) {
    setErrors(prev => ({ ...prev, [field]: false }));
  }
};

<CustomTextInput
  value={formData.name}
  onChangeText={(value) => updateField('name', value)}
  placeholder="Full Name"
  label="Name"
  required
  error={errors.name}
  errorMessage="Name is required"
/>
```

## Styling Notes

- The component automatically adapts to focus states with border color changes
- Error states override focus styling with red borders
- Multiline inputs use rounded corner styling instead of pill-shaped borders
- Character count appears bottom-right aligned
- Password inputs include a "SHOW/HIDE" toggle button
- Required fields show a red asterisk (*) next to the label

## Theme Integration

The component uses your app's color scheme defined in `Colors.js`:
- `Colors.themePoloBlueColor` - Primary text and focus colors
- `Colors.themeLightGrayTextColor` - Placeholder and helper text
- `Colors.recipeUserTextColor` - Input text color
- `#FF6464` - Error state color
- `#D0DBEA` - Default border color

## Best Practices

1. **Always provide `onChangeText`** - This is required for the component to function
2. **Use appropriate `inputType`** - Helps with keyboard optimization and validation
3. **Provide meaningful labels** - Improves accessibility and user experience
4. **Handle validation gracefully** - Show errors only after user interaction
5. **Use `maxLength` with `showCharacterCount`** - Gives users clear feedback about limits
6. **Consistent styling** - Use the same styling patterns across your app

## Platform Differences

The component handles platform-specific differences automatically:
- Android multiline inputs get proper padding adjustments
- iOS and Android keyboard types are mapped appropriately
- Focus behavior adapts to platform conventions

## File Locations

- **Component**: `/src/components/Common/CustomTextInput.js`
- **Example Usage**: `/src/screens/Examples/TextInputExampleScreen.js`
- **Colors**: `/src/utilities/Colors.js`
