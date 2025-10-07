import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectInput } from './SelectInput';
import { SelectOption } from './types';

const mockOptions: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
  { value: 'option4', label: 'Option 4' }
];

const defaultProps = {
  options: mockOptions,
  onChange: jest.fn(),
  testId: 'test-select'
};

describe('SelectInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with placeholder', () => {
    render(<SelectInput {...defaultProps} placeholder="Choose option" />);
    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<SelectInput {...defaultProps} label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<SelectInput {...defaultProps} label="Test Label" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup();
    render(<SelectInput {...defaultProps} />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    mockOptions.forEach(option => {
      if (!option.disabled) {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      }
    });
  });

  it('selects option when clicked', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    render(<SelectInput {...defaultProps} onChange={mockOnChange} />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    const option1 = screen.getByText('Option 1');
    await user.click(option1);
    
    expect(mockOnChange).toHaveBeenCalledWith('option1');
  });

  it('handles multiple selection', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    render(<SelectInput {...defaultProps} onChange={mockOnChange} multiple />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    const option1 = screen.getByText('Option 1');
    await user.click(option1);
    
    expect(mockOnChange).toHaveBeenCalledWith(['option1']);
    
    const option2 = screen.getByText('Option 2');
    await user.click(option2);
    
    expect(mockOnChange).toHaveBeenCalledWith(['option1', 'option2']);
  });

  it('shows selected value', () => {
    render(<SelectInput {...defaultProps} value="option1" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('shows multiple selected values count', () => {
    render(<SelectInput {...defaultProps} value={['option1', 'option2']} multiple />);
    expect(screen.getByText('2 items selected')).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    render(<SelectInput {...defaultProps} onChange={mockOnChange} />);
    
    const control = screen.getByRole('combobox');
    control.focus();
    
    // Open dropdown with Enter
    await user.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Navigate with Arrow Down
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    
    expect(mockOnChange).toHaveBeenCalledWith('option1');
  });

  it('closes dropdown on Escape', async () => {
    const user = userEvent.setup();
    render(<SelectInput {...defaultProps} />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('filters options when searchable', async () => {
    const user = userEvent.setup();
    render(<SelectInput {...defaultProps} searchable />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    const searchInput = screen.getByPlaceholderText('Search options...');
    await user.type(searchInput, 'Option 1');
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<SelectInput {...defaultProps} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<SelectInput {...defaultProps} error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup();
    render(<SelectInput {...defaultProps} disabled />);
    
    const control = screen.getByRole('combobox');
    expect(control).toHaveAttribute('tabIndex', '-1');
    
    await user.click(control);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('does not select disabled options', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    render(<SelectInput {...defaultProps} onChange={mockOnChange} />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    const disabledOption = screen.getByText('Option 3');
    await user.click(disabledOption);
    
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('renders custom option content', async () => {
    const user = userEvent.setup();
    const renderOption = (option: SelectOption) => (
      <div>Custom: {option.label}</div>
    );
    
    render(<SelectInput {...defaultProps} renderOption={renderOption} />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    expect(screen.getByText('Custom: Option 1')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SelectInput {...defaultProps} />
        <div data-testid="outside">Outside</div>
      </div>
    );
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    const outside = screen.getByTestId('outside');
    await user.click(outside);
    
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('shows no options message when filtered results are empty', async () => {
    const user = userEvent.setup();
    render(<SelectInput {...defaultProps} searchable />);
    
    const control = screen.getByRole('combobox');
    await user.click(control);
    
    const searchInput = screen.getByPlaceholderText('Search options...');
    await user.type(searchInput, 'nonexistent');
    
    expect(screen.getByText('No options found')).toBeInTheDocument();
  });
});
