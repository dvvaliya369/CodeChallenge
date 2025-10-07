import React from 'react';
import { ButtonProps } from './types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  style,
  fullWidth = false,
  testId,
  'aria-label': ariaLabel,
  rounded = false,
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  const renderIcon = () => {
    if (loading) {
      return <span className="button-spinner" data-testid="button-spinner" />;
    }
    return icon;
  };

  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    disabled && 'button--disabled',
    loading && 'button--loading',
    rounded && 'button--rounded',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      style={style}
      data-testid={testId}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <span className="button__icon button__icon--left">
          {renderIcon()}
        </span>
      )}
      
      <span className="button__content">
        {children}
      </span>
      
      {icon && iconPosition === 'right' && (
        <span className="button__icon button__icon--right">
          {renderIcon()}
        </span>
      )}
    </button>
  );
};

export default Button;
