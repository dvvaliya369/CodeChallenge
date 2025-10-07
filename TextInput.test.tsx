import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  describe('Basic Functionality', () => {
    it('renders correctly', () => {
      render(<TextInput placeholder="Enter text" />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Enter text');
    });

    it('renders with label', () => {
      render(<TextInput label="Username" />);
      const label = screen.getByText('Username');
      const input = screen.getByRole('textbox');
      expect(label).toBeInTheDocument();
      expect(input).toHaveAccessibleName('Username');
    });

    it('renders with testId', () => {
      render(<TextInput testId="username-input" />);
      expect(screen.getByTestId('username-input')).toBeInTheDocument();
    });
  });

  describe('Controlled vs Uncontrolled', () => {
    it('works as controlled component', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<TextInput value="test" onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveValue('test');
      
      await user.type(input, 'ing');
      expect(handleChange).toHaveBeenCalled();
    });

    it('works as uncontrolled component', async () => {
      const user = userEvent.setup();
      
      render(<TextInput defaultValue="initial" />);
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveValue('initial');
      
      await user.clear(input);
      await user.type(input, 'new value');
      expect(input).toHaveValue('new value');
    });
  });

  describe('Input Types', () => {
    it('renders different input types', () => {
      const { rerender } = render(<TextInput type="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
      
      rerender(<TextInput type="password" />);
      expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password');
      
      rerender(<TextInput type="number" />);
      expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number');
    });
  });

  describe('States', () => {
    it('handles disabled state', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<TextInput disabled onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      expect(input).toBeDisabled();
      
      await user.type(input, 'test');
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('handles readonly state', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<TextInput readOnly defaultValue="readonly" onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveAttribute('readonly');
      expect(input).toHaveValue('readonly');
      
      await user.type(input, 'test');
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('handles required state', () => {
      render(<TextInput required label="Required Field" />);
      const input = screen.getByRole('textbox');
      const requiredIndicator = screen.getByText('*');
      
      expect(input).toBeRequired();
      expect(requiredIndicator).toBeInTheDocument();
    });

    it('displays loading state', () => {
      render(<TextInput loading />);
      expect(document.querySelector('.text-input__spinner')).toBeInTheDocument();
    });
  });

  describe('Validation and Error Handling', () => {
    it('displays error message', () => {
      render(<TextInput error="This field is required" />);
      const errorMessage = screen.getByRole('alert');
      
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('This field is required');
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('displays helper text when no error', () => {
      render(<TextInput helperText="Enter your username" />);
      const helperText = screen.getByText('Enter your username');
      
      expect(helperText).toBeInTheDocument();
      expect(helperText).not.toHaveAttribute('role', 'alert');
    });

    it('prioritizes error over helper text', () => {
      render(
        <TextInput 
          helperText="Enter your username" 
          error="This field is required"
        />
      );
      
      expect(screen.getByRole('alert')).toHaveTextContent('This field is required');
      expect(screen.queryByText('Enter your username')).not.toBeInTheDocument();
    });

    it('handles maxLength validation', () => {
      render(<TextInput maxLength={10} />);
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveAttribute('maxlength', '10');
    });

    it('handles pattern validation', () => {
      render(<TextInput pattern="[0-9]*" />);
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveAttribute('pattern', '[0-9]*');
    });
  });

  describe('Character Counter', () => {
    it('displays character counter when enabled', () => {
      render(<TextInput maxLength={10} showCounter value="test" onChange={() => {}} />);
      const counter = screen.getByText('4/10');
      
      expect(counter).toBeInTheDocument();
    });

    it('shows over-limit styling when exceeded', () => {
      render(<TextInput maxLength={5} showCounter value="testing" onChange={() => {}} />);
      const counter = screen.getByText('7/5');
      
      expect(counter).toBeInTheDocument();
      expect(counter).toHaveClass('text-input__counter--over-limit');
    });

    it('does not display counter without maxLength', () => {
      render(<TextInput showCounter value="test" onChange={() => {}} />);
      
      expect(screen.queryByText(/\/$/)).not.toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders start icon', () => {
      render(<TextInput startIcon={<span data-testid="start-icon">👤</span>} />);
      
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('renders end icon', () => {
      render(<TextInput endIcon={<span data-testid="end-icon">🔍</span>} />);
      
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('handles end icon click', async () => {
      const user = userEvent.setup();
      const handleEndIconClick = jest.fn();
      
      render(
        <TextInput 
          endIcon={<span data-testid="end-icon">🔍</span>} 
          onEndIconClick={handleEndIconClick}
        />
      );
      
      const endIcon = screen.getByTestId('end-icon').parentElement;
      await user.click(endIcon!);
      
      expect(handleEndIconClick).toHaveBeenCalledTimes(1);
    });

    it('makes clickable end icon focusable', () => {
      render(
        <TextInput 
          endIcon={<span>🔍</span>} 
          onEndIconClick={() => {}}
        />
      );
      
      const endIconContainer = document.querySelector('.text-input__end-icon--clickable');
      expect(endIconContainer).toHaveAttribute('tabindex', '0');
      expect(endIconContainer).toHaveAttribute('role', 'button');
    });
  });

  describe('Event Handling', () => {
    it('handles focus and blur events', async () => {
      const user = userEvent.setup();
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      
      render(<TextInput onFocus={handleFocus} onBlur={handleBlur} />);
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
      
      await user.tab();
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('handles key press events', async () => {
      const user = userEvent.setup();
      const handleKeyPress = jest.fn();
      
      render(<TextInput onKeyPress={handleKeyPress} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'a');
      expect(handleKeyPress).toHaveBeenCalled();
    });
  });

  describe('Variants and Sizes', () => {
    it('applies variant classes', () => {
      const { rerender } = render(<TextInput variant="filled" testId="input" />);
      expect(screen.getByTestId('input')).toHaveClass('text-input--filled');
      
      rerender(<TextInput variant="outline" testId="input" />);
      expect(screen.getByTestId('input')).toHaveClass('text-input--outline');
    });

    it('applies size classes', () => {
      const { rerender } = render(<TextInput size="small" testId="input" />);
      expect(screen.getByTestId('input')).toHaveClass('text-input--small');
      
      rerender(<TextInput size="large" testId="input" />);
      expect(screen.getByTestId('input')).toHaveClass('text-input--large');
    });

    it('applies full width class', () => {
      render(<TextInput fullWidth testId="input" />);
      expect(screen.getByTestId('input')).toHaveClass('text-input--full-width');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(
        <TextInput 
          label="Username"
          helperText="Enter your username"
          required
          aria-label="Custom label"
        />
      );
      
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveAttribute('aria-required', 'true');
      expect(input).toHaveAttribute('aria-invalid', 'false');
      expect(input).toHaveAttribute('aria-label', 'Custom label');
      expect(input).toHaveAttribute('aria-describedby');
    });

    it('associates error message with input', () => {
      render(<TextInput error="Required field" id="test-input" />);
      
      const input = screen.getByRole('textbox');
      const errorMessage = screen.getByRole('alert');
      
      expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
      expect(errorMessage).toHaveAttribute('id', 'test-input-error');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('supports keyboard navigation for clickable end icon', async () => {
      const user = userEvent.setup();
      const handleEndIconClick = jest.fn();
      
      render(
        <TextInput 
          endIcon={<span>🔍</span>} 
          onEndIconClick={handleEndIconClick}
        />
      );
      
      const endIconContainer = document.querySelector('.text-input__end-icon--clickable');
      
      // Focus the icon container
      endIconContainer!.focus();
      
      // Press Enter
      await user.keyboard('{Enter}');
      expect(handleEndIconClick).toHaveBeenCalledTimes(1);
      
      // Press Space
      await user.keyboard(' ');
      expect(handleEndIconClick).toHaveBeenCalledTimes(2);
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      
      render(<TextInput ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toBe(screen.getByRole('textbox'));
    });
  });
});
