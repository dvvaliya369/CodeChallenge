# Button Component

A highly customizable and reusable button component for React Native applications.

## Features

- ✅ Multiple variants (primary, secondary, outline, ghost, danger)
- ✅ Three size options (small, medium, large)
- ✅ Loading state with spinner
- ✅ Disabled state
- ✅ Icon support with customizable positioning
- ✅ Full width option
- ✅ Accessibility features (ARIA labels, screen reader support)
- ✅ TypeScript support
- ✅ Customizable styling
- ✅ Touch feedback

## Installation

Import the Button component in your React Native project:

```typescript
import Button from './src/components/Button';
// or
import { Button } from './src/components/Button';
```

## Usage

### Basic Usage

```typescript
import React from 'react';
import { View } from 'react-native';
import Button from './src/components/Button';

const MyScreen = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View>
      <Button
        title="Click me"
        onPress={handlePress}
      />
    </View>
  );
};
```

### Button Variants

```typescript
<Button title="Primary" variant="primary" onPress={handlePress} />
<Button title="Secondary" variant="secondary" onPress={handlePress} />
<Button title="Outline" variant="outline" onPress={handlePress} />
<Button title="Ghost" variant="ghost" onPress={handlePress} />
<Button title="Danger" variant="danger" onPress={handlePress} />
```

### Button Sizes

```typescript
<Button title="Small" size="small" onPress={handlePress} />
<Button title="Medium" size="medium" onPress={handlePress} />
<Button title="Large" size="large" onPress={handlePress} />
```

### With Icons

```typescript
<Button
  title="Save"
  icon="save"
  iconPosition="left"
  onPress={handlePress}
/>

<Button
  title="Next"
  icon="arrow-forward"
  iconPosition="right"
  variant="outline"
  onPress={handlePress}
/>
```

### Loading State

```typescript
<Button
  title="Loading..."
  loading={true}
  onPress={handlePress}
/>
```

### Disabled State

```typescript
<Button
  title="Disabled"
  disabled={true}
  onPress={handlePress}
/>
```

### Full Width

```typescript
<Button
  title="Full Width Button"
  fullWidth={true}
  onPress={handlePress}
/>
```

### Custom Styling

```typescript
<Button
  title="Custom Style"
  style={{
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
  }}
  textStyle={{
    fontSize: 18,
    fontWeight: 'bold',
  }}
  onPress={handlePress}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **Required** | Button text content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button shows loading state |
| `icon` | `string` | `undefined` | Icon name (MaterialIcons) |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position relative to text |
| `iconSet` | `string` | `'MaterialIcons'` | Icon set to use |
| `fullWidth` | `boolean` | `false` | Whether button takes full width |
| `style` | `ViewStyle` | `undefined` | Custom container styles |
| `textStyle` | `TextStyle` | `undefined` | Custom text styles |
| `onPress` | `() => void` | `undefined` | Press handler |
| `onLongPress` | `() => void` | `undefined` | Long press handler |
| `testID` | `string` | `undefined` | Test identifier |
| `accessibilityLabel` | `string` | `title` | Accessibility label |
| `accessibilityHint` | `string` | `undefined` | Accessibility hint |

## TypeScript Support

The component is built with TypeScript and exports all necessary types:

```typescript
import { ButtonProps, ButtonVariant, ButtonSize, IconPosition } from './src/components/Button';
```

## Accessibility

The Button component includes comprehensive accessibility features:

- **Screen Reader Support**: Proper accessibility labels and roles
- **Keyboard Navigation**: Full keyboard support
- **State Announcements**: Loading and disabled states are announced
- **Touch Target**: Minimum 44pt touch target size
- **High Contrast**: Colors meet accessibility guidelines

## Customization

### Colors

The component uses a predefined color palette that can be customized by modifying the `colors` object in `styles.ts`:

```typescript
const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  danger: '#FF3B30',
  // ... other colors
};
```

### Styling

You can override styles using the `style` and `textStyle` props, or modify the base styles in `styles.ts`.

## Dependencies

- `react-native-vector-icons`: For icon support
- `react-native`: Core React Native components

## Examples

Check the example usage file for more comprehensive examples:

```bash
src/components/Button/ButtonExample.tsx
```

## License

This component is part of your React Native project and follows your project's license.
