export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text for the input */
  label?: string;
  
  /** Error message to display */
  error?: string;
  
  /** Helper text to display below the input */
  helperText?: string;
  
  /** Size variant of the input */
  size?: 'small' | 'medium' | 'large';
  
  /** Visual variant of the input */
  variant?: 'outlined' | 'filled' | 'standard';
  
  /** Whether the input is required */
  required?: boolean;
  
  /** Whether to show the required asterisk */
  showRequired?: boolean;
  
  /** Icon to display at the start of the input */
  startIcon?: React.ReactNode;
  
  /** Icon to display at the end of the input */
  endIcon?: React.ReactNode;
  
  /** Custom class name for the container */
  containerClassName?: string;
  
  /** Custom class name for the input element */
  inputClassName?: string;
  
  /** Custom class name for the label */
  labelClassName?: string;
  
  /** Whether to display character count */
  showCharacterCount?: boolean;
  
  /** Maximum character count */
  maxLength?: number;
}

export interface TextInputRef extends HTMLInputElement {}
