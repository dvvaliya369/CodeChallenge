# CodeChallenge - React Native Recipe App

[![React Native](https://img.shields.io/badge/React%20Native-0.73-blue.svg)](https://reactnative.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📱 Overview

CodeChallenge is a modern recipe sharing mobile application built with React Native. Users can browse recipes, share their own creations, and interact with the cooking community through an intuitive and beautifully designed interface.

### ✨ Features

- 🏠 **Home Feed**: Browse trending recipes and user stories
- 📸 **Recipe Sharing**: Capture and share your culinary creations
- 🔍 **Smart Search**: Find recipes by ingredients, cuisine, or dietary preferences
- 🔔 **Notifications**: Stay updated with likes, comments, and new followers
- 👤 **User Profiles**: Personalized profiles with saved and shared recipes
- 🏷️ **Categories**: Organized recipe browsing by meal type and cuisine
- ⏱️ **Cooking Timer**: Built-in timer for recipe preparation

### 🛠 Developed by Dharmendra Valiya

This project was developed using React Native CLI with modern development practices and responsive design principles.

## 🚀 Tech Stack

CodeChallenge uses a number of modern tools and technologies:

- **[React Native](https://reactnative.dev)** - Cross-platform mobile application framework by Meta
- **[React Navigation](https://reactnavigation.org)** - Navigation library for React Native
- **[React Native Paper](https://reactnativepaper.com)** - Material Design components
- **[React Native Camera](https://github.com/react-native-camera/react-native-camera)** - Camera functionality
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)** - Icon library
- **[npm](https://www.npmjs.com)** - Package manager for JavaScript
- **[Node.js](https://nodejs.org)** - JavaScript runtime environment
- **[Visual Studio Code](https://code.visualstudio.com)** - Source code editor
- **[Xcode](https://developer.apple.com/xcode)** - iOS development environment
- **[Android Studio](https://developer.android.com/studio)** - Android development environment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18+ 
- **React Native CLI**
- **iOS**: Xcode 12+ and iOS Simulator
- **Android**: Android Studio and Android SDK

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dvvaliya/CodeChallenge.git
   cd CodeChallenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (if running on iOS)
   ```bash
   cd ios && pod install && cd ..
   ```

## 🏃‍♂️ Running the App

### Android
Make sure your Android device is connected or emulator is running.

```bash
npm start
npx react-native run-android
```

### iOS
If running on a device, make sure it's connected to your machine.

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
│   ├── assets/          # Static assets
│   │   ├── Fonts/       # Custom fonts (.ttf files)
│   │   └── Images/      # App images and icons
│   ├── components/      # Reusable components
│   │   ├── Home/        # Home screen components
│   │   └── Post/        # Post screen components
│   ├── navigations/     # Navigation configuration
│   ├── screens/         # Screen components
│   │   ├── Home/        # Home screen
│   │   ├── Post/        # Post creation screen
│   │   ├── Search/      # Search screen
│   │   ├── Notifications/  # Notifications screen
│   │   └── Profile/     # Profile screen
│   ├── styles/          # Global styles
│   └── utilities/       # Utility functions and constants
├── android/             # Android-specific code
├── ios/                 # iOS-specific code
└── __tests__/          # Test files
```

### 📖 Component Guide

#### 🏠 Home Components
- **HomeUserStory.js**: Top horizontal user story list
- **Category.js**: Recipe category selector
- **HomeRecipeList.js**: Main recipe feed list

#### 📝 Post Components
- **CookingDurationSlider.js**: Interactive cooking time slider
- **PostTextInput.js**: Custom text input for recipe details

#### 🧭 Navigation
- **Navigator.js**: Main navigation configuration with bottom tabs and stack navigation

#### 🎨 Styling & Utilities
- **Style.js**: Centralized style definitions
- **Colors.js**: Color palette constants
- **Constants.js**: App-wide constants
- **Images.js**: Static image references

## 🔧 Development Tips

1. **Adding New Fonts**: Place `.ttf` files in `src/assets/Fonts/`
2. **Adding Images**: Store images in `src/assets/Images/` with proper naming convention
3. **Reusable Components**: Create components in appropriate folders under `src/components/`
4. **Navigation Changes**: Update `src/navigations/Navigator.js`
5. **Global Styles**: Add styles to `src/styles/Style.js`

## 📱 Best Experience

For the best camera functionality and UI experience:
- **Android**: Use a real device with USB debugging enabled
- **iOS**: Use iOS Simulator or a real device

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dharmendra Valiya**
- GitHub: [@dvvaliya](https://github.com/dvvaliya)
- Project Link: [CodeChallenge](https://github.com/dvvaliya/CodeChallenge)

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using React Native**
