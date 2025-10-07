import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SelectOption, SelectInputProps } from './types';
import './SelectInput.css';

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  multiple = false,
  error,
  loading = false,
  className = '',
  label,
  required = false,
  searchable = false,
  renderOption,
  maxHeight = 200,
  testId = 'select-input'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search term
  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Get selected option(s) for display
  const getSelectedOptions = useCallback(() => {
    if (!value) return [];
    const values = Array.isArray(value) ? value : [value];
    return options.filter(option => values.includes(option.value));
  }, [value, options]);

  const selectedOptions = getSelectedOptions();

  // Handle option selection
  const handleOptionSelect = (selectedOption: SelectOption) => {
    if (selectedOption.disabled) return;

    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(selectedOption.value)
        ? currentValues.filter(v => v !== selectedOption.value)
        : [...currentValues, selectedOption.value];
      onChange(newValues);
    } else {
      onChange(selectedOption.value);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          handleOptionSelect(filteredOptions[focusedIndex]);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  // Reset focused index when search term changes
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchTerm]);

  const displayValue = () => {
    if (loading) return 'Loading...';
    if (selectedOptions.length === 0) return placeholder;
    if (multiple) {
      return selectedOptions.length === 1 
        ? selectedOptions[0].label 
        : `${selectedOptions.length} items selected`;
    }
    return selectedOptions[0]?.label;
  };

  const selectClasses = [
    'select-input',
    className,
    disabled && 'select-input--disabled',
    error && 'select-input--error',
    isOpen && 'select-input--open'
  ].filter(Boolean).join(' ');

  return (
    <div className={selectClasses} ref={selectRef} data-testid={testId}>
      {label && (
        <label className="select-input__label">
          {label}
          {required && <span className="select-input__required">*</span>}
        </label>
      )}
      
      <div
        className="select-input__control"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={label || placeholder}
        aria-required={required}
        aria-invalid={!!error}
      >
        <div className="select-input__value">
          {displayValue()}
        </div>
        <div className="select-input__indicators">
          {loading && (
            <div className="select-input__spinner" aria-hidden="true" />
          )}
          <div 
            className={`select-input__arrow ${isOpen ? 'select-input__arrow--open' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {isOpen && (
        <div 
          className="select-input__dropdown"
          style={{ maxHeight }}
        >
          {searchable && (
            <div className="select-input__search">
              <input
                ref={searchInputRef}
                type="text"
                className="select-input__search-input"
                placeholder="Search options..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          )}
          
          <ul 
            className="select-input__options"
            role="listbox"
            aria-multiselectable={multiple}
          >
            {filteredOptions.length === 0 ? (
              <li className="select-input__no-options">
                No options found
              </li>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = multiple 
                  ? Array.isArray(value) && value.includes(option.value)
                  : value === option.value;
                const isFocused = index === focusedIndex;

                return (
                  <li
                    key={option.value}
                    className={[
                      'select-input__option',
                      isSelected && 'select-input__option--selected',
                      isFocused && 'select-input__option--focused',
                      option.disabled && 'select-input__option--disabled'
                    ].filter(Boolean).join(' ')}
                    onClick={() => handleOptionSelect(option)}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                  >
                    {multiple && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}} // Handled by onClick
                        className="select-input__checkbox"
                        tabIndex={-1}
                      />
                    )}
                    {renderOption ? renderOption(option) : option.label}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}

      {error && (
        <div className="select-input__error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
