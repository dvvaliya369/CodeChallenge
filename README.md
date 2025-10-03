# CodeChallenge - React Native App

A React Native application for recipe sharing and discovery. Users can browse recipes, share their own, and interact with a community of cooking enthusiasts.

## Features

- 📱 **Home Screen**: Browse featured recipes and user stories
- 🔍 **Search**: Discover recipes by ingredients or categories  
- ➕ **Post**: Share your own recipes with photos and cooking instructions
- 🔔 **Notifications**: Stay updated with community interactions
- 👤 **Profile**: Manage your account and saved recipes

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) - Cross-platform mobile development
- **Navigation**: [React Navigation v5](https://reactnavigation.org/) - Screen navigation and routing
- **UI Components**: [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design components
- **Camera**: [React Native Camera](https://github.com/react-native-camera/react-native-camera) - Photo capture functionality
- **Icons**: [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Scalable icon library

## Prerequisites

Before running this project, ensure you have:

- **Node.js** v14+ installed ([Download here](https://nodejs.org/))
- **React Native CLI** installed globally: `npm install -g react-native-cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)
- **CocoaPods** (for iOS dependencies): `sudo gem install cocoapods`

## Installation

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
   cd ios
   pod install
   cd ..
   ```

4. **Android Setup**
   - Ensure Android Studio is installed and configured
   - Start an Android emulator or connect a physical device via USB debugging

## Running the App

### Android
```bash
# Start the Metro bundler
npm start

# Run on Android (in a new terminal)
npx react-native run-android
```

### iOS (macOS only)
```bash
# Start the Metro bundler
npm start

# Run on iOS (in a new terminal)
npx react-native run-ios
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the Metro bundler |
| `npm run android` | Run app on Android device/emulator |
| `npm run ios` | Run app on iOS device/simulator |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint code linting |

## Project Structure

```
CodeChallenge/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Home/           # Home screen specific components
│   │   └── Post/           # Post screen specific components
│   ├── navigations/        # Navigation configuration
│   ├── screens/            # Main app screens
│   │   ├── Home/          # Home screen
│   │   ├── Search/        # Search screen
│   │   ├── Post/          # Recipe posting screen
│   │   ├── Notifications/ # Notifications screen
│   │   └── Profile/       # User profile screen
│   ├── styles/            # Global styles and themes
│   └── utilities/         # Constants, colors, and helper functions
├── android/               # Android-specific code and configuration
├── ios/                  # iOS-specific code and configuration
└── assets/              # Fonts and images
    ├── Fonts/
    └── Images/
```

### Key Components

#### Home Components
- **HomeUserStory.js**: Displays user story carousel at the top
- **Category.js**: Shows recipe categories for filtering
- **HomeRecipeList.js**: Main recipe feed with cards

#### Post Components  
- **CookingDurationSlider.js**: Interactive slider for cooking time
- **PostTextInput.js**: Custom text input for recipe details

## Development Guidelines

### Adding New Screens
1. Create screen component in `src/screens/[ScreenName]/`
2. Add navigation route in `src/navigations/Navigator.js`
3. Import and register in the appropriate navigator

### Styling
- Global styles are defined in `src/styles/Style.js`
- Colors are centralized in `src/utilities/Colors.js`
- Use consistent spacing and typography from the style guide

### Assets
- **Fonts**: Add `.ttf` files to `assets/Fonts/`
- **Images**: Place images in `assets/Images/` and reference in `src/utilities/Images.js`

## Testing

Run the test suite with:
```bash
npm test
```

The project uses Jest for unit testing. Test files should be placed in the `__tests__/` directory or alongside components with `.test.js` extension.

## Debugging

### React Native Debugger
1. Install React Native Debugger
2. Start the app and shake device/press Ctrl+M
3. Select "Debug with Chrome" or "Debug with React Native Debugger"

### Common Issues

**Metro bundler issues**: Clear cache with `npx react-native start --reset-cache`

**iOS build errors**: Delete `ios/build` folder and run `cd ios && pod install`

**Android build errors**: Clean project with `cd android && ./gradlew clean`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Performance Tips

- Test on real devices for optimal camera and UI performance
- Use React Native's built-in performance monitoring
- Optimize images and assets for mobile consumption
- Implement lazy loading for large lists

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Dharmendra Valiya** - [GitHub Profile](https://github.com/dvvaliya)

---

For more information about React Native development, visit the [official documentation](https://reactnative.dev/docs/getting-started).
