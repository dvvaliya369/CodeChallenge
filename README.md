# 🍳 CodeChallenge - React Native Recipe App

A modern React Native application for sharing and discovering recipes, built with React Native CLI.

## 📱 Features

- **Recipe Discovery**: Browse and discover new recipes
- **User Stories**: Share cooking experiences and tips  
- **Recipe Categories**: Organized recipe browsing
- **Camera Integration**: Capture and share recipe photos
- **User Profiles**: Personal recipe collections
- **Search Functionality**: Find specific recipes quickly
- **Recipe Posting**: Share your own recipes with cooking duration

## 🛠 Tech Stack

- **React Native** 0.72+ - Cross-platform mobile development
- **React Navigation v6** - Navigation and routing
- **React Native Paper** - Material Design components
- **React Native Camera** - Photo and video capture
- **React Native Vector Icons** - Icon library
- **Node.js** v18+ - JavaScript runtime

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- **React Native CLI**: `npm install -g react-native-cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)
- **Java Development Kit (JDK)** 11 or higher

## 🚀 Installation

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
   cd ios
   pod install
   cd ..
   ```

4. **Android Setup**
   - Make sure Android Studio is installed and configured
   - Ensure you have an Android Virtual Device (AVD) or physical device connected

## 🏃‍♂️ Running the App

### Android
```bash
# Start Metro bundler
npm start

# Run on Android (in a new terminal)
npx react-native run-android
```

### iOS (macOS only)
```bash
# Start Metro bundler
npm start

# Run on iOS (in a new terminal)
npx react-native run-ios
```

### Development Mode
```bash
# Start with cache reset
npm start -- --reset-cache
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/           # Static assets
│   │   ├── Fonts/       # Custom fonts (.ttf files)
│   │   └── Images/      # App images and icons
│   ├── components/       # Reusable components
│   │   ├── Home/        # Home screen components
│   │   │   ├── Category.js
│   │   │   ├── HomeRecipeList.js
│   │   │   └── HomeUserStory.js
│   │   └── Post/        # Post screen components
│   │       ├── CookingDurationSlider.js
│   │       └── PostTextInput.js
│   ├── navigations/      # Navigation configuration
│   │   └── Navigator.js
│   ├── screens/          # Screen components
│   │   ├── Home/
│   │   ├── Post/
│   │   ├── Search/
│   │   ├── Notifications/
│   │   └── Profile/
│   ├── styles/           # Global styles
│   │   └── Style.js
│   └── utilities/        # Utility functions
│       ├── Colors.js     # App color constants
│       ├── Constants.js  # App constants
│       └── Images.js     # Image references
├── android/              # Android-specific code
├── ios/                  # iOS-specific code
└── package.json          # Dependencies and scripts
```

## 🎨 Key Components

### Home Screen Components
- **HomeUserStory.js**: Top horizontal scroll list for user stories
- **Category.js**: Recipe category display and filtering
- **HomeRecipeList.js**: Main recipe list with cards

### Post Screen Components
- **CookingDurationSlider.js**: Interactive slider for cooking time
- **PostTextInput.js**: Custom input component for recipe details
- **Pic.js**: Custom camera overlay for photo capture

### Navigation
The app uses React Navigation with a bottom tab navigator containing:
- 🏠 Home
- 🔍 Search
- ➕ Post
- 🔔 Notifications
- 👤 Profile

## 🎯 Usage Tips

1. **Adding Custom Fonts**: Place `.ttf` files in `src/assets/Fonts/`
2. **Adding Images**: Place images in `src/assets/Images/` and reference them in `Images.js`
3. **Styling**: Use the centralized `Style.js` for consistent styling across the app
4. **Colors**: Define all colors in `Colors.js` for easy theme management
5. **Best Experience**: Test camera functionality on physical devices for optimal performance

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler cache issues**
   ```bash
   npm start -- --reset-cache
   ```

2. **Android build failures**
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

3. **iOS build issues**
   ```bash
   cd ios
   rm -rf build/
   pod install
   cd ..
   npx react-native run-ios
   ```

4. **Node modules issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

## 🔧 Development

### Adding a New Screen
1. Create screen component in appropriate `src/screens/` folder
2. Add to navigation in `src/navigations/Navigator.js`
3. Create any required components in `src/components/`
4. Add styling to `src/styles/Style.js`

### Code Style
- Use functional components with hooks
- Follow React Native best practices
- Maintain consistent naming conventions
- Keep components modular and reusable

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Dharmendra Valiya**

---

## 📚 Resources

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://reactnativepaper.com/)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)

---

*For the best camera and UI experience, test on a real Android device or iOS Simulator.*
