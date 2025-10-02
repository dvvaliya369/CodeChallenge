# CodeChallenge - Recipe Social App

A React Native application for sharing and discovering recipes with social features including user stories, recipe browsing, and photo sharing capabilities.

## 🚀 Features

- **Home Feed**: Browse trending recipes and user stories
- **Recipe Sharing**: Create and share your own recipes
- **Camera Integration**: Take photos for your recipes
- **User Profiles**: View and manage user profiles
- **Search Functionality**: Find specific recipes and users
- **Social Features**: Like and interact with recipes
- **Bottom Tab Navigation**: Easy navigation between main sections
- **Settings Screen**: Configure app preferences (New!)

## 📱 Screenshots

The app includes the following main screens:
- Home: Recipe feed and user stories
- Search: Find recipes and users
- Post: Create new recipes with photos
- Notifications: Stay updated with interactions
- Profile: Manage your account and recipes
- Settings: App configuration and preferences

## 🛠 Tech Stack

- **React Native**: 0.73.x (Updated from 0.64.2)
- **React**: 18.x
- **React Navigation**: v6 (Bottom Tabs & Stack Navigation)
- **React Native Paper**: UI Components
- **React Native Camera**: Photo capture functionality
- **React Native Vector Icons**: Icon library
- **React Native Reanimated**: Smooth animations

## 📋 Prerequisites

Before running this project, make sure you have:

- [React Native development environment](https://reactnative.dev/docs/environment-setup) set up
- Node.js (v16 or higher)
- npm or Yarn package manager
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Physical device or emulator/simulator

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dvvaliya/CodeChallenge.git
cd CodeChallenge
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR using Yarn
yarn install
```

### 3. iOS Setup (iOS only)

```bash
cd ios && pod install && cd ..
```

### 4. Start Metro Bundler

```bash
# Using npm
npm start

# OR using Yarn
yarn start
```

### 5. Run the Application

#### For Android
```bash
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS
```bash
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── Fonts/           # Custom fonts (Inter family)
│   └── Images/          # App images and icons
├── components/
│   ├── Home/           # Home screen components
│   │   ├── Category.js
│   │   ├── HomeRecipeList.js
│   │   └── HomeUserStory.js
│   └── Post/           # Post creation components
│       ├── CookingDurationSlider.js
│       └── PostTextInput.js
├── navigations/
│   └── Navigator.js    # Main navigation setup
├── screens/
│   ├── Home/          # Home screen
│   ├── Search/        # Search functionality
│   ├── Post/          # Recipe creation
│   │   ├── Post.js
│   │   └── Pic.js     # Camera overlay
│   ├── Notifications/ # User notifications
│   ├── Profile/       # User profile
│   └── Settings/      # App settings (New!)
├── styles/
│   └── Style.js       # Global styles
└── utilities/
    ├── Colors.js      # Color constants
    ├── Constants.js   # App constants
    └── Images.js      # Image imports
```

## 🔧 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 📦 Key Dependencies

- `@react-navigation/native` - Navigation framework
- `@react-navigation/bottom-tabs` - Bottom tab navigation
- `@react-navigation/stack` - Stack navigation
- `react-native-camera` - Camera functionality
- `react-native-paper` - Material Design components
- `react-native-vector-icons` - Icon library
- `react-native-reanimated` - Animations
- `react-native-gesture-handler` - Gesture handling

## 🔄 Recent Updates

- **React Native**: Updated from 0.64.2 to 0.73.x
- **React**: Updated from 17.0.1 to 18.x
- **React Navigation**: Upgraded from v5 to v6
- **Dependencies**: Updated all major dependencies to latest stable versions
- **New Screen**: Added Settings screen for app configuration
- **Code Modernization**: Updated deprecated APIs and improved compatibility

## 🏗️ Component Architecture

### Reusable Components

The app uses a modular component structure for better maintainability:

1. **Home Components**:
   - `HomeUserStory.js`: Top horizontal list of user stories
   - `Category.js`: Recipe category selection
   - `HomeRecipeList.js`: Main recipe feed list

2. **Post Components**:
   - `CookingDurationSlider.js`: Interactive cooking time slider
   - `PostTextInput.js`: Custom text input for recipe details

### Navigation Structure

- Bottom Tab Navigation with 5 main tabs
- Stack Navigation within each tab for detailed views
- Custom camera overlay for photo capture

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   npx react-native start --reset-cache
   ```

2. **Android build issues**:
   ```bash
   cd android && ./gradlew clean && cd ..
   ```

3. **iOS build issues**:
   ```bash
   cd ios && rm -rf build && pod install && cd ..
   ```

4. **Font issues**: Ensure fonts are properly linked by running:
   ```bash
   npx react-native link
   ```

### Camera Permissions

The app requires camera permissions for photo capture functionality. Make sure to:

- **Android**: Add camera permissions in `android/app/src/main/AndroidManifest.xml`
- **iOS**: Add camera usage description in `ios/Info.plist`

### Performance Tips

- Test on real devices for better camera and UI experience
- Use iOS Simulator or Android device for optimal performance
- Enable debugging mode for development

## 🎨 Styling Guidelines

- All styles are centralized in `src/styles/Style.js`
- Colors are defined in `src/utilities/Colors.js`
- Constants are managed in `src/utilities/Constants.js`
- Images are imported through `src/utilities/Images.js`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information
4. Contact the development team

---

**Developed by Dharmendra Valiya**

**Happy cooking and coding!** 👨‍🍳👩‍💻
