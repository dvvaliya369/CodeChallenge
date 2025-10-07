export interface InputProps {
  /** The input value */
  value?: string;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Label text for the input */
  label?: string;
  /** Input type (text, email, password, number, etc.) */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Maximum length of input */
  maxLength?: number;
  /** Minimum length of input */
  minLength?: number;
  /** Autocomplete attribute */
  autoComplete?: string;
  /** Whether the input should autofocus */
  autoFocus?: boolean;
  /** Whether the input is read-only */
  readOnly?: boolean;
  /** Callback fired when the value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback fired when the input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when the input gains focus */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired on key press */
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Callback fired on key down */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** ARIA described by for accessibility */
  'aria-describedby'?: string;
}

export interface InputState {
  isFocused: boolean;
  hasError: boolean;
}
