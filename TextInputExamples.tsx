import React, { useState } from 'react';
import { TextInput } from './TextInput';

export const TextInputExamples: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [validationValue, setValidationValue] = useState('');
  const [counterValue, setCounterValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="21 21l-4.35-4.35" />
    </svg>
  );

  const EyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>TextInput Component Examples</h1>
      
      {/* Basic Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Basic Usage</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <TextInput
            label="Basic Input"
            placeholder="Enter some text..."
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
            helperText="This is a basic text input"
          />
          
          <TextInput
            label="Required Field"
            placeholder="This field is required"
            required
          />
          
          <TextInput
            label="Disabled Input"
            placeholder="Cannot edit this"
            disabled
            defaultValue="Disabled text"
          />
          
          <TextInput
            label="Read-only Input"
            readOnly
            defaultValue="Read-only text"
          />
        </div>
      </section>

      {/* Input Types */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Input Types</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <TextInput
            type="email"
            label="Email"
            placeholder="user@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            error={validateEmail(emailValue)}
          />
          
          <TextInput
            type={showPassword ? 'text' : 'password'}
            label="Password"
            placeholder="Enter password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            endIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
            onEndIconClick={() => setShowPassword(!showPassword)}
          />
          
          <TextInput
            type="search"
            label="Search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            startIcon={<SearchIcon />}
          />
          
          <TextInput
            type="number"
            label="Age"
            placeholder="25"
            min="0"
            max="150"
          />
        </div>
      </section>

      {/* Variants */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Variants</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <TextInput
            variant="default"
            label="Default Variant"
            placeholder="Default border style"
          />
          
          <TextInput
            variant="filled"
            label="Filled Variant"
            placeholder="Filled background style"
          />
          
          <TextInput
            variant="outline"
            label="Outline Variant"
            placeholder="Thick border style"
          />
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Sizes</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          <TextInput
            size="small"
            label="Small Size"
            placeholder="Small input"
          />
          
          <TextInput
            size="medium"
            label="Medium Size"
            placeholder="Medium input (default)"
          />
          
          <TextInput
            size="large"
            label="Large Size"
            placeholder="Large input"
          />
        </div>
      </section>

      {/* Icons */}
      <section style={{ marginBottom: '40px' }}>
        <h2>With Icons</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <TextInput
            label="Start Icon"
            placeholder="Username"
            startIcon={<UserIcon />}
          />
          
          <TextInput
            label="End Icon"
            placeholder="Search here..."
            endIcon={<SearchIcon />}
          />
          
          <TextInput
            label="Clickable End Icon"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            endIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
            onEndIconClick={() => setShowPassword(!showPassword)}
          />
          
          <TextInput
            label="Both Icons"
            placeholder="Username search"
            startIcon={<UserIcon />}
            endIcon={<SearchIcon />}
          />
        </div>
      </section>

      {/* Validation */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Validation & Error States</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <TextInput
            label="Username"
            placeholder="Enter username"
            value={validationValue}
            onChange={(e) => setValidationValue(e.target.value)}
            error={validationValue.length > 0 && validationValue.length < 3 ? 'Username must be at least 3 characters' : undefined}
            helperText="Minimum 3 characters required"
          />
          
          <TextInput
            label="Email with Pattern"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="user@example.com"
            error="Please enter a valid email address"
          />
          
          <TextInput
            label="Loading State"
            placeholder="Processing..."
            loading
            disabled
          />
        </div>
      </section>

      {/* Character Counter */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Character Counter</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          <TextInput
            label="Bio"
            placeholder="Tell us about yourself..."
            value={counterValue}
            onChange={(e) => setCounterValue(e.target.value)}
            maxLength={100}
            showCounter
            helperText="Brief description of yourself"
          />
          
          <TextInput
            label="Tweet"
            placeholder="What's happening?"
            maxLength={10}
            showCounter
            defaultValue="This text exceeds the limit"
          />
        </div>
      </section>

      {/* Full Width */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Full Width</h2>
        <TextInput
          label="Full Width Input"
          placeholder="This input takes the full width of its container"
          fullWidth
          helperText="Great for forms and layouts"
        />
      </section>

      {/* Form Example */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Form Example</h2>
        <form 
          style={{ 
            display: 'grid', 
            gap: '16px', 
            maxWidth: '400px',
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
        >
          <TextInput
            label="First Name"
            placeholder="John"
            required
            fullWidth
          />
          
          <TextInput
            label="Last Name"
            placeholder="Doe"
            required
            fullWidth
          />
          
          <TextInput
            type="email"
            label="Email Address"
            placeholder="john.doe@example.com"
            required
            fullWidth
          />
          
          <TextInput
            type="tel"
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            fullWidth
          />
          
          <TextInput
            label="Company"
            placeholder="Acme Corp"
            fullWidth
          />
          
          <button 
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Submit
          </button>
        </form>
      </section>

      {/* Accessibility Features */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Accessibility Features</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          <TextInput
            label="Screen Reader Friendly"
            placeholder="Try using a screen reader"
            aria-label="Custom accessible label"
            helperText="This input has proper ARIA attributes"
          />
          
          <TextInput
            label="Required Field with Error"
            placeholder="This will show an error"
            required
            error="This field is required"
            aria-describedby="custom-description"
          />
          
          <p id="custom-description" style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>
            Additional context for screen readers
          </p>
        </div>
      </section>
    </div>
  );
};

export default TextInputExamples;
