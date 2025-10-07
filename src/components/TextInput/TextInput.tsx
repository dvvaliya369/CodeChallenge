import React, { forwardRef } from 'react';
import { TextInputProps, TextInputRef } from '../../types/TextInput';
import './TextInput.css';

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'medium',
      variant = 'outlined',
      required = false,
      showRequired = true,
      startIcon,
      endIcon,
      containerClassName = '',
      inputClassName = '',
      labelClassName = '',
      showCharacterCount = false,
      maxLength,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = props.id || `text-input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);
    const characterCount = props.value ? String(props.value).length : 0;

    // Container classes
    const containerClasses = [
      'text-input-container',
      `text-input-container--${size}`,
      `text-input-container--${variant}`,
      hasError && 'text-input-container--error',
      disabled && 'text-input-container--disabled',
      containerClassName
    ].filter(Boolean).join(' ');

    // Input classes
    const inputClasses = [
      'text-input',
      `text-input--${size}`,
      `text-input--${variant}`,
      startIcon && 'text-input--with-start-icon',
      endIcon && 'text-input--with-end-icon',
      hasError && 'text-input--error',
      inputClassName,
      className
    ].filter(Boolean).join(' ');

    // Label classes
    const labelClasses = [
      'text-input-label',
      required && showRequired && 'text-input-label--required',
      hasError && 'text-input-label--error',
      disabled && 'text-input-label--disabled',
      labelClassName
    ].filter(Boolean).join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
            {required && showRequired && <span className="text-input-required">*</span>}
          </label>
        )}
        
        <div className="text-input-wrapper">
          {startIcon && (
            <div className="text-input-icon text-input-icon--start">
              {startIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            disabled={disabled}
            maxLength={maxLength}
            aria-invalid={hasError}
            aria-describedby={
              [
                error && `${inputId}-error`,
                helperText && `${inputId}-helper`,
                showCharacterCount && maxLength && `${inputId}-count`
              ].filter(Boolean).join(' ') || undefined
            }
            {...props}
          />
          
          {endIcon && (
            <div className="text-input-icon text-input-icon--end">
              {endIcon}
            </div>
          )}
        </div>

        {/* Helper text, error, and character count */}
        <div className="text-input-footer">
          <div className="text-input-messages">
            {error && (
              <div id={`${inputId}-error`} className="text-input-error" role="alert">
                {error}
              </div>
            )}
            {!error && helperText && (
              <div id={`${inputId}-helper`} className="text-input-helper">
                {helperText}
              </div>
            )}
          </div>
          
          {showCharacterCount && maxLength && (
            <div id={`${inputId}-count`} className="text-input-count">
              {characterCount}/{maxLength}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
