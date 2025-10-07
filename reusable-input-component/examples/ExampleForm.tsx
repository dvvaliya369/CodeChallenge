import React, { useState } from 'react';
import { Input } from '../src/components/Input';

const ExampleForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    website: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.phone && !/^[\+]?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL (starting with http:// or https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      console.log('Form data:', formData);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <h1>Input Component Examples</h1>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange('name')}
          error={errors.name}
          required
          autoFocus
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={errors.email}
          required
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange('password')}
          error={errors.password}
          required
          minLength={6}
          autoComplete="new-password"
        />

        <Input
          label="Phone Number (Optional)"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          error={errors.phone}
          autoComplete="tel"
        />

        <Input
          label="Website (Optional)"
          type="url"
          placeholder="https://example.com"
          value={formData.website}
          onChange={handleInputChange('website')}
          error={errors.website}
          autoComplete="url"
        />

        <div style={{ marginTop: '1.5rem' }}>
          <button 
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              cursor: 'pointer',
              marginRight: '0.5rem'
            }}
          >
            Submit Form
          </button>
          
          <button 
            type="button"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                password: '',
                phone: '',
                website: ''
              });
              setErrors({});
            }}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h2>Other Examples</h2>
        
        <Input
          label="Disabled Input"
          placeholder="This input is disabled"
          disabled
        />
        
        <Input
          label="Read-only Input"
          value="This is read-only"
          readOnly
        />
        
        <Input
          label="Input with Error"
          placeholder="This has an error"
          error="This is an error message"
        />

        <Input
          placeholder="Input without label"
          aria-label="Input without visible label"
        />
      </div>
    </div>
  );
};

export default ExampleForm;
