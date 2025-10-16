import React from 'react';
import { Button } from '../components';

/**
 * Example usage of the Button component
 */
const ButtonExamples: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <h1>Button Component Examples</h1>

      <section>
        <h2>Variants</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section>
        <h2>Sizes</h2>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      <section>
        <h2>States</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </section>

      <section>
        <h2>With Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button startIcon="📧">Email</Button>
          <Button endIcon="→">Next</Button>
          <Button startIcon="💾" endIcon="✓">
            Save Changes
          </Button>
        </div>
      </section>

      <section>
        <h2>Full Width</h2>
        <Button variant="primary" fullWidth>
          Full Width Button
        </Button>
      </section>

      <section>
        <h2>Interactive Examples</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            onClick={() => alert('Primary button clicked!')}
          >
            Click Me
          </Button>
          <Button
            variant="outline"
            onClick={() => console.log('Outline button clicked')}
          >
            Log to Console
          </Button>
          <Button
            variant="danger"
            onClick={() => confirm('Are you sure you want to delete?')}
          >
            Delete Item
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
