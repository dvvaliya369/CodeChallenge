import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

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
