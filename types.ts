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
