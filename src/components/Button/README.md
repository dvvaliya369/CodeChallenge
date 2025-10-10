# CustomButton Component

A comprehensive, reusable button component for React Native applications built with React Native Paper.

## Features

- **Multiple Modes**: Contained, outlined, text, elevated, and contained-tonal
- **Flexible Sizing**: Small, medium, and large size options
- **Color Variants**: Primary, secondary, success, danger, warning, and info themes
- **Interactive States**: Loading, disabled, pressed states with visual feedback
- **Icon Support**: Left or right positioned icons with customizable options
- **Accessibility**: Full accessibility support with labels, hints, and states
- **Custom Styling**: Extensive customization options for colors, styles, and layout
- **Advanced Features**: Long press support, full width option, elevation control

## Basic Usage

```javascript
import { CustomButton } from '../components/Button';

// Simple button
<CustomButton
  title="Click Me"
  onPress={() => console.log('Button pressed!')}
/>

// Outlined button with icon
<CustomButton
  title="Save"
  mode="outlined"
  icon="content-save"
  onPress={handleSave}
/>
```

## Props

### Required Props
- `title` (string): The text to display on the button

### Optional Props

#### Basic Configuration
- `onPress` (function): Callback when button is pressed
- `disabled` (boolean): Disables the button - default: `false`
- `loading` (boolean): Shows loading indicator - default: `false`
- `mode` (string): Button style mode - default: `'contained'`
  - Options: `'text'`, `'outlined'`, `'contained'`, `'elevated'`, `'contained-tonal'`

#### Sizing and Layout
- `size` (string): Button size - default: `'medium'`
  - Options: `'small'`, `'medium'`, `'large'`
- `fullWidth` (boolean): Makes button take full width - default: `false`

#### Colors and Theming
- `variant` (string): Predefined color theme - default: `'primary'`
  - Options: `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`
- `color` (string): Custom button color
- `backgroundColor` (string): Custom background color
- `textColor` (string): Custom text color

#### Icons
- `icon` (string): Icon name from Material Design Icons
- `iconPosition` (string): Icon position - default: `'left'`
  - Options: `'left'`, `'right'`

#### Styling
- `style` (object): Custom styles for the button container
- `buttonStyle` (object): Custom styles for the button element
- `textStyle` (object): Custom styles for the button text
- `elevation` (number): Shadow depth for the button

#### Interaction
- `onLongPress` (function): Callback for long press events
- `testID` (string): Test identifier for automated testing

#### Accessibility
- `accessibilityLabel` (string): Accessibility label
- `accessibilityHint` (string): Accessibility hint

## Examples

### Different Button Modes

```javascript
// Contained (default)
<CustomButton title="Contained" onPress={handlePress} />

// Outlined
<CustomButton
  title="Outlined"
  mode="outlined"
  onPress={handlePress}
/>

// Text
<CustomButton
  title="Text"
  mode="text"
  onPress={handlePress}
/>
```

### Button Sizes

```javascript
// Small
<CustomButton title="Small" size="small" onPress={handlePress} />

// Medium (default)
<CustomButton title="Medium" onPress={handlePress} />

// Large
<CustomButton title="Large" size="large" onPress={handlePress} />
```

### Color Variants

```javascript
// Success variant
<CustomButton
  title="Success"
  variant="success"
  onPress={handlePress}
/>

// Danger variant
<CustomButton
  title="Delete"
  variant="danger"
  onPress={handleDelete}
/>

// Custom colors
<CustomButton
  title="Custom"
  backgroundColor="#ff6b6b"
  textColor="#ffffff"
  onPress={handlePress}
/>
```

### Loading and Disabled States

```javascript
// Loading state
<CustomButton
  title="Saving..."
  loading={isLoading}
  onPress={handleSave}
/>

// Disabled state
<CustomButton
  title="Disabled"
  disabled={true}
  onPress={handlePress}
/>
```

### Buttons with Icons

```javascript
// Icon on the left
<CustomButton
  title="Save"
  icon="content-save"
  onPress={handleSave}
/>

// Icon on the right
<CustomButton
  title="Next"
  icon="arrow-right"
  iconPosition="right"
  onPress={handleNext}
/>
```

### Full Width Button

```javascript
<CustomButton
  title="Full Width Button"
  fullWidth
  onPress={handlePress}
/>
```

### Advanced Features

```javascript
// With long press support
<CustomButton
  title="Press & Hold"
  onPress={handlePress}
  onLongPress={handleLongPress}
/>

// With custom elevation
<CustomButton
  title="Elevated"
  elevation={8}
  onPress={handlePress}
/>
```

## Styling

The component provides multiple levels of customization:

```javascript
<CustomButton
  title="Styled Button"
  style={{ margin: 20 }}           // Container styles
  buttonStyle={{ borderRadius: 25 }} // Button element styles  
  textStyle={{ fontWeight: 'bold' }}  // Text styles
  onPress={handlePress}
/>
```

## Accessibility

The component includes comprehensive accessibility support:

- Automatic accessibility labels from title prop
- Support for custom accessibility labels and hints
- Proper accessibility roles and states
- Loading and disabled state announcements

```javascript
<CustomButton
  title="Submit Form"
  accessibilityLabel="Submit the contact form"
  accessibilityHint="Double tap to submit your information"
  onPress={handleSubmit}
/>
```

## Testing

The component supports automated testing with test IDs:

```javascript
<CustomButton
  title="Test Button"
  testID="submit-button"
  onPress={handlePress}
/>
```

## Dependencies

This component requires:
- React Native
- React Native Paper
- PropTypes (for development)

## Notes

- The component uses React Native Paper's Button as the base, ensuring consistency with Material Design guidelines
- All React Native Paper Button props are supported through prop spreading
- The component is fully accessible and follows React Native accessibility best practices
- Loading state automatically disables the button and shows a loading indicator
- Icon support requires Material Design Icons to be properly configured in your project
