# CodeChallenge - Recipe App

<p align="center">
  <img src="src/assets/Images/HomeRecipe@3x.png" width="100" height="100" alt="Recipe App Logo" />
</p>

A modern React Native recipe sharing app with a beautiful UI and intuitive navigation. Share your favorite recipes, discover new ones, and connect with other cooking enthusiasts.

## 📱 Features

- **Home Feed**: Browse through a curated list of recipes from the community
- **Recipe Creation**: Create and share your own recipes with photos
- **Search**: Find recipes by name, ingredients, or cooking time
- **User Profiles**: Manage your profile and view other users' recipes
- **Camera Integration**: Take photos of your dishes
- **Settings**: Customize your app experience
- **Push Notifications**: Stay updated with new recipes and interactions

## 🚀 Tech Stack

- **React Native**: 0.73.9
- **React**: 18.2.0
- **React Navigation**: 6.x (Bottom Tabs & Stack Navigation)
- **React Native Paper**: 5.x (Material Design Components)
- **React Native Camera**: Camera functionality
- **Vector Icons**: Beautiful icons throughout the app

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dvvaliya/CodeChallenge.git
   cd CodeChallenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

## 🏃‍♂️ Running the App

### Android
Make sure your Android device is connected or Android emulator is running.

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android
# or
npx react-native run-android
```

### iOS
Make sure you have Xcode installed and iOS simulator is available.

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios
# or
npx react-native run-ios
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test -- --coverage
```

## 📁 Project Structure

```
CodeChallenge/
├── src/
│   ├── assets/           # Images and fonts
│   │   ├── Fonts/
│   │   └── Images/
│   ├── components/       # Reusable components
│   │   ├── Home/
│   │   └── Post/
│   ├── navigations/      # Navigation configuration
│   ├── screens/          # App screens
│   │   ├── Home/
│   │   ├── Post/
│   │   ├── Search/
│   │   ├── Notifications/
│   │   ├── Profile/
│   │   └── Settings/     # New Settings screen
│   ├── styles/           # Global styles
│   └── utilities/        # Constants, colors, and utilities
├── android/              # Android-specific code
├── ios/                  # iOS-specific code
└── package.json
```

## 🎨 Key Components

### Screens
- **Home**: Main feed with recipe list and user stories
- **Post**: Create new recipes with images and cooking details
- **Search**: Search recipes with custom search UI
- **Notifications**: View app notifications
- **Profile**: User profile management
- **Settings**: App preferences and account settings (New!)

### Navigation
- **Bottom Tab Navigation**: Easy access to main features
- **Stack Navigation**: Seamless screen transitions
- **Custom Tab Bar**: Beautiful custom tab bar with animations

## 🔧 Configuration

### Fonts
Custom fonts are located in `src/assets/Fonts/` and include:
- Inter-Regular.ttf
- Inter-SemiBold.ttf  
- Inter-Bold.ttf
- Inter-Light.ttf

### Colors
Theme colors are defined in `src/utilities/Colors.js`:
- Primary: Yellow theme color
- Secondary: Light gray for text
- Background: White

## 📱 Screenshots

*Add your app screenshots here*

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
- GitHub: [@dvvaliya](https://github.com/dvvaliya)

## 🙏 Acknowledgments

- React Native community for excellent documentation
- Material Design for UI inspiration
- Contributors and testers

---

### 📝 Development Notes

For optimal development experience:
- Use a real Android device for camera functionality testing
- iOS Simulator works well for UI testing
- Hot reloading is enabled for faster development

### 🐛 Troubleshooting

**Metro bundler issues:**
```bash
npx react-native start --reset-cache
```

**iOS build issues:**
```bash
cd ios && pod install && cd ..
npx react-native run-ios --clean
```

**Android build issues:**
```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```
