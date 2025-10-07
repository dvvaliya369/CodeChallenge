import React, { useState } from 'react';
import { TextInput } from '../components/TextInput';

// Simple icons for demonstration
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21L16.65 16.65"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21V19a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const TextInputDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    search: '',
    bio: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>TextInput Component Demo</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <h2>Size Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextInput
            size="small"
            placeholder="Small input"
            label="Small Size"
          />
          <TextInput
            size="medium"
            placeholder="Medium input (default)"
            label="Medium Size"
          />
          <TextInput
            size="large"
            placeholder="Large input"
            label="Large Size"
          />
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Style Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextInput
            variant="outlined"
            placeholder="Outlined input (default)"
            label="Outlined"
          />
          <TextInput
            variant="filled"
            placeholder="Filled input"
            label="Filled"
          />
          <TextInput
            variant="standard"
            placeholder="Standard input"
            label="Standard"
          />
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>With Icons</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextInput
            startIcon={<SearchIcon />}
            placeholder="Search..."
            label="Search Input"
          />
          <TextInput
            startIcon={<UserIcon />}
            placeholder="Enter username"
            label="Username"
          />
          <TextInput
            endIcon={<EyeIcon />}
            type="password"
            placeholder="Enter password"
            label="Password with End Icon"
          />
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextInput
            placeholder="Regular input"
            label="Normal State"
          />
          <TextInput
            placeholder="This input is disabled"
            label="Disabled State"
            disabled
          />
          <TextInput
            placeholder="This has an error"
            label="Error State"
            error="This field is required"
          />
          <TextInput
            placeholder="With helper text"
            label="With Helper Text"
            helperText="This is some helpful information"
          />
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Character Count</h2>
        <TextInput
          placeholder="Type something..."
          label="Message"
          helperText="Enter your message"
          maxLength={100}
          showCharacterCount
          value={formData.bio}
          onChange={handleInputChange('bio')}
        />
      </div>

      <div>
        <h2>Complete Form Example</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            required
            startIcon={<UserIcon />}
            value={formData.name}
            onChange={handleInputChange('name')}
            error={errors.name}
          />
          
          <TextInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
          />
          
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            helperText="Must be at least 6 characters"
            endIcon={<EyeIcon />}
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
          />
          
          <TextInput
            label="Search"
            placeholder="Search for something..."
            startIcon={<SearchIcon />}
            value={formData.search}
            onChange={handleInputChange('search')}
            helperText="Optional search field"
          />
          
          <button 
            type="submit" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#3b82f6', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '1rem'
            }}
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};
