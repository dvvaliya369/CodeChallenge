import React from 'react';
import renderer from 'react-test-renderer';
import { CustomTextInput, ValidationRules } from '../src/components/Common';

describe('CustomTextInput Component', () => {
  it('renders correctly with basic props', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          placeholder="Test placeholder"
          value=""
          onChangeText={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with label when provided', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          label="Test Label"
          placeholder="Test placeholder"
          value=""
          onChangeText={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with required indicator when required prop is true', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          label="Test Label"
          placeholder="Test placeholder"
          value=""
          onChangeText={() => {}}
          required
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with error message when error prop is provided', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          placeholder="Test placeholder"
          value=""
          onChangeText={() => {}}
          error="This is an error message"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with character count when showCharacterCount and maxLength are provided', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          label="Test Label"
          placeholder="Test placeholder"
          value="test"
          onChangeText={() => {}}
          maxLength={100}
          showCharacterCount
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with password toggle when secureTextEntry is true', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          placeholder="Password"
          value="password123"
          onChangeText={() => {}}
          secureTextEntry
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders as disabled when editable is false', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          placeholder="Test placeholder"
          value="disabled value"
          onChangeText={() => {}}
          editable={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with multiline input', () => {
    const tree = renderer
      .create(
        <CustomTextInput
          placeholder="Test placeholder"
          value=""
          onChangeText={() => {}}
          multiline
          numberOfLines={4}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ValidationRules', () => {
  describe('email validation', () => {
    it('returns null for valid email', () => {
      expect(ValidationRules.email('test@example.com')).toBeNull();
    });

    it('returns error for invalid email', () => {
      expect(ValidationRules.email('invalid-email')).toBe('Please enter a valid email address');
    });

    it('returns null for empty value', () => {
      expect(ValidationRules.email('')).toBeNull();
    });
  });

  describe('minLength validation', () => {
    it('returns null for valid length', () => {
      expect(ValidationRules.minLength(5)('hello world')).toBeNull();
    });

    it('returns error for invalid length', () => {
      expect(ValidationRules.minLength(5)('hi')).toBe('Minimum 5 characters required');
    });
  });

  describe('maxLength validation', () => {
    it('returns null for valid length', () => {
      expect(ValidationRules.maxLength(10)('hello')).toBeNull();
    });

    it('returns error for invalid length', () => {
      expect(ValidationRules.maxLength(5)('hello world')).toBe('Maximum 5 characters allowed');
    });
  });

  describe('phone validation', () => {
    it('returns null for valid phone number', () => {
      expect(ValidationRules.phone('+1-234-567-8900')).toBeNull();
      expect(ValidationRules.phone('(555) 123-4567')).toBeNull();
    });

    it('returns error for invalid phone number', () => {
      expect(ValidationRules.phone('invalid-phone')).toBe('Please enter a valid phone number');
    });
  });

  describe('password validation', () => {
    it('returns null for valid password', () => {
      expect(ValidationRules.password('Password123')).toBeNull();
    });

    it('returns error for short password', () => {
      expect(ValidationRules.password('Pass1')).toBe('Password must be at least 8 characters');
    });

    it('returns error for password without required characters', () => {
      expect(ValidationRules.password('password123')).toBe('Password must contain uppercase, lowercase, and number');
    });
  });
});
