# React Native Login Page

A beautiful and functional login page built with React Native Paper UI components.

## Features

- **Modern UI Design**: Clean and professional interface using React Native Paper
- **Form Validation**: Input validation with error handling
- **Password Visibility Toggle**: Show/hide password functionality
- **Loading States**: Visual feedback during authentication
- **Social Login Options**: Google and Facebook login chips
- **Responsive Design**: Works on different screen sizes
- **Keyboard Handling**: Proper keyboard avoidance for better UX

## Components Used

### React Native Paper Components:
- `Card` - Main container for the login form
- `TextInput` - Email and password input fields with icons
- `Button` - Login, forgot password, and sign up buttons
- `Title` & `Text` - Typography elements
- `Divider` - Visual separator
- `Chip` - Social login options
- `Provider` - Theme provider for consistent styling

### Key Features:
- **Email Input**: With email icon and proper keyboard type
- **Password Input**: With lock icon and visibility toggle
- **Loading Button**: Shows loading state during authentication
- **Form Validation**: Alerts for empty fields
- **Social Login**: Google and Facebook options
- **Forgot Password**: Quick access to password recovery

## Installation

```bash
# Install dependencies
npm install

# For iOS (if using React Native CLI)
cd ios && pod install

# Start the development server
npm start
```

## Usage

The login page includes:

1. **Email/Password Fields**: Standard login credentials
2. **Sign In Button**: Handles authentication with loading state
3. **Forgot Password**: Password recovery option
4. **Sign Up Link**: Navigation to registration
5. **Social Login**: Alternative authentication methods

## Customization

The app uses a custom theme with:
- Primary color: `#6200ea` (Purple)
- Accent color: `#03dac4` (Teal)

You can modify the theme in the `App.js` file to match your brand colors.

## File Structure

```
├── App.js              # Main application component
├── package.json        # Dependencies and scripts
├── app.json           # Expo configuration
├── babel.config.js    # Babel configuration
└── README.md          # This file
```

## Dependencies

- `react-native-paper`: UI component library
- `react-native-vector-icons`: Icon support
- `expo`: Development platform (optional)

This login page provides a solid foundation for authentication in React Native apps with a modern, Material Design-inspired interface.
