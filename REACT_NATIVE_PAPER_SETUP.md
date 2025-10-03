# React Native Paper Setup Guide

## Overview
React Native Paper has been successfully set up in this project. This guide provides information on the configuration and usage.

## What's Been Configured

### 1. Paper Provider
- Added `PaperProvider` wrapper in `App.js`
- Configured with custom theme

### 2. Custom Theme
- Created custom theme in `/src/theme/paperTheme.js`
- Theme uses existing project colors from `Colors.js`
- Custom font configuration using Inter fonts

### 3. Example Components
- Created demo component at `/src/components/examples/PaperExampleComponent.js`
- Added navigation route for testing Paper components

## Available Components

React Native Paper provides many Material Design components:

### Core Components
- **Button** - Material design buttons with various modes
- **Card** - Material design cards with titles, content, and actions
- **FAB** (Floating Action Button) - Circular action button
- **Chip** - Compact elements for tags or selections
- **Avatar** - Profile pictures and icons

### Form Components
- **TextInput** - Material design text inputs
- **Checkbox** - Material checkboxes
- **RadioButton** - Radio button groups
- **Switch** - Toggle switches

### Navigation Components
- **BottomNavigation** - Material bottom navigation
- **TabBar** - Material tab bars
- **Drawer** - Navigation drawer

### Other Components
- **Snackbar** - Temporary messages
- **Dialog** - Modal dialogs
- **Banner** - Prominent messages
- **ProgressBar** - Loading indicators

## Theme Customization

The theme can be customized by modifying `/src/theme/paperTheme.js`:

```javascript
export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.themeYellowColor, // Main theme color
    accent: Colors.themeYellowColor,  // Accent color
    surface: '#FFFFFF',               // Card/surface color
    background: '#F5F5F5',            // Background color
  },
  fonts: {
    // Custom font configuration
    regular: { fontFamily: 'Inter-Regular' },
    medium: { fontFamily: 'Inter-Medium' },
    // ... more fonts
  },
};
```

## Usage Examples

### Basic Button
```javascript
import { Button } from 'react-native-paper';

<Button mode="contained" onPress={handlePress}>
  Click Me
</Button>
```

### Card with Content
```javascript
import { Card, Title, Paragraph } from 'react-native-paper';

<Card>
  <Card.Content>
    <Title>Card Title</Title>
    <Paragraph>Card content goes here</Paragraph>
  </Card.Content>
</Card>
```

### Using Theme
```javascript
import { useTheme } from 'react-native-paper';

const MyComponent = () => {
  const theme = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.surface }}>
      {/* Component content */}
    </View>
  );
};
```

## Testing
- Navigate to the Paper Example screen from the Home tab to see components in action
- All components use the custom theme colors and fonts
- Vector icons work with Material Design icons

## Dependencies Installed
- `react-native-paper@4.9.2` - Main UI library
- `react-native-vector-icons@8.1.0` - Icons (already installed)
- `react-native-safe-area-context@3.2.0` - Safe area handling (already installed)

## Next Steps
- Replace custom components with Paper components where appropriate
- Customize theme further if needed
- Remove the demo components once familiar with Paper
