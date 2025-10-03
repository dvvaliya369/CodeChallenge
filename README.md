# CodeChallenge 🍳

## Project Overview

A modern React Native application for recipe sharing and cooking experiences. Built with React Native CLI, this app provides a comprehensive platform for food enthusiasts to discover, share, and create culinary content.

### 📱 Features

- **Recipe Discovery**: Browse through various categories of recipes
- **Recipe Sharing**: Share your own recipes with the community
- **Camera Integration**: Capture and share photos of your culinary creations
- **User Stories**: Share cooking experiences and tips
- **Search Functionality**: Find specific recipes and ingredients
- **Notifications**: Stay updated with community activities
- **User Profiles**: Manage your recipes and preferences

## 🛠 Tech Stack

This project leverages modern mobile development tools and frameworks:

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile app framework by Meta
- **[React Navigation](https://reactnavigation.org/)** - Navigation library for React Native
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** - Material Design components
- **[React Native Camera](https://github.com/react-native-camera/react-native-camera)** - Camera functionality
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[npm](https://www.npmjs.com/)** - Package manager for JavaScript
- **[Visual Studio Code](https://code.visualstudio.com/)** - Source code editor
- **[Xcode](https://developer.apple.com/xcode/)** - IDE for iOS development
- **[Android Studio](https://developer.android.com/studio)** - IDE for Android development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v16+ (recommended v18+)
- **React Native CLI** or **Expo CLI**
- **Xcode** (for iOS development on macOS)
- **Android Studio** (for Android development)
- **CocoaPods** (for iOS dependencies)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dvvaliya/CodeChallenge.git
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

## 🏃‍♂️ Running the Application

### Android
Make sure you have an Android device connected or Android emulator running.

```bash
# Start the Metro bundler
npm start

# Run on Android
npx react-native run-android
```

### iOS
Make sure you have Xcode installed and an iOS device connected or simulator running.

```bash
# Start the Metro bundler
npm start

# Run on iOS
npx react-native run-ios
```

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

## 📁 Project Structure

The codebase is organized for scalability and maintainability:

```
CodeChallenge/
├── src/
│   ├── assets/
│   │   ├── Fonts/          # Custom fonts (.ttf files)
│   │   └── Images/         # App images and icons
│   ├── components/
│   │   ├── Home/           # Home screen components
│   │   │   ├── HomeUserStory.js
│   │   │   ├── Category.js
│   │   │   └── HomeRecipeList.js
│   │   └── Post/           # Post screen components
│   │       ├── CookingDurationSlider.js
│   │       └── PostTextInput.js
│   ├── navigations/
│   │   └── Navigator.js    # Main navigation configuration
│   ├── screens/
│   │   ├── Home/           # Home screen
│   │   ├── Post/           # Post creation screens
│   │   ├── Search/         # Search functionality
│   │   ├── Notifications/  # Notification screen
│   │   └── Profile/        # User profile
│   ├── styles/
│   │   └── Style.js        # Global styles
│   └── utilities/
│       ├── Colors.js       # Color constants
│       ├── Constants.js    # App constants
│       └── Images.js       # Image imports
├── android/               # Android specific code
├── ios/                   # iOS specific code
└── __tests__/            # Test files
```

### Key Directories:

- **`assets/`**: Static resources (fonts, images)
- **`components/`**: Reusable UI components organized by feature
- **`navigations/`**: Navigation structure and routing
- **`screens/`**: Main application screens
- **`styles/`**: Centralized styling
- **`utilities/`**: Constants, helpers, and utilities

## 🔧 Development Guidelines

### Adding New Screens
1. Create screen component in appropriate `src/screens/` folder
2. Add navigation route in `src/navigations/Navigator.js`
3. Update any required navigation flows

### Adding New Components
1. Create reusable components in `src/components/`
2. Follow existing naming conventions
3. Import and use across multiple screens when applicable

### Styling
- Use `src/styles/Style.js` for global styles
- Reference colors from `src/utilities/Colors.js`
- Maintain consistent design patterns

## 📱 Supported Platforms

- **iOS**: 11.0+
- **Android**: API level 21+ (Android 5.0+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dharmendra Valiya**
- GitHub: [@dvvaliya](https://github.com/dvvaliya)

## 🚨 Troubleshooting

### Common Issues:

1. **Metro bundler issues**: Clear cache with `npx react-native start --reset-cache`
2. **iOS pod installation**: Run `cd ios && pod deintegrate && pod install`
3. **Android build issues**: Clean build with `cd android && ./gradlew clean`

### Performance Tips:
- Test on real devices for camera and UI performance
- Use iOS Simulator and Android Emulator for development
- Enable Flipper for debugging (React Native 0.62+)

---

**Note**: For the best camera experience and UI performance, testing on real devices is recommended.
