# CodeChallenge - Recipe App
## Project Documentation

### Developed by Dharmendra Valiya
### Updated to React Native 0.72.6

A comprehensive recipe application built with React Native CLI, featuring a modern UI for browsing, creating, and managing recipes.

## 🚀 Recent Updates (v2.0)

- **React Native upgraded** from 0.64.2 to 0.72.6
- **React Navigation updated** from v5 to v6
- **New Recipe Screen** added with filtering capabilities
- **Enhanced navigation** with improved tab bar styling
- **Updated dependencies** for better performance and security
- **Modern component structure** with hooks and functional components

## ✨ Features

- **Home Screen**: Browse featured recipes and user stories
- **Search Screen**: Find recipes with advanced search functionality
- **Post Screen**: Create and share new recipes with camera integration
- **Recipe Collection**: View and filter your saved recipes
- **Profile Screen**: Manage your account and access recipe collection
- **Notifications**: Stay updated with recipe interactions

## 🛠 Tech Stack

CodeChallenge uses modern open-source tools:

- **[React Native 0.72.6]** - Latest stable version of Facebook's mobile framework
- **[React Navigation v6]** - Modern navigation library with improved performance
- **[React Native Paper v5]** - Material Design components
- **[React Native Reanimated v3]** - High-performance animations
- **[React Native Screens v3]** - Native navigation primitives
- **[Node.js v16+]** - JavaScript runtime environment
- **[npm/yarn]** - Package manager for JavaScript
- **[Visual Studio Code]** - Microsoft's source-code editor
- **[Xcode]** - Apple's IDE for iOS development
- **[Android Studio]** - Google's IDE for Android development

## 📋 Prerequisites

- Node.js v16+ ([Download](https://nodejs.org/))
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- Cocoapods (for iOS dependencies)

## ⚡ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/dvvaliya/CodeChallenge.git
cd CodeChallenge
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **iOS Setup:**
```bash
cd ios
pod install
cd ..
```

## 🚀 Running the App

### Android
Make sure your Android device is connected or emulator is running:
```bash
npm start
# In a new terminal:
npx react-native run-android
```

### iOS
For iOS device or simulator:
```bash
npm start
# In a new terminal:
npx react-native run-ios
```

### Testing
```bash
npm run test
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/          # Fonts and Images
│   │   ├── Fonts/       # TTF font files
│   │   └── Images/      # App images and icons
│   ├── components/      # Reusable components
│   │   ├── Home/        # Home screen components
│   │   └── Post/        # Post screen components
│   ├── navigations/     # Navigation configuration
│   ├── screens/         # All app screens
│   │   ├── Home/        # Home screen
│   │   ├── Post/        # Post creation screen
│   │   ├── Search/      # Recipe search screen
│   │   ├── Recipes/     # Recipe collection screen (NEW)
│   │   ├── Profile/     # User profile screen
│   │   └── Notifications/ # Notifications screen
│   ├── styles/          # Global styles
│   ├── utilities/       # Constants, colors, and utilities
│   └── ...
├── android/             # Android-specific code
├── ios/                 # iOS-specific code
└── ...
```

## 📱 Screens Overview

### 🏠 Home Screen
- Featured recipes display
- User stories carousel
- Category-based browsing
- Quick navigation to popular recipes

### 🔍 Search Screen
- Advanced recipe search
- Filter by ingredients, cooking time, difficulty
- Search history and suggestions

### ➕ Post Screen
- Create new recipes
- Camera integration for food photos
- Cooking duration slider
- Rich text input for descriptions

### 📚 Recipe Collection (NEW)
- Personal recipe library
- Filter by difficulty (Easy, Medium, Hard)
- Recipe ratings and cooking time
- Detailed recipe view with ingredients

### 👤 Profile Screen
- User account management
- Access to recipe collection
- Settings and preferences

### 🔔 Notifications Screen
- Recipe interaction notifications
- Updates from followed users
- System announcements

## 🎨 Component Architecture

### Reusable Components

**Home Components:**
- `HomeUserStory.js` - Top carousel for user stories
- `Category.js` - Recipe category display
- `HomeRecipeList.js` - Main recipe list component

**Post Components:**
- `CookingDurationSlider.js` - Interactive cooking time slider
- `PostTextInput.js` - Enhanced text input for recipes

### Styling System
- **Style.js** - Centralized styling system
- **Colors.js** - App color palette
- **Constants.js** - App-wide constants
- **Images.js** - Static image references

## 🔧 Configuration Files

- **Navigator.js** - Main navigation configuration with tab and stack navigators
- **package.json** - Updated with React Native 0.72.6 dependencies
- **babel.config.js** - Babel configuration for modern JavaScript
- **metro.config.js** - Metro bundler configuration

## 📱 Device Testing

For optimal experience:
- **Android**: Test on real device via USB debugging
- **iOS**: Test on iOS Simulator or real device
- Camera features work best on physical devices

## 🚀 Performance Optimizations

- React Navigation v6 with improved performance
- React Native Reanimated v3 for smooth animations
- Optimized image loading and caching
- Efficient state management with hooks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Dharmendra Valiya**
- GitHub: [@dvvaliya](https://github.com/dvvaliya)
- Email: [your-email@example.com]

## 🙏 Acknowledgments

- React Native team for the amazing framework
- React Navigation team for smooth navigation
- All open-source contributors

---

**Version 2.0** - Updated with React Native 0.72.6 and modern architecture

[react-native]: https://reactnative.dev/
[npm]: https://www.npmjs.com/
[visual studio code]: https://code.visualstudio.com/
[node.js]: https://nodejs.org/
[xcode]: https://developer.apple.com/xcode/
[android studio]: https://developer.android.com/studio
