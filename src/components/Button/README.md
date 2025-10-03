# Button Component

A customizable and accessible Button component for React Native with multiple variants, sizes, and states.

## Features

- **Multiple Variants**: primary, secondary, outline, ghost
- **Size Options**: small, medium, large
- **States**: disabled, loading with activity indicator
- **Accessibility**: Built-in accessibility support
- **Icon Support**: Left and right icon placement
- **Customizable**: Custom styles and text styles
- **TypeScript Ready**: PropTypes validation included

## Installation

The component is already included in your project. Simply import it:

```javascript
import Button from './src/components/Button';
```

## Basic Usage

```javascript
import React from 'react';
import Button from './src/components/Button';

const MyComponent = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <Button
      title="Click Me"
      onPress={handlePress}
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Button text |
| `onPress` | `function` | - | Function called when button is pressed |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether to show loading indicator |
| `style` | `object` | `{}` | Custom style object for the button |
| `textStyle` | `object` | `{}` | Custom style object for the text |
| `leftIcon` | `React.ReactNode` | `null` | Icon to display on the left |
| `rightIcon` | `React.ReactNode` | `null` | Icon to display on the right |
| `accessibilityLabel` | `string` | - | Accessibility label |

## Examples

### Button Variants

```javascript
// Primary button (default)
<Button title="Primary" onPress={handlePress} />

// Secondary button
<Button title="Secondary" variant="secondary" onPress={handlePress} />

// Outline button
<Button title="Outline" variant="outline" onPress={handlePress} />

// Ghost button
<Button title="Ghost" variant="ghost" onPress={handlePress} />
```

### Button Sizes

```javascript
// Small button
<Button title="Small" size="small" onPress={handlePress} />

// Medium button (default)
<Button title="Medium" onPress={handlePress} />

// Large button
<Button title="Large" size="large" onPress={handlePress} />
```

### Button States

```javascript
// Disabled button
<Button title="Disabled" disabled onPress={handlePress} />

// Loading button
<Button title="Loading" loading onPress={handlePress} />
```

### Custom Styling

```javascript
<Button
  title="Custom Button"
  onPress={handlePress}
  style={{
    backgroundColor: '#FF6B35',
    borderRadius: 25,
  }}
  textStyle={{
    color: '#FFFFFF',
    fontWeight: 'bold',
  }}
/>
```

### With Icons

```javascript
import Icon from 'react-native-vector-icons/MaterialIcons';

<Button
  title="With Icons"
  leftIcon={<Icon name="star" size={20} color="#FFFFFF" />}
  rightIcon={<Icon name="arrow-forward" size={20} color="#FFFFFF" />}
  onPress={handlePress}
/>
```

## Accessibility

The Button component includes built-in accessibility features:

- Proper `accessibilityRole` set to "button"
- `accessibilityState` reflects disabled/loading states
- `accessibilityLabel` support
- Keyboard navigation support

## Styling

The component uses a flexible styling system with predefined variants and sizes, but allows for complete customization through the `style` and `textStyle` props.

### Default Colors

- **Primary**: Blue (#007AFF) background with white text
- **Secondary**: Light gray (#F2F2F7) background with blue text
- **Outline**: Transparent background with blue border and text
- **Ghost**: Transparent background and border with blue text

### Default Sizes

- **Small**: 32px min-height, 14px font size
- **Medium**: 44px min-height, 16px font size
- **Large**: 52px min-height, 18px font size

## Testing

To test the component, you can use the included `ButtonExamples.js` file which demonstrates all the different variants, sizes, and states:

```javascript
import ButtonExamples from './src/components/Button/ButtonExamples';
```

This will show you all the different button styles and interactions in action.
