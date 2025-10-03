# Recipe Sharing App - CodeChallenge

A beautifully designed React Native mobile application for sharing and discovering recipes. This app features a modern UI with bottom tab navigation, allowing users to browse recipes, share their own creations, search for specific dishes, receive notifications, and manage their profiles.

## ✨ Features

- **🏠 Home Screen**: Browse recipe collections and user stories
- **📝 Post Screen**: Create and share your own recipes with photos
- **🔍 Search Screen**: Find recipes by ingredients or cuisine type
- **🔔 Notifications**: Stay updated with recipe interactions
- **👤 Profile Management**: Customize your cooking profile
- **📸 Camera Integration**: Capture beautiful food photos
- **⏱️ Cooking Timer**: Built-in duration slider for recipes

## 👨‍💻 Developer

**Developed by Dharmendra Valiya** using React Native CLI for optimal performance and native feel.

## 🛠️ Tech Stack

This project utilizes modern tools and frameworks:

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile application framework by Meta
- **[Node.js](http://nodejs.org)** - JavaScript runtime environment
- **[npm](https://www.npmjs.com/)** - Package manager for JavaScript
- **[React Navigation](https://reactnavigation.org/)** - Routing and navigation for React Native apps
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** - Material Design components
- **[React Native Camera](https://github.com/react-native-camera/react-native-camera)** - Camera integration
- **[Vector Icons](https://github.com/oblador/react-native-vector-icons)** - Customizable icons

## 📋 Prerequisites

- **Node.js** v12+ ([Download here](https://nodejs.org/))
- **React Native CLI** (`npm install -g react-native-cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

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

## 📱 Running the App

### Android
```bash
# Start Metro bundler
npm start

# Run on Android (ensure device/emulator is connected)
npx react-native run-android
```

### iOS
```bash
# Start Metro bundler  
npm start

# Run on iOS simulator/device
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
│   ├── assets/           # Fonts and images
│   │   ├── Fonts/        # .ttf font files
│   │   └── Images/       # App images and icons
│   ├── components/       # Reusable UI components
│   │   ├── Home/         # Home screen components
│   │   └── Post/         # Post screen components
│   ├── navigations/      # Navigation configuration
│   ├── screens/          # App screens
│   │   ├── Home/         # Home screen
│   │   ├── Post/         # Post creation screen
│   │   ├── Search/       # Recipe search
│   │   ├── Notifications/ # User notifications
│   │   └── Profile/      # User profile
│   ├── styles/           # Global styles
│   └── utilities/        # Constants, colors, and helpers
├── android/              # Android-specific code
├── ios/                  # iOS-specific code
└── __tests__/           # Test files
```

## 🎨 Key Components

### Home Components
- **`HomeUserStory.js`** - Top horizontal story list
- **`Category.js`** - Recipe category filters  
- **`HomeRecipeList.js`** - Main recipe feed

### Post Components
- **`CookingDurationSlider.js`** - Interactive time slider
- **`PostTextInput.js`** - Custom text input fields

### Navigation
- **`Navigator.js`** - Bottom tab navigation with custom styling

### Utilities
- **`Colors.js`** - App color palette
- **`Constants.js`** - Static values and configuration
- **`Images.js`** - Image asset references

## 💡 Development Tips

1. **Adding New Screens**: Add screen components to `src/screens/` and register in `Navigator.js`
2. **Styling**: Use the centralized `Style.js` for consistent theming
3. **Assets**: Add fonts to `assets/Fonts/` and images to `assets/Images/`
4. **Components**: Create reusable components in appropriate folders under `src/components/`

## 📱 Best Experience

For optimal camera functionality and UI experience:
- **Android**: Use a physical device with USB debugging
- **iOS**: Test on iOS Simulator or physical device

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is developed as a code challenge demonstration.

---

**Author:** Dharmendra Valiya  
**Framework:** React Native CLI  
**Status:** Active Development

For questions or support, please refer to the React Native documentation or create an issue in the repository.
