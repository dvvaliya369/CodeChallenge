# CodeChallenge - Recipe Sharing App

## Project Documentation

### Developed by Dharmendra Valiya

A comprehensive React Native mobile application for recipe sharing and cooking management, built with React Native CLI and modern development practices.

## 📱 Current Version
- **React Native**: 0.81.4
- **App Version**: 1.0.0
- **Last Updated**: October 2024

## 🚀 Features

- **Recipe Browsing**: Discover and explore various recipes
- **Recipe Sharing**: Post and share your favorite recipes with the community
- **Photo & Video Support**: Capture and share cooking moments
- **Search Functionality**: Find specific dishes and recipes
- **Notifications**: Stay updated with cooking reminders and community activities
- **User Profiles**: Manage your cooking profile and preferences
- **About Section**: View app information and technology stack

## 🛠 Tech Stack

CodeChallenge utilizes modern, industry-standard technologies:

- **[React Native](https://reactnative.dev/)** `v0.81.4` - Cross-platform mobile development framework
- **[React](https://reactjs.org/)** `v18.3.1` - JavaScript library for building user interfaces
- **[React Navigation](https://reactnavigation.org/)** `v6.x` - Navigation library for React Native
- **[React Native Paper](https://reactnativepaper.com/)** `v5.x` - Material Design components
- **[React Native Camera](https://github.com/react-native-camera/react-native-camera)** `v4.x` - Camera functionality
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)** `v10.x` - Icon library
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** `v2.x` - Native gesture handling
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** `v3.x` - Smooth animations
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** `v4.x` - Safe area handling
- **[React Native Screens](https://github.com/software-mansion/react-native-screens)** `v3.x` - Native screen optimization
- **[Node.js](http://nodejs.org)** `v12+` - JavaScript runtime environment
- **[npm](https://www.npmjs.com/)** - Package manager for JavaScript
- **[Visual Studio Code](https://code.visualstudio.com/download)** - Source code editor
- **[Xcode](https://developer.apple.com/xcode/)** - iOS development environment
- **[Android Studio](https://developer.android.com/studio)** - Android development environment

## 📋 Prerequisites

- Node.js v12 or higher
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- iOS Simulator or physical iOS device
- Android Emulator or physical Android device

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dvvaliya/CodeChallenge.git
   cd CodeChallenge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **iOS Setup (iOS only):**
   ```bash
   cd ios
   pod install
   cd ..
   ```

## 🚀 Running the Application

### Android
Make sure your Android device is connected or emulator is running:
```bash
npm start
npx react-native run-android
```

### iOS
Ensure your iOS device is connected or simulator is running:
```bash
npm start
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
│   ├── assets/
│   │   ├── Fonts/          # Custom fonts (.ttf files)
│   │   └── Images/         # Static images
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
│   │   ├── Post/           # Post screen & camera
│   │   ├── Search/         # Search functionality
│   │   ├── Notifications/  # Notifications screen
│   │   ├── Profile/        # User profile screen
│   │   └── About/          # About app screen (NEW)
│   ├── styles/
│   │   └── Style.js        # Global styles
│   └── utilities/
│       ├── Colors.js       # Color constants
│       ├── Constants.js    # App constants
│       └── Images.js       # Image references
├── android/                # Android-specific code
├── ios/                    # iOS-specific code
└── __tests__/              # Test files
```

## 🎨 Code Structure Guidelines

### 1. **Assets Management**
- **Fonts**: Add `.ttf` font files to `src/assets/Fonts/`
- **Images**: Store all images in `src/assets/Images/` and reference them in `utilities/Images.js`

### 2. **Reusable Components**
- **Home Components**: `HomeUserStory.js`, `Category.js`, `HomeRecipeList.js`
- **Post Components**: `CookingDurationSlider.js`, `PostTextInput.js`
- Components are designed for reusability across multiple screens

### 3. **Navigation**
- Main navigation is handled in `navigations/Navigator.js`
- Bottom tab navigation with stack navigation for modal screens
- Easy to add new screens by importing and adding to the navigator

### 4. **Screen Organization**
- Each screen has its own folder under `src/screens/`
- Screens include: Home, Post, Search, Notifications, Profile, and About

### 5. **Styling**
- Global styles are centralized in `src/styles/Style.js`
- Colors are managed in `src/utilities/Colors.js`
- Consistent theming throughout the app

### 6. **Utilities**
- **Colors.js**: App color palette
- **Constants.js**: Static values and configuration
- **Images.js**: Centralized image asset management

## 📱 Screens Overview

- **Home**: Recipe browsing with user stories and recipe lists
- **Post**: Recipe creation with camera integration and text inputs
- **Search**: Recipe search functionality with custom tab styling
- **Notifications**: User notifications and updates
- **Profile**: User profile management with About app access
- **About**: App information, version details, and tech stack (NEW)

## 🔄 Recent Updates (v1.0.0)

### ✅ Completed Tasks:
- ✅ Updated React Native from v0.64.2 to v0.81.4
- ✅ Updated React Navigation from v5 to v6 with modern syntax
- ✅ Updated React from v17.0.1 to v18.3.1
- ✅ Updated all major dependencies to latest compatible versions
- ✅ Added new About screen with comprehensive app information
- ✅ Enhanced navigation structure with About screen integration
- ✅ Added navigation from Profile to About screen
- ✅ Updated README with current project information
- ✅ Improved code documentation and structure

### 🔧 Technical Improvements:
- Modern React Navigation v6 implementation
- Updated tab bar styling and configuration
- Enhanced component props and navigation handling
- Improved TypeScript-ready structure
- Better performance with latest React Native optimizations

## 🎯 Best Practices

- **Camera Usage**: For optimal camera experience and UI, test on real Android devices or iOS Simulator
- **Development**: Use Visual Studio Code with React Native extensions
- **Testing**: Run on both platforms to ensure cross-platform compatibility
- **Assets**: Optimize images and use appropriate resolutions for different screen densities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact & Support

- **Developer**: Dharmendra Valiya
- **Repository**: [GitHub - CodeChallenge](https://github.com/dvvaliya/CodeChallenge.git)
- **Issues**: Report bugs and feature requests via GitHub Issues

## 📄 License

This project is licensed under the MIT License - see the repository for details.

---

**© 2024 Dharmendra Valiya. All rights reserved.**

*Built with ❤️ using React Native*
