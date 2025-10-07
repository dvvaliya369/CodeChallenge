import React, { useState } from 'react';
import Button from './Button';

// Icons for demonstration
const SaveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17,21 17,13 7,13 7,21"/>
    <polyline points="7,3 7,8 15,8"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3,6 5,6 21,6"/>
    <path d="M19,6v14a2,2 0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ButtonExamples: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleAsyncAction = async () => {
    setLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setCounter(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Button Component Examples</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Basic Variants</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text Button</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Sizes</h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>States</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button disabled>Disabled</Button>
          <Button loading>Loading...</Button>
          <Button 
            loading={loading} 
            onClick={handleAsyncAction}
          >
            {loading ? 'Processing...' : `Click Me (${counter})`}
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>With Icons</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button icon={<SaveIcon />} iconPosition="left">
            Save
          </Button>
          <Button icon={<DownloadIcon />} iconPosition="right" variant="outline">
            Download
          </Button>
          <Button icon={<TrashIcon />} variant="danger" size="small">
            Delete
          </Button>
          <Button icon={<SaveIcon />} variant="success" loading>
            Saving...
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Special Styles</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button rounded>Rounded Button</Button>
          <Button rounded variant="outline" icon={<SaveIcon />}>
            Rounded with Icon
          </Button>
        </div>
        <div style={{ marginTop: '12px' }}>
          <Button fullWidth variant="primary">
            Full Width Button
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Interactive Examples</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button 
            onClick={() => alert('Primary button clicked!')}
            variant="primary"
          >
            Alert Button
          </Button>
          <Button 
            onClick={() => console.log('Button clicked')}
            variant="secondary"
            icon={<SaveIcon />}
          >
            Console Log
          </Button>
          <Button 
            type="button"
            variant="outline"
            onClick={() => setCounter(prev => prev + 1)}
          >
            Count: {counter}
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Form Usage</h2>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
          style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '6px' }}
        >
          <div style={{ marginBottom: '16px' }}>
            <label>
              Name: 
              <input 
                type="text" 
                defaultValue="John Doe"
                style={{ marginLeft: '8px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </label>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="button" variant="text">
              Cancel
            </Button>
          </div>
        </form>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Accessibility Features</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button 
            aria-label="Save document to your computer"
            icon={<SaveIcon />}
            variant="primary"
          >
            Save
          </Button>
          <Button 
            aria-label="Delete this item permanently"
            icon={<TrashIcon />}
            variant="danger"
          >
            Delete
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Custom Styling</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button 
            style={{ 
              backgroundColor: '#ff6b6b',
              borderColor: '#ff6b6b',
              color: 'white'
            }}
          >
            Custom Red
          </Button>
          <Button 
            className="custom-button"
            style={{ 
              background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: 'white'
            }}
          >
            Gradient Button
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Testing Features</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button testId="test-button-primary" variant="primary">
            Test Button
          </Button>
          <Button testId="test-button-loading" loading>
            Loading Test
          </Button>
          <Button testId="test-button-disabled" disabled>
            Disabled Test
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
