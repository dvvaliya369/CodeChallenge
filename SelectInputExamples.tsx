import React, { useState } from 'react';
import { SelectInput } from './SelectInput';
import { SelectOption } from './types';

// Sample data
const countries: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'cn', label: 'China' }
];

const frameworks: SelectOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
  { value: 'ember', label: 'Ember.js', disabled: true }
];

export const SelectInputExamples: React.FC = () => {
  const [singleValue, setSingleValue] = useState<string>('');
  const [multipleValue, setMultipleValue] = useState<string[]>([]);
  const [searchableValue, setSearchableValue] = useState<string>('');
  const [requiredValue, setRequiredValue] = useState<string>('');
  const [loadingValue, setLoadingValue] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleRequiredChange = (value: string | number | (string | number)[]) => {
    setRequiredValue(value as string);
    if (value) {
      setErrors(prev => ({ ...prev, required: '' }));
    }
  };

  const validateRequired = () => {
    if (!requiredValue) {
      setErrors(prev => ({ ...prev, required: 'This field is required' }));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>SelectInput Component Examples</h1>
      
      <div style={{ display: 'grid', gap: '24px' }}>
        {/* Basic Single Select */}
        <div>
          <h3>Basic Single Select</h3>
          <SelectInput
            label="Select Country"
            options={countries}
            value={singleValue}
            onChange={(value) => setSingleValue(value as string)}
            placeholder="Choose a country"
          />
          <p>Selected: {singleValue || 'None'}</p>
        </div>

        {/* Multiple Select */}
        <div>
          <h3>Multiple Select</h3>
          <SelectInput
            label="Select Frameworks"
            options={frameworks}
            value={multipleValue}
            onChange={(value) => setMultipleValue(value as string[])}
            placeholder="Choose frameworks"
            multiple
          />
          <p>Selected: {multipleValue.join(', ') || 'None'}</p>
        </div>

        {/* Searchable Select */}
        <div>
          <h3>Searchable Select</h3>
          <SelectInput
            label="Search Countries"
            options={countries}
            value={searchableValue}
            onChange={(value) => setSearchableValue(value as string)}
            placeholder="Search and select a country"
            searchable
          />
          <p>Selected: {searchableValue || 'None'}</p>
        </div>

        {/* Required Field with Validation */}
        <div>
          <h3>Required Field</h3>
          <SelectInput
            label="Required Framework"
            options={frameworks}
            value={requiredValue}
            onChange={handleRequiredChange}
            placeholder="This field is required"
            required
            error={errors.required}
          />
          <button 
            onClick={validateRequired}
            style={{ marginTop: '8px', padding: '8px 16px' }}
          >
            Validate
          </button>
        </div>

        {/* Loading State */}
        <div>
          <h3>Loading State</h3>
          <SelectInput
            label="Loading Example"
            options={countries}
            value={loadingValue}
            onChange={(value) => setLoadingValue(value as string)}
            loading
          />
        </div>

        {/* Disabled State */}
        <div>
          <h3>Disabled State</h3>
          <SelectInput
            label="Disabled Select"
            options={countries}
            value=""
            onChange={() => {}}
            placeholder="This select is disabled"
            disabled
          />
        </div>

        {/* Custom Option Rendering */}
        <div>
          <h3>Custom Option Rendering</h3>
          <SelectInput
            label="Custom Rendering"
            options={countries}
            value={singleValue}
            onChange={(value) => setSingleValue(value as string)}
            placeholder="Custom option display"
            renderOption={(option) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  width: '20px', 
                  height: '14px', 
                  backgroundColor: '#e5e7eb',
                  borderRadius: '2px'
                }} />
                <strong>{option.label}</strong>
                <small style={{ color: '#6b7280' }}>({option.value})</small>
              </div>
            )}
          />
        </div>

        {/* Error State */}
        <div>
          <h3>Error State</h3>
          <SelectInput
            label="Error Example"
            options={frameworks}
            value=""
            onChange={() => {}}
            placeholder="This field has an error"
            error="Please select a valid option"
          />
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <h3>Usage Example</h3>
        <pre style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '4px', overflow: 'auto' }}>
          {`import { SelectInput } from './SelectInput';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' }
];

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <SelectInput
      label="Choose Framework"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a framework"
      required
    />
  );
}`}
        </pre>
      </div>
    </div>
  );
};

export default SelectInputExamples;
