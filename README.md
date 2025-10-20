# CodeChallenge

A React Native mobile application for recipe sharing and cooking experiences.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- For iOS: [Xcode](https://developer.apple.com/xcode/)
- For Android: [Android Studio](https://developer.android.com/studio)

## Installation

1. Clone the repository
```bash
git clone https://github.com/dvvaliya/CodeChallenge.git
cd CodeChallenge
```

2. Install dependencies
```bash
npm install
```

3. For iOS, install CocoaPods dependencies
```bash
cd ios && pod install && cd ..
```

## Running the App

### Android
```bash
# Start Metro bundler
npm start

# Run on Android device/emulator
npm run android
```

### iOS
```bash
# Start Metro bundler
npm start

# Run on iOS device/simulator
npm run ios
```

## Testing

```bash
npm test
```

## Project Structure

```
src/
├── assets/         # Fonts and images
├── components/     # Reusable UI components
├── navigations/    # Navigation configuration
├── screens/        # App screens
├── styles/         # Global styles
└── utilities/      # Constants, colors, and helper functions
```

## Features

- Recipe browsing and sharing
- Camera integration for food photography
- User stories and categories
- Cooking duration slider
- Cross-platform support (iOS & Android)

## Built With

- [React Native](https://reactnative.dev/) - Mobile app framework
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [React Native Camera](https://github.com/react-native-camera/react-native-camera) - Camera integration
- [React Native Paper](https://reactnativepaper.com/) - Material Design components

## Author

Dharmendra Valiya
