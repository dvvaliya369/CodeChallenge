# 🍳 CodeChallenge - Recipe Sharing App

[![React Native](https://img.shields.io/badge/React_Native-0.75.4-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern React Native application for sharing cooking recipes with camera functionality, built with the latest React Native architecture.

## 📱 Features

- **Recipe Discovery**: Browse through various cooking recipes
- **Camera Integration**: Capture photos of your culinary creations
- **User Stories**: Share cooking experiences
- **Category Filtering**: Find recipes by category
- **Cooking Duration**: Set and track cooking times
- **Modern UI**: Clean, intuitive interface built with React Native Paper

## 🛠️ Technology Stack

### Core Technologies
- **[React Native 0.75.4](https://reactnative.dev/)** - Cross-platform mobile development
- **[React 18.2.0](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TypeScript 5.0.4](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[React Navigation 6.x](https://reactnavigation.org/)** - Navigation library for React Native

### UI & Styling
- **[React Native Paper 5.x](https://reactnativepaper.com/)** - Material Design components
- **[React Native Vector Icons 10.x](https://github.com/oblador/react-native-vector-icons)** - Customizable icons
- **[React Native Reanimated 3.x](https://docs.swmansion.com/react-native-reanimated/)** - Smooth animations

### Camera & Media
- **[React Native Vision Camera 4.x](https://mrousavy.github.io/react-native-vision-camera/)** - Modern camera library
- **[React Native Gesture Handler 2.x](https://docs.swmansion.com/react-native-gesture-handler/)** - Touch and gesture handling

### Development Tools
- **[Node.js 18+](https://nodejs.org/)** - JavaScript runtime
- **[Metro](https://metrobundler.dev/)** - JavaScript bundler
- **[Jest](https://jestjs.io/)** - Testing framework
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 🚀 Getting Started

### Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm or Yarn** - Package manager
- **React Native CLI** - `npm install -g react-native-cli`
- **Xcode 12+** (for iOS development) - [Download](https://developer.apple.com/xcode/)
- **Android Studio** (for Android development) - [Download](https://developer.android.com/studio)

### 📲 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dvvaliya/CodeChallenge.git
   cd CodeChallenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

### 🏃‍♂️ Running the App

#### For iOS Simulator
```bash
# Start Metro bundler
npm start

# Run on iOS (in a new terminal)
npm run ios
# or for specific simulator
npx react-native run-ios --simulator="iPhone 15"
```

#### For Android Device/Emulator
```bash
# Make sure your Android device is connected or emulator is running
adb devices

# Start Metro bundler
npm start

# Run on Android (in a new terminal)
npm run android
```

### 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### 🧹 Cleaning & Troubleshooting

If you encounter issues, try these commands:

```bash
# Clean project
npm run clean

# Reset Metro cache
npm run reset-cache

# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
cd ios && pod install && cd ..
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/           # Static assets
│   │   ├── Fonts/        # Font files (.ttf)
│   │   └── Images/       # Image assets
│   ├── components/       # Reusable UI components
│   │   ├── Home/         # Home screen components
│   │   │   ├── HomeUserStory.js
│   │   │   ├── Category.js
│   │   │   └── HomeRecipeList.js
│   │   └── Post/         # Post screen components
│   │       ├── CookingDurationSlider.js
│   │       └── PostTextInput.js
│   ├── navigations/      # Navigation configuration
│   │   └── Navigator.js  # Main navigator with bottom tabs
│   ├── screens/          # App screens
│   │   ├── Home/         # Home screen
│   │   ├── Post/         # Post creation screen
│   │   ├── Search/       # Search functionality
│   │   ├── Notifications/ # Notifications
│   │   └── Profile/      # User profile
│   ├── styles/           # Global styles
│   │   └── Style.js      # Centralized styling
│   └── utilities/        # Helper functions and constants
│       ├── Colors.js     # Color palette
│       ├── Constant.js   # App constants
│       └── Images.js     # Image references
├── android/              # Android-specific code
├── ios/                  # iOS-specific code
└── __tests__/           # Test files
```

## 🎨 Key Components

### Home Screen Components
- **HomeUserStory**: Displays user stories at the top
- **Category**: Shows recipe categories for filtering
- **HomeRecipeList**: Main recipe list with infinite scroll

### Post Screen Components
- **CookingDurationSlider**: Interactive slider for cooking time
- **PostTextInput**: Reusable text input for recipe details

### Camera Integration
- **Pic.js**: Custom camera overlay with modern UI
- Uses React Native Vision Camera for high-performance image capture

## 🔧 Configuration

### Metro Configuration
The project uses the latest Metro bundler configuration for optimal performance and compatibility with React Native 0.75.x.

### Babel Configuration
Configured with the latest React Native preset and necessary plugins for modern JavaScript features.

### ESLint & Prettier
Code quality is maintained with ESLint and Prettier configurations following React Native best practices.

## 📱 Platform-Specific Notes

### iOS
- Minimum iOS version: 12.0
- Camera permissions configured in `Info.plist`
- Uses CocoaPods for dependency management

### Android
- Minimum SDK version: 21 (Android 5.0)
- Target SDK version: 34 (Android 14)
- Camera permissions configured in `AndroidManifest.xml`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Metro bundler |
| `npm run ios` | Run on iOS simulator |
| `npm run android` | Run on Android device/emulator |
| `npm test` | Run tests |
| `npm run lint` | Lint code |
| `npm run clean` | Clean project build files |
| `npm run reset-cache` | Reset Metro cache |

## 🚨 Troubleshooting

### Common Issues

1. **Metro bundler cache issues**
   ```bash
   npm run reset-cache
   ```

2. **iOS build issues**
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios --clean
   ```

3. **Android build issues**
   ```bash
   cd android && ./gradlew clean && cd ..
   npm run android
   ```

4. **Node modules issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dharmendra Valiya**
- GitHub: [@dvvaliya](https://github.com/dvvaliya)

---

## 📞 Support

For support and questions:
- Create an [issue](https://github.com/dvvaliya/CodeChallenge/issues)
- Review the [troubleshooting](#-troubleshooting) section
- Check React Native [documentation](https://reactnative.dev/docs/getting-started)

---

*Built with ❤️ using React Native*
