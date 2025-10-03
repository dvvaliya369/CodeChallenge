# CodeChallenge React Native App

A comprehensive React Native application showcasing modern mobile development practices with navigation, camera functionality, and interactive UI components.

## 📱 About

This project is a feature-rich React Native application that demonstrates best practices in mobile app development. It includes multiple screens, bottom tab navigation, camera integration, and a well-organized component structure.

### 🎯 Key Features

- **Multi-Screen Navigation**: Home, Post, Search, Notifications, and Profile screens
- **Camera Integration**: Photo capture functionality with custom overlay
- **Interactive Components**: Sliders, text inputs, and user stories
- **Modern UI**: Material Design components with React Native Paper
- **Custom Fonts**: Enhanced typography with custom font integration
- **Gesture Handling**: Smooth animations and interactions

## 🛠 Tech Stack

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile application framework
- **[React Navigation](https://reactnavigation.org/)** - Navigation library for React Native
- **[React Native Paper](https://reactnativepaper.com/)** - Material Design components
- **[React Native Camera](https://react-native-camera.github.io/react-native-camera/)** - Camera functionality
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)** - Customizable icons
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** - Native-driven gesture management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v14 or higher)
- **[React Native CLI](https://reactnative.dev/docs/environment-setup)**
- **[Android Studio](https://developer.android.com/studio)** (for Android development)
- **[Xcode](https://developer.apple.com/xcode/)** (for iOS development - macOS only)
- **[CocoaPods](https://cocoapods.org/)** (for iOS dependencies - macOS only)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd CodeChallenge
```

### 2. Install Dependencies

```bash
# Install npm dependencies
npm install

# For iOS, install CocoaPods dependencies (macOS only)
cd ios && pod install && cd ..
```

### 3. Start Metro Bundler

```bash
npm start
# or
npx react-native start
```

### 4. Run the Application

#### For Android

```bash
# Make sure you have an Android device connected or emulator running
npx react-native run-android
```

#### For iOS (macOS only)

```bash
# Run on iOS simulator
npx react-native run-ios

# Run on specific simulator
npx react-native run-ios --simulator="iPhone 14"

# Run on physical device
npx react-native run-ios --device
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/           # Static assets (fonts, images)
│   │   ├── Fonts/        # Custom font files (.ttf)
│   │   └── Images/       # Image assets
│   ├── components/       # Reusable components
│   │   ├── Home/         # Home screen components
│   │   └── Post/         # Post screen components
│   ├── navigations/      # Navigation configuration
│   ├── screens/          # Screen components
│   │   ├── Home/         # Home screen
│   │   ├── Post/         # Post screen with camera
│   │   ├── Search/       # Search screen
│   │   ├── Notifications/ # Notifications screen
│   │   └── Profile/      # Profile screen
│   ├── styles/           # Global styles
│   └── utilities/        # Utility functions and constants
│       ├── Colors.js     # Color definitions
│       ├── Constants.js  # App constants
│       └── Images.js     # Image references
├── android/              # Android-specific code
├── ios/                  # iOS-specific code
└── __tests__/           # Test files
```

### 📱 Screen Details

1. **Home Screen**: Features user stories, categories, and recipe lists
2. **Post Screen**: Camera integration with custom overlay for photo capture
3. **Search Screen**: Search functionality for content discovery
4. **Notifications Screen**: User notifications and alerts
5. **Profile Screen**: User profile management

### 🎨 Component Architecture

- **Reusable Components**: Modular components for consistency across screens
- **Custom Inputs**: Specialized text inputs with validation
- **Interactive Elements**: Custom sliders and gesture-based components
- **Navigation Components**: Bottom tab navigation with stack navigation

## 🔧 Configuration

### Adding Custom Fonts

1. Place `.ttf` font files in `src/assets/Fonts/`
2. Run `npx react-native link` (or follow manual linking for newer RN versions)
3. Reference fonts in your components

### Adding Images

1. Place image files in `src/assets/Images/`
2. Reference them in `src/utilities/Images.js`
3. Import and use throughout the app

## 📱 Device Recommendations

For the best development and testing experience:

- **Android**: Test on real devices for camera functionality
- **iOS**: iOS Simulator works well for most features
- **Camera Features**: Real devices provide the most accurate testing environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx react-native start --reset-cache`
2. **Android build errors**: Clean and rebuild with `cd android && ./gradlew clean && cd ..`
3. **iOS build errors**: Clean Xcode build folder and rebuild
4. **Dependency issues**: Delete `node_modules` and `package-lock.json`, then `npm install`

### Performance Tips

- Use real devices for camera testing
- Enable Hermes engine for better performance
- Optimize images and reduce bundle size
- Use Flipper for debugging and performance monitoring

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Dharmendra Valiya** - *Initial work and development*

---

## 🔗 Useful Links

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [React Native Paper Documentation](https://reactnativepaper.com/)
- [React Native Camera Documentation](https://react-native-camera.github.io/react-native-camera/)

---

*Built with ❤️ using React Native*
