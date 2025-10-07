import React, { forwardRef, useState, useId } from 'react';
import { TextInputProps } from './types';
import './TextInput.css';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      type = 'text',
      placeholder,
      disabled = false,
      readOnly = false,
      required = false,
      name,
      id,
      label,
      helperText,
      error,
      loading = false,
      variant = 'default',
      size = 'medium',
      maxLength,
      minLength,
      pattern,
      showCounter = false,
      startIcon,
      endIcon,
      onEndIconClick,
      onFocus,
      onBlur,
      onKeyPress,
      className = '',
      style,
      fullWidth = false,
      testId,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      autoComplete,
      autoFocus = false,
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = id || autoId;
    const [focused, setFocused] = useState(false);

    // Handle internal focus state
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    // Calculate character count for counter
    const currentLength = value?.length || 0;

    // Build className
    const baseClassName = 'text-input';
    const variantClassName = `text-input--${variant}`;
    const sizeClassName = `text-input--${size}`;
    const stateClasses = [
      disabled && 'text-input--disabled',
      readOnly && 'text-input--readonly',
      error && 'text-input--error',
      loading && 'text-input--loading',
      focused && 'text-input--focused',
      fullWidth && 'text-input--full-width',
      (startIcon || endIcon) && 'text-input--with-icons',
    ]
      .filter(Boolean)
      .join(' ');

    const containerClassName = [
      `${baseClassName}__container`,
      variantClassName,
      sizeClassName,
      stateClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Build aria-describedby
    const describedByIds = [];
    if (helperText && !error) describedByIds.push(`${inputId}-helper`);
    if (error) describedByIds.push(`${inputId}-error`);
    if (showCounter && maxLength) describedByIds.push(`${inputId}-counter`);
    if (ariaDescribedby) describedByIds.push(ariaDescribedby);
    const finalAriaDescribedBy = describedByIds.length > 0 ? describedByIds.join(' ') : undefined;

    return (
      <div className={containerClassName} style={style} data-testid={testId}>
        {label && (
          <label htmlFor={inputId} className="text-input__label">
            {label}
            {required && <span className="text-input__required" aria-label="required">*</span>}
          </label>
        )}

        <div className="text-input__input-container">
          {startIcon && (
            <div className="text-input__start-icon" aria-hidden="true">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={onKeyPress}
            className="text-input__input"
            aria-label={ariaLabel}
            aria-describedby={finalAriaDescribedBy}
            aria-invalid={error ? 'true' : 'false'}
            aria-required={required}
          />

          {loading && (
            <div className="text-input__loading" aria-hidden="true">
              <div className="text-input__spinner" />
            </div>
          )}

          {endIcon && (
            <div
              className={`text-input__end-icon ${onEndIconClick ? 'text-input__end-icon--clickable' : ''}`}
              onClick={onEndIconClick}
              role={onEndIconClick ? 'button' : undefined}
              tabIndex={onEndIconClick ? 0 : undefined}
              onKeyPress={
                onEndIconClick
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onEndIconClick();
                      }
                    }
                  : undefined
              }
              aria-label={onEndIconClick ? 'Action button' : undefined}
            >
              {endIcon}
            </div>
          )}
        </div>

        {(helperText || error || (showCounter && maxLength)) && (
          <div className="text-input__footer">
            <div className="text-input__messages">
              {error && (
                <div
                  id={`${inputId}-error`}
                  className="text-input__error-message"
                  role="alert"
                  aria-live="polite"
                >
                  {error}
                </div>
              )}
              {helperText && !error && (
                <div id={`${inputId}-helper`} className="text-input__helper-text">
                  {helperText}
                </div>
              )}
            </div>

            {showCounter && maxLength && (
              <div
                id={`${inputId}-counter`}
                className={`text-input__counter ${
                  currentLength > maxLength ? 'text-input__counter--over-limit' : ''
                }`}
                aria-live="polite"
              >
                {currentLength}/{maxLength}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
