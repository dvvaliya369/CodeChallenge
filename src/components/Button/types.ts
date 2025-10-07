export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type IconPosition = 'left' | 'right';

export interface ButtonProps {
  /** Button text content */
  title: string;
  
  /** Button variant/style */
  variant?: ButtonVariant;
  
  /** Button size */
  size?: ButtonSize;
  
  /** Whether the button is disabled */
  disabled?: boolean;
  
  /** Whether the button is in loading state */
  loading?: boolean;
  
  /** Icon name (using react-native-vector-icons) */
  icon?: string;
  
  /** Icon position relative to text */
  iconPosition?: IconPosition;
  
  /** Icon set to use (default: 'MaterialIcons') */
  iconSet?: string;
  
  /** Custom styles for the button container */
  style?: any;
  
  /** Custom styles for the button text */
  textStyle?: any;
  
  /** Press handler */
  onPress?: () => void;
  
  /** Long press handler */
  onLongPress?: () => void;
  
  /** Test ID for testing */
  testID?: string;
  
  /** Accessibility label */
  accessibilityLabel?: string;
  
  /** Accessibility hint */
  accessibilityHint?: string;
  
  /** Full width button */
  fullWidth?: boolean;
}
