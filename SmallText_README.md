# SmallText Component Documentation

## Overview
A lightweight, customizable text component for React Native applications with consistent styling and theming support.

## Features
- ✅ Customizable font size, color, and weight
- ✅ Flexible margin and padding options  
- ✅ Text alignment options
- ✅ Font family selection
- ✅ Line limiting with `numberOfLines`
- ✅ Support for custom styles
- ✅ Press handling capability
- ✅ Integrates with app's color system

## Usage

```javascript
import { SmallText } from '../components/Common';

// Basic usage
<SmallText>Default small text</SmallText>

// With custom properties
<SmallText 
  color="#3E5481"
  fontSize={14}
  fontWeight="700"
  textAlign="center"
  marginTop={10}
>
  Custom styled text
</SmallText>

// Limited lines
<SmallText numberOfLines={2}>
  Long text that will be truncated...
</SmallText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | string/node | - | Text content to display |
| `color` | string | `Colors.themeLightGrayTextColor` | Text color |
| `fontSize` | number | 12 | Font size in pixels |
| `fontWeight` | string | 'normal' | Font weight |
| `textAlign` | string | 'left' | Text alignment |
| `marginTop` | number | 0 | Top margin |
| `marginBottom` | number | 0 | Bottom margin |  
| `marginLeft` | number | 0 | Left margin |
| `marginRight` | number | 0 | Right margin |
| `fontFamily` | string | 'Inter-Regular' | Font family |
| `numberOfLines` | number | - | Maximum lines to display |
| `onPress` | function | - | Press handler |
| `style` | object | - | Custom style overrides |

## Files Created
- `/src/components/Common/SmallText.js` - Main component
- `/src/components/Common/index.js` - Export file
- `/src/screens/SmallTextExample.js` - Usage examples
- `TODO_text_component.md` - Progress tracker

## Integration
The component is ready to use throughout the React Native app and follows the existing styling patterns and color scheme.
