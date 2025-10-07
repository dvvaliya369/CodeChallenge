# Button Component

A reusable, customizable Button component for React Native applications.

## Features

- ✅ Multiple variants (primary, secondary, outline, danger, success, warning, ghost)
- ✅ Three sizes (small, medium, large)
- ✅ Loading state with spinner
- ✅ Disabled state
- ✅ Custom styling support
- ✅ Accessibility support
- ✅ Flexible content (text, icons, custom children)
- ✅ Touch feedback with customizable opacity

## Installation

The Button component is located at `src/components/Common/Button.js` and can be imported as:

```javascript
import { Button } from '../components/Common';
// or
import Button from '../components/Common/Button';
```

## Basic Usage

```javascript
import React from 'react';
import { Button } from '../components/Common';

const MyScreen = () => {
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
| `title` | string | - | Text to display on the button |
| `onPress` | function | - | Function to call when button is pressed |
| `variant` | string | 'primary' | Button style variant |
| `size` | string | 'medium' | Button size |
| `disabled` | boolean | false | Whether the button is disabled |
| `loading` | boolean | false | Whether to show loading spinner |
| `style` | object/array | - | Custom styles for the button container |
| `textStyle` | object/array | - | Custom styles for the button text |
| `children` | ReactNode | - | Custom content (overrides title) |
| `testID` | string | - | Test identifier for testing |

## Variants

### Primary (default)
```javascript
<Button title="Primary" variant="primary" onPress={handlePress} />
```

### Secondary
```javascript
<Button title="Secondary" variant="secondary" onPress={handlePress} />
```

### Outline
```javascript
<Button title="Outline" variant="outline" onPress={handlePress} />
```

### Danger
```javascript
<Button title="Danger" variant="danger" onPress={handlePress} />
```

### Success
```javascript
<Button title="Success" variant="success" onPress={handlePress} />
```

### Warning
```javascript
<Button title="Warning" variant="warning" onPress={handlePress} />
```

### Ghost
```javascript
<Button title="Ghost" variant="ghost" onPress={handlePress} />
```

## Sizes

### Small
```javascript
<Button title="Small" size="small" onPress={handlePress} />
```

### Medium (default)
```javascript
<Button title="Medium" size="medium" onPress={handlePress} />
```

### Large
```javascript
<Button title="Large" size="large" onPress={handlePress} />
```

## States

### Disabled
```javascript
<Button title="Disabled" disabled={true} onPress={handlePress} />
```

### Loading
```javascript
<Button title="Loading" loading={true} onPress={handlePress} />
```

## Custom Content

You can use custom content instead of just text by using the `children` prop:

```javascript
<Button variant="outline" onPress={handlePress}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 16, marginRight: 8 }}>🚀</Text>
    <Text style={{ fontSize: 16, fontWeight: '600', color: '#007AFF' }}>
      Custom Content
    </Text>
  </View>
</Button>
```

## Custom Styling

You can customize the appearance using the `style` and `textStyle` props:

```javascript
<Button
  title="Custom Style"
  variant="primary"
  onPress={handlePress}
  style={{
    borderRadius: 20,
    paddingHorizontal: 40,
  }}
  textStyle={{
    fontSize: 18,
    fontWeight: 'bold',
  }}
/>
```

## Color Scheme

The component uses the following color scheme:

- **Primary**: #007AFF (iOS Blue)
- **Secondary**: #F2F2F7 (Light Gray background)
- **Danger**: #FF3B30 (iOS Red)
- **Success**: #34C759 (iOS Green)
- **Warning**: #FF9500 (iOS Orange)
- **Text**: #FFFFFF (White for solid backgrounds), #007AFF (Blue for transparent/outline)

## Accessibility

The Button component includes proper accessibility support:

- `accessibilityRole="button"`
- `accessibilityState` indicates disabled/loading state
- Proper touch target size (minimum 44pt for medium and large buttons)

## Examples

See `src/examples/ButtonExamples.js` for a comprehensive showcase of all button variants, sizes, and states.

## Testing

The component accepts a `testID` prop for easy testing:

```javascript
<Button
  title="Test Button"
  testID="my-test-button"
  onPress={handlePress}
/>
```

## Customization

The component uses React Native's `StyleSheet` for styling. You can extend or override styles by:

1. Using the `style` prop for container styles
2. Using the `textStyle` prop for text styles
3. Modifying the component's internal styles if needed

## Dependencies

The component uses only React Native core components:
- `TouchableOpacity`
- `Text`
- `StyleSheet`
- `ActivityIndicator`
- `View`

No external dependencies are required.
