// Mock React Navigation
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  }),
  useFocusEffect: jest.fn(),
  useRoute: () => ({
    params: {},
  }),
  NavigationContainer: ({ children }) => children,
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: () => null,
    Screen: () => null,
  }),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: () => null,
    Screen: () => null,
  }),
}));

// Mock react-native modules
jest.mock('react-native-vector-icons', () => 'MockedIcon');
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }) => children,
  SafeAreaView: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));
jest.mock('react-native-global-font', () => ({
  __esModule: true,
  default: {
    applyGlobal: jest.fn(),
  },
}));
jest.mock('react-native-paper', () => ({
  Button: 'Button',
  Text: 'Text',
  Card: 'Card',
}));
jest.mock('react-native-vision-camera', () => ({
  Camera: 'Camera',
}));
jest.mock('react-native-keyboard-aware-scrollview', () => ({
  KeyboardAwareScrollView: ({ children }) => children,
}));
