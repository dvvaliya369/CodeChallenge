# Button Component with Pre-commit Hook

## Project Overview

This project contains a reusable Button component for React Native with a pre-commit hook setup to ensure code quality and consistency.

## Button Component Features

### Props

- **title** (string, required): The text displayed on the button
- **onPress** (function, required): Callback function executed when button is pressed
- **variant** (string, optional): Button style variant
  - `primary` (default): Blue background with white text
  - `secondary`: Gray background with white text
  - `outline`: Transparent background with blue border and text
  - `danger`: Red background with white text
- **size** (string, optional): Button size
  - `small`: Smaller padding and font size
  - `medium` (default): Standard padding and font size
  - `large`: Larger padding and font size
- **disabled** (boolean, optional): Disables the button and applies disabled styling
- **style** (ViewStyle, optional): Custom style overrides for the button container
- **textStyle** (TextStyle, optional): Custom style overrides for the button text
- **testID** (string, optional): Test identifier for testing purposes

### Usage Example

```tsx
import React from 'react';
import { Alert } from 'react-native';
import { Button } from './src/components';

const MyComponent = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <>
      <Button title="Primary Button" onPress={handlePress} variant="primary" size="medium" />

      <Button title="Outline Button" onPress={handlePress} variant="outline" size="large" />

      <Button title="Disabled Button" onPress={handlePress} disabled />
    </>
  );
};
```

## Pre-commit Hook Setup

The project includes a pre-commit hook that automatically:

1. Formats code using Prettier
2. Ensures consistent code styling across all JavaScript, TypeScript, and JSON files

### Tools Configured

- **Husky**: Git hooks made easy
- **lint-staged**: Run linters on git staged files
- **Prettier**: Code formatter for consistent styling

### How It Works

When you commit changes, the pre-commit hook automatically:

1. Detects staged files matching specified patterns
2. Applies Prettier formatting to JavaScript, TypeScript, and JSON files
3. Stages the formatted files
4. Proceeds with the commit if all checks pass

### Manual Commands

You can also run these commands manually:

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check

# Run linting and formatting on staged files
npx lint-staged
```

## Testing

The Button component includes comprehensive unit tests covering:

- Default rendering and props
- User interaction (press events)
- Different variants and sizes
- Disabled state behavior
- Custom styling application

Run tests with:

```bash
npm test -- Button.test.tsx
```

## File Structure

```
├── src/
│   └── components/
│       ├── Button.tsx          # Main button component
│       └── index.ts            # Component exports
├── __tests__/
│   └── Button.test.tsx         # Button component tests
├── .husky/
│   └── pre-commit              # Pre-commit hook script
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── ButtonExampleApp.tsx        # Example usage app
└── package.json                # Dependencies and scripts
```

## Dependencies

### Production Dependencies

- React Native and related libraries (existing)

### Development Dependencies

- **husky**: Git hooks
- **lint-staged**: Staged file processing
- **prettier**: Code formatting
- **@testing-library/react-native**: Testing utilities

## Setup Instructions

1. The pre-commit hooks are already configured and will run automatically
2. Import and use the Button component from `./src/components`
3. Run tests to verify everything works: `npm test -- Button.test.tsx`
4. Check out `ButtonExampleApp.tsx` for usage examples

The pre-commit hook ensures that all code follows consistent formatting standards before being committed to the repository.
