# CodeChallenge React Native App

## Project Documentation

### Developed by Dharmendra Valiya

A recipe sharing mobile application developed in React Native CLI.

## 📱 Features

- **Home Screen**: Browse recipes and user stories
- **Post Screen**: Create and share new recipes with camera integration
- **Search Screen**: Find recipes and users
- **Notifications**: Stay updated with app activities
- **Profile**: Manage your account and view your recipes
- **Settings**: Configure app preferences and account settings

## 🛠 Tech Stack

CodeChallenge uses modern open-source technologies:

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile development framework
- **[React Navigation 6](https://reactnavigation.org/)** - Navigation library for React Native
- **[React Native Paper](https://reactnativepaper.com/)** - Material Design components
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)** - Icon library
- **[React Native Camera](https://react-native-camera.github.io/react-native-camera/)** - Camera functionality
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[npm](https://www.npmjs.com/)** - Package manager
- **[Visual Studio Code](https://code.visualstudio.com/)** - Source code editor
- **[Xcode](https://developer.apple.com/xcode/)** - iOS development environment
- **[Android Studio](https://developer.android.com/studio)** - Android development environment

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** v16+ is required
- **React Native CLI** installed globally
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dvvaliya/CodeChallenge.git
   cd CodeChallenge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **iOS Setup** (if developing for iOS):
   ```bash
   cd ios && pod install && cd ..
   ```

## 📱 Running the App

### Android Device/Emulator
Ensure your Android device is connected via USB with debugging enabled, or start your Android emulator.

```bash
npm start
npx react-native run-android
```

### iOS Device/Simulator
For iOS device, ensure it's connected to your Mac and properly configured for development.

```bash
npm start
npx react-native run-ios
```

### Development Mode
To start the Metro bundler:
```bash
npm start
# or
npx react-native start
```

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Run linting:
```bash
npm run lint
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/           # Fonts and Images
│   │   ├── Fonts/        # Custom fonts (.ttf files)
│   │   └── Images/       # App images and icons
│   ├── components/       # Reusable UI components
│   │   ├── Home/         # Home screen components
│   │   └── Post/         # Post screen components
│   ├── navigations/      # Navigation configuration
│   │   └── Navigator.js  # Main navigation setup
│   ├── screens/          # App screens
│   │   ├── Home/         # Home screen
│   │   ├── Post/         # Post creation screen
│   │   ├── Search/       # Search functionality
│   │   ├── Notifications/ # Notifications screen
│   │   ├── Profile/      # User profile screen
│   │   └── Settings/     # App settings screen
│   ├── styles/           # Global styles
│   │   └── Style.js      # Centralized styling
│   └── utilities/        # Helper functions and constants
│       ├── Colors.js     # Color constants
│       ├── Constants.js  # App constants
│       └── Images.js     # Image imports
├── android/              # Android-specific files
├── ios/                  # iOS-specific files
└── package.json          # Project dependencies
```

## 🎨 Styling Guidelines

- All styles are centralized in `src/styles/Style.js`
- Colors are defined in `src/utilities/Colors.js`
- Images are imported in `src/utilities/Images.js`
- Components follow Material Design principles

## 📱 Screen Details

### Home Screen
- User story carousel at the top
- Recipe categories
- Main recipe feed with user interactions

### Post Screen
- Recipe creation form
- Camera integration for food photos
- Cooking duration slider
- Recipe description input

### Settings Screen (New!)
- App preferences toggle
- Dark mode support
- Notification settings
- Account management options

## 🔧 Development Tips

1. **Adding New Screens**: Place them in `src/screens/[ScreenName]/` and update `Navigator.js`
2. **Reusable Components**: Add to `src/components/` for use across multiple screens
3. **Styling**: Use the centralized style system for consistency
4. **Images**: Add new images to `src/assets/Images/` and reference them in `Images.js`
5. **Colors**: Define new colors in `Colors.js` for theme consistency

## 📝 Recent Updates

### Version Updates
- **React Native**: Updated from 0.64.2 to 0.72.6
- **React**: Updated from 17.0.1 to 18.2.0
- **React Navigation**: Updated from v5 to v6
- **React Native Paper**: Updated from v4 to v5

### New Features
- Added Settings screen with preferences management
- Updated navigation to React Navigation 6
- Improved TypeScript support
- Enhanced development dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Dharmendra Valiya**

---

### 💡 Performance Tips

- For the best camera and UI experience, test on a real Android device via USB debugging or on iOS Simulator
- Enable JavaScript debugging for development
- Use Flipper for advanced debugging and performance monitoring

### 🐛 Troubleshooting

- **Metro bundler issues**: Clear cache with `npx react-native start --reset-cache`
- **iOS build issues**: Clean and rebuild: `cd ios && xcodebuild clean && cd ..`
- **Android build issues**: Clean Gradle: `cd android && ./gradlew clean && cd ..`

For more detailed troubleshooting, refer to the [React Native documentation](https://reactnative.dev/docs/troubleshooting).
