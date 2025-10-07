import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button', 'button--primary', 'button--medium');
  });

  it('renders with custom text', () => {
    render(<Button>Custom Text</Button>);
    expect(screen.getByText('Custom Text')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="secondary">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--secondary');

    rerender(<Button variant="outline">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--outline');

    rerender(<Button variant="text">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--text');

    rerender(<Button variant="danger">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--danger');

    rerender(<Button variant="success">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--success');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="small">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--small');

    rerender(<Button size="large">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--large');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button--disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('handles loading state', () => {
    render(<Button loading>Loading Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button--loading');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByTestId('button-spinner')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} loading>
        Loading Button
      </Button>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders with icon on the left', () => {
    const TestIcon = () => <span data-testid="test-icon">🎉</span>;
    render(
      <Button icon={<TestIcon />} iconPosition="left">
        With Icon
      </Button>
    );
    
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('test-icon');
    const iconContainer = icon.closest('.button__icon--left');
    
    expect(icon).toBeInTheDocument();
    expect(iconContainer).toBeInTheDocument();
  });

  it('renders with icon on the right', () => {
    const TestIcon = () => <span data-testid="test-icon">🎉</span>;
    render(
      <Button icon={<TestIcon />} iconPosition="right">
        With Icon
      </Button>
    );
    
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('test-icon');
    const iconContainer = icon.closest('.button__icon--right');
    
    expect(icon).toBeInTheDocument();
    expect(iconContainer).toBeInTheDocument();
  });

  it('applies fullWidth class when specified', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--full-width');
  });

  it('applies rounded class when specified', () => {
    render(<Button rounded>Rounded Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--rounded');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'purple' };
    render(<Button style={customStyle}>Styled Button</Button>);
    expect(screen.getByRole('button')).toHaveStyle('background-color: purple');
  });

  it('sets button type correctly', () => {
    const { rerender } = render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');

    rerender(<Button type="reset">Reset</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
  });

  it('applies test id when provided', () => {
    render(<Button testId="custom-button">Test Button</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });

  it('applies aria-label when provided', () => {
    render(<Button aria-label="Custom label">Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Custom label');
  });

  it('shows spinner instead of icon when loading', () => {
    const TestIcon = () => <span data-testid="test-icon">🎉</span>;
    render(
      <Button icon={<TestIcon />} loading>
        Loading Button
      </Button>
    );
    
    expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    expect(screen.getByTestId('button-spinner')).toBeInTheDocument();
  });

  it('handles keyboard events properly', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Keyboard Button</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports children as ReactNode', () => {
    render(
      <Button>
        <span>Complex</span> <strong>Content</strong>
      </Button>
    );
    
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('maintains focus state correctly', () => {
    render(<Button>Focus Test</Button>);
    const button = screen.getByRole('button');
    
    button.focus();
    expect(button).toHaveFocus();
  });

  it('applies correct ARIA attributes', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
