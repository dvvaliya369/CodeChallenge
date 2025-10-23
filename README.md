# Button Component Project

A reusable React button component with TypeScript support and pre-commit hooks for code quality.

## Features

- 🎨 **Multiple Variants**: Primary, Secondary, Outline, Ghost, and Danger styles
- 📏 **Flexible Sizes**: Small, Medium, and Large options
- 🔧 **TypeScript Support**: Fully typed with comprehensive prop interfaces
- ♿ **Accessibility**: ARIA compliant with proper focus management
- 🎭 **Icons Support**: Start and end icon placement
- ⚡ **Loading State**: Built-in loading spinner and state management
- 📱 **Responsive**: Mobile-friendly design with responsive breakpoints
- 🌙 **Dark Mode**: Automatic dark mode support
- 🎯 **Pre-commit Hooks**: Automated linting and formatting before commits

## Installation

```bash
npm install
```

## Usage

### Basic Button

```tsx
import { Button } from './components';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}
```

### Advanced Usage

```tsx
import { Button } from './components';

function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Perform async operation
    await submitForm();
    setLoading(false);
  };

  return (
    <div>
      {/* Different variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>

      {/* Different sizes */}
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>

      {/* With icons */}
      <Button startIcon="📧">Email</Button>
      <Button endIcon="→">Next</Button>

      {/* Loading state */}
      <Button loading={loading} onClick={handleSubmit}>
        Submit
      </Button>

      {/* Full width */}
      <Button fullWidth variant="primary">
        Full Width
      </Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </div>
  );
}
```

## Props

| Prop        | Type                                                           | Default     | Description          |
| ----------- | -------------------------------------------------------------- | ----------- | -------------------- |
| `children`  | `ReactNode`                                                    | -           | Button content       |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size`      | `'small' \| 'medium' \| 'large'`                               | `'medium'`  | Button size          |
| `loading`   | `boolean`                                                      | `false`     | Loading state        |
| `fullWidth` | `boolean`                                                      | `false`     | Full width button    |
| `startIcon` | `ReactNode`                                                    | -           | Icon before text     |
| `endIcon`   | `ReactNode`                                                    | -           | Icon after text      |
| `disabled`  | `boolean`                                                      | `false`     | Disabled state       |

All standard HTML button attributes are also supported.

## Development

### Scripts

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically run code quality checks before each commit:

- **ESLint**: Checks for code quality and potential errors
- **Prettier**: Ensures consistent code formatting
- **TypeScript**: Validates type correctness

The pre-commit hook will:

1. Run ESLint with auto-fix on staged JavaScript/TypeScript files
2. Format staged files with Prettier
3. Prevent commit if there are linting errors that can't be auto-fixed

### File Structure

```
├── components/
│   ├── Button.tsx      # Main button component
│   ├── Button.css      # Button styles
│   └── index.ts        # Export declarations
├── src/
│   └── ButtonExamples.tsx  # Usage examples
├── .husky/
│   └── pre-commit      # Git pre-commit hook
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Customization

### Styling

The button component uses CSS custom properties (CSS variables) for easy theming. You can override the default styles by modifying the CSS variables in your global styles:

```css
:root {
  --btn-primary-bg: #your-color;
  --btn-primary-hover: #your-hover-color;
  /* Add more custom properties as needed */
}
```

### Adding New Variants

To add new button variants:

1. Update the `ButtonProps` interface in `Button.tsx`
2. Add corresponding CSS classes in `Button.css`
3. Update the component logic to handle the new variant

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills for CSS Grid if needed)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the linting and formatting checks
5. Commit your changes (pre-commit hooks will run automatically)
6. Push and create a pull request

## License

MIT License - see LICENSE file for details
