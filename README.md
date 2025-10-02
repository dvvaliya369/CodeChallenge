# CodeChallenge Recipe App

A modern React Native application for sharing and discovering recipes, built with the latest React Native 0.81.4 and React Navigation v6.

## 🚀 Features

- **Recipe Sharing**: Post and share your favorite recipes
- **Recipe Discovery**: Browse through a curated collection of recipes  
- **Camera Integration**: Take photos of your dishes
- **User Profiles**: Manage your profile and settings
- **Search Functionality**: Find recipes easily
- **Push Notifications**: Stay updated with new recipes
- **Modern UI**: Clean and intuitive user interface

## 📱 Screenshots

[Add screenshots of your app here]

## 🛠 Tech Stack

- **React Native**: 0.81.4
- **React**: 18.2.0  
- **React Navigation**: v6.x for navigation
- **React Native Paper**: v5.x for UI components
- **React Native Camera**: For camera functionality
- **React Native Vector Icons**: For iconography
- **React Native Reanimated**: v3.x for animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)

## 🏗 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CodeChallenge.git
   cd CodeChallenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Android Setup**
   - Make sure you have Android Studio installed
   - Open Android Studio and set up an AVD (Android Virtual Device)
   - Or connect a physical Android device with USB debugging enabled

## 🚀 Running the App

### Start Metro Bundler
```bash
npm start
# or
npx react-native start
```

### Run on Android
```bash
npm run android
# or
npx react-native run-android
```

### Run on iOS (macOS only)
```bash
npm run ios  
# or
npx react-native run-ios
```

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
npm run test
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/           # Fonts and images
│   │   ├── Fonts/       # Font files (.ttf)
│   │   └── Images/      # Image assets
│   ├── components/       # Reusable components
│   │   ├── Home/        # Home screen components
│   │   └── Post/        # Post screen components
│   ├── navigations/      # Navigation configuration
│   ├── screens/         # Screen components
│   │   ├── Home/        # Home screen
│   │   ├── Post/        # Post creation screen
│   │   ├── Search/      # Search functionality
│   │   ├── Notifications/ # Notifications screen
│   │   ├── Profile/     # User profile screen
│   │   └── Settings/    # Settings screen (NEW)
│   ├── styles/          # Global styles
│   └── utilities/       # Constants, colors, and utilities
├── android/             # Android-specific code
├── ios/                # iOS-specific code
└── __tests__/          # Test files
```

## 🔧 Configuration

### Adding New Fonts
1. Add `.ttf` font files to `src/assets/Fonts/`
2. The fonts will be automatically linked via the `rnpm` configuration in `package.json`

### Adding New Images  
1. Add image files to `src/assets/Images/`
2. Import and use them via `src/utilities/Images.js`

### Customizing Colors
- Edit `src/utilities/Colors.js` to modify the app's color scheme

## 🔥 What's New in Version 2.0

- ✅ **Updated to React Native 0.81.4** - Latest stable version
- ✅ **Migrated to React Navigation v6** - Improved navigation performance
- ✅ **New Settings Screen** - Comprehensive app settings management
- ✅ **Enhanced UI Components** - Updated to React Native Paper v5
- ✅ **Improved Performance** - Better animations with Reanimated v3
- ✅ **Modern Dependencies** - All packages updated to latest versions

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx react-native start --reset-cache
   ```

2. **Android build issues**
   ```bash
   cd android && ./gradlew clean && cd ..
   ```

3. **iOS build issues**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Dependencies issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dharmendra Valiya**

## 🙏 Acknowledgments

- React Native community
- React Navigation team
- All open source contributors

---

For better camera experience and UI testing, try running on a real Android device via debugging or on iOS Simulator.

**Happy Cooking! 👨‍🍳👩‍🍳**
