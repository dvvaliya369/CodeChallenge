import React, { useState } from 'react';
import { TextInput } from './TextInput';

const TextInputExamples: React.FC = () => {
  const [values, setValues] = useState({
    basic: '',
    email: '',
    password: '',
    withError: 'invalid@email',
    controlled: 'Controlled value'
  });

  const [errors, setErrors] = useState({
    withError: 'Please enter a valid email address'
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({
      ...prev,
      [field]: e.target.value
    }));

    // Clear error for withError field when user starts typing
    if (field === 'withError' && errors.withError) {
      setErrors(prev => ({
        ...prev,
        withError: ''
      }));
    }
  };

  const validateEmail = (email: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid && email) {
      setErrors(prev => ({
        ...prev,
        withError: 'Please enter a valid email address'
      }));
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>TextInput Component Examples</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Basic Input */}
        <section>
          <h2>Basic Input</h2>
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={values.basic}
            onChange={handleChange('basic')}
          />
        </section>

        {/* Email Input with Validation */}
        <section>
          <h2>Email Input with Validation</h2>
          <TextInput
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            value={values.email}
            onChange={handleChange('email')}
            helperText="We'll never share your email address"
            required
          />
        </section>

        {/* Password Input */}
        <section>
          <h2>Password Input</h2>
          <TextInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange('password')}
            helperText="Must be at least 8 characters"
            required
          />
        </section>

        {/* Input with Error State */}
        <section>
          <h2>Input with Error State</h2>
          <TextInput
            type="email"
            label="Email with Error"
            placeholder="Enter a valid email"
            value={values.withError}
            onChange={handleChange('withError')}
            onBlur={(e) => validateEmail(e.target.value)}
            error={errors.withError}
            required
          />
        </section>

        {/* Different Sizes */}
        <section>
          <h2>Different Sizes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextInput
              label="Small Input"
              placeholder="Small size"
              size="small"
              value=""
              onChange={() => {}}
            />
            <TextInput
              label="Medium Input (Default)"
              placeholder="Medium size"
              size="medium"
              value=""
              onChange={() => {}}
            />
            <TextInput
              label="Large Input"
              placeholder="Large size"
              size="large"
              value=""
              onChange={() => {}}
            />
          </div>
        </section>

        {/* Full Width */}
        <section>
          <h2>Full Width Input</h2>
          <TextInput
            label="Full Width Input"
            placeholder="This input takes full width"
            fullWidth
            value=""
            onChange={() => {}}
          />
        </section>

        {/* Disabled State */}
        <section>
          <h2>Disabled State</h2>
          <TextInput
            label="Disabled Input"
            placeholder="This input is disabled"
            value="Cannot edit this"
            disabled
            onChange={() => {}}
          />
        </section>

        {/* Controlled Input */}
        <section>
          <h2>Controlled Input</h2>
          <TextInput
            label="Controlled Input"
            value={values.controlled}
            onChange={handleChange('controlled')}
            helperText={`Current value: "${values.controlled}"`}
          />
        </section>

        {/* Various Input Types */}
        <section>
          <h2>Various Input Types</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <TextInput
              type="text"
              label="Text"
              placeholder="Text input"
              onChange={() => {}}
            />
            <TextInput
              type="email"
              label="Email"
              placeholder="email@example.com"
              onChange={() => {}}
            />
            <TextInput
              type="password"
              label="Password"
              placeholder="Password"
              onChange={() => {}}
            />
            <TextInput
              type="tel"
              label="Phone"
              placeholder="+1 (555) 123-4567"
              onChange={() => {}}
            />
            <TextInput
              type="url"
              label="Website"
              placeholder="https://example.com"
              onChange={() => {}}
            />
            <TextInput
              type="number"
              label="Number"
              placeholder="42"
              onChange={() => {}}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TextInputExamples;
