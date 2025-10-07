import React, { useState, useCallback, forwardRef, useId } from 'react';
import { InputProps } from '../types/InputTypes';
import styles from './Input.module.css';

/**
 * A reusable input component with support for validation, error states, and accessibility
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      label,
      type = 'text',
      disabled = false,
      required = false,
      error,
      className = '',
      style,
      name,
      id,
      maxLength,
      minLength,
      autoComplete,
      autoFocus = false,
      readOnly = false,
      onChange,
      onBlur,
      onFocus,
      onKeyPress,
      onKeyDown,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;

    // Handle focus events
    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur]
    );

    // Determine input classes
    const inputClasses = [
      styles.inputField,
      error ? styles.error : '',
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Determine container classes
    const containerClasses = [styles.inputContainer].filter(Boolean).join(' ');

    // Determine label classes
    const labelClasses = [
      styles.inputLabel,
      required ? styles.required : ''
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            maxLength={maxLength}
            minLength={minLength}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            className={inputClasses}
            style={style}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            aria-label={ariaLabel}
            aria-describedby={error ? errorId : ariaDescribedBy}
            aria-invalid={error ? 'true' : 'false'}
            {...rest}
          />
        </div>
        {error && (
          <div id={errorId} className={styles.errorMessage} role="alert">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
