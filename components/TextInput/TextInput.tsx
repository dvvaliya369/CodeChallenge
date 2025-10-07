import React, { forwardRef, InputHTMLAttributes } from 'react';
import './TextInput.css';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text for the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Visual size variant */
  size?: 'small' | 'medium' | 'large';
  /** Full width styling */
  fullWidth?: boolean;
  /** Show required asterisk */
  required?: boolean;
  /** Custom class name for the container */
  containerClassName?: string;
  /** Custom class name for the input */
  inputClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'medium',
      fullWidth = false,
      required = false,
      containerClassName = '',
      inputClassName = '',
      id,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || `text-input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Build container classes
    const containerClasses = [
      'text-input-container',
      `text-input-container--${size}`,
      fullWidth && 'text-input-container--full-width',
      disabled && 'text-input-container--disabled',
      error && 'text-input-container--error',
      containerClassName
    ].filter(Boolean).join(' ');

    // Build input classes
    const inputClasses = [
      'text-input',
      `text-input--${size}`,
      fullWidth && 'text-input--full-width',
      error && 'text-input--error',
      inputClassName,
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className="text-input-label">
            {label}
            {required && <span className="text-input-required" aria-label="required">*</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            [
              error ? `${inputId}-error` : null,
              helperText ? `${inputId}-helper` : null
            ].filter(Boolean).join(' ') || undefined
          }
          {...props}
        />
        
        {error && (
          <div id={`${inputId}-error`} className="text-input-error" role="alert">
            {error}
          </div>
        )}
        
        {helperText && !error && (
          <div id={`${inputId}-helper`} className="text-input-helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
