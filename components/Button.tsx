import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to display inside the button
   */
  children: ReactNode;

  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;

  /**
   * Whether the button should take the full width of its container
   */
  fullWidth?: boolean;

  /**
   * Optional icon to display before the button text
   */
  startIcon?: ReactNode;

  /**
   * Optional icon to display after the button text
   */
  endIcon?: ReactNode;
}

/**
 * A versatile button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  disabled,
  ...rest
}) => {
  const baseClasses = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const loadingClass = loading ? 'btn--loading' : '';
  const fullWidthClass = fullWidth ? 'btn--full-width' : '';
  const disabledClass = disabled || loading ? 'btn--disabled' : '';

  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    loadingClass,
    fullWidthClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          ⟳
        </span>
      )}
      {!loading && startIcon && (
        <span className="btn__start-icon" aria-hidden="true">
          {startIcon}
        </span>
      )}
      <span className={loading ? 'btn__text--loading' : 'btn__text'}>
        {children}
      </span>
      {!loading && endIcon && (
        <span className="btn__end-icon" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
