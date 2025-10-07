# Button Component

A flexible and reusable Button component for React Native applications.

## Features

- **Multiple Variants**: Primary, Secondary, Outline, Ghost, and Danger styles
- **Three Sizes**: Small, Medium, and Large
- **Icon Support**: Add icons from Material Icons with left or right positioning
- **Loading States**: Built-in loading indicator with customizable color
- **Accessibility**: Full accessibility support with proper labels and states
- **Responsive**: Full-width option and responsive design
- **Customizable**: Custom styles and extensive prop support
- **TypeScript Ready**: (Can be easily converted to TypeScript)

## Installation

Make sure you have `react-native-vector-icons` installed in your project:

```bash
npm install react-native-vector-icons
```

## Basic Usage

```jsx
import Button from './src/components/Button';

// Simple button
<Button
  title="Click Me"
  onPress={() => console.log('Button pressed!')}
/>

// Primary button with icon
<Button
  title="Save"
  variant="primary"
  iconName="save"
  onPress={handleSave}
/>

// Loading button
<Button
  title="Loading..."
  loading={true}
  onPress={handleSubmit}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Button text |
| `onPress` | `function` | - | Press handler function |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `loading` | `boolean` | `false` | Whether to show loading state |
| `fullWidth` | `boolean` | `false` | Whether button should take full width |
| `iconName` | `string` | - | Material Icon name |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position relative to text |
| `style` | `object` | - | Custom button styles |
| `textStyle` | `object` | - | Custom text styles |
| `loadingColor` | `string` | - | Loading indicator color |
| `accessibilityLabel` | `string` | - | Accessibility label |
| `testID` | `string` | - | Test identifier |

## Variants

### Primary (default)
Blue background with white text. Used for primary actions.

```jsx
<Button title="Primary" variant="primary" onPress={handlePress} />
```

### Secondary
Light gray background with dark text. Used for secondary actions.

```jsx
<Button title="Secondary" variant="secondary" onPress={handlePress} />
```

### Outline
Transparent background with blue border and text. Used for less prominent actions.

```jsx
<Button title="Outline" variant="outline" onPress={handlePress} />
```

### Ghost
Transparent background and border with blue text. Used for subtle actions.

```jsx
<Button title="Ghost" variant="ghost" onPress={handlePress} />
```

### Danger
Red background with white text. Used for destructive actions.

```jsx
<Button title="Delete" variant="danger" onPress={handleDelete} />
```

## Sizes

### Small
Compact button for tight spaces.

```jsx
<Button title="Small" size="small" onPress={handlePress} />
```

### Medium (default)
Standard button size for most use cases.

```jsx
<Button title="Medium" size="medium" onPress={handlePress} />
```

### Large
Larger button for prominent actions.

```jsx
<Button title="Large" size="large" onPress={handlePress} />
```

## Advanced Examples

### Button with Icon

```jsx
<Button
  title="Save Document"
  variant="primary"
  iconName="save"
  iconPosition="left"
  onPress={handleSave}
/>
```

### Loading Button

```jsx
<Button
  title="Submitting..."
  loading={isLoading}
  disabled={isLoading}
  onPress={handleSubmit}
/>
```

### Full Width Button

```jsx
<Button
  title="Continue"
  variant="primary"
  size="large"
  fullWidth={true}
  onPress={handleContinue}
/>
```

### Custom Styled Button

```jsx
<Button
  title="Custom Button"
  variant="primary"
  style={{
    borderRadius: 25,
    backgroundColor: '#FF6B6B',
  }}
  textStyle={{
    fontSize: 18,
    fontWeight: 'bold',
  }}
  onPress={handlePress}
/>
```

### Disabled Button

```jsx
<Button
  title="Disabled"
  disabled={true}
  onPress={handlePress}
/>
```

## Accessibility

The Button component includes comprehensive accessibility support:

- Proper `accessibilityRole` set to "button"
- `accessibilityLabel` support for screen readers
- `accessibilityState` that indicates disabled and loading states
- Semantic props for better screen reader experience

```jsx
<Button
  title="Submit Form"
  accessibilityLabel="Submit the contact form"
  onPress={handleSubmit}
/>
```

## Customization

### Colors
You can customize colors by modifying the styles object in the component or by passing custom styles:

```jsx
<Button
  title="Custom Color"
  variant="primary"
  style={{ backgroundColor: '#FF6B6B' }}
  onPress={handlePress}
/>
```

### Icons
The component uses Material Icons. Make sure to check the [Material Icons library](https://fonts.google.com/icons) for available icon names:

```jsx
<Button
  title="Download"
  iconName="download"
  onPress={handleDownload}
/>
```

## Testing

The component includes test support with `testID` prop:

```jsx
<Button
  title="Test Button"
  testID="submit-button"
  onPress={handlePress}
/>
```

## Notes

- The component automatically handles touch feedback with `activeOpacity`
- Loading state automatically disables the button
- Icons are sized appropriately for each button size
- The component is optimized for both iOS and Android platforms
