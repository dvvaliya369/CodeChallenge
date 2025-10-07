export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectInputProps {
  /** Array of options to display */
  options: SelectOption[];
  /** Currently selected value(s) */
  value?: string | number | (string | number)[];
  /** Callback when selection changes */
  onChange: (value: string | number | (string | number)[]) => void;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether multiple selections are allowed */
  multiple?: boolean;
  /** Error message to display */
  error?: string;
  /** Whether the component is in loading state */
  loading?: boolean;
  /** Custom className for styling */
  className?: string;
  /** Label for the select input */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Enable search/filter functionality */
  searchable?: boolean;
  /** Custom render function for options */
  renderOption?: (option: SelectOption) => React.ReactNode;
  /** Maximum height for the dropdown */
  maxHeight?: number;
  /** Test id for testing */
  testId?: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'danger' | 'success';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button visual variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Icon to display in the button */
  icon?: React.ReactNode;
  /** Position of the icon */
  iconPosition?: ButtonIconPosition;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Custom className for styling */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
  /** Whether button should take full width */
  fullWidth?: boolean;
  /** Test id for testing */
  testId?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** Whether the button should have rounded corners */
  rounded?: boolean;
}
