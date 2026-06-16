/**
 * Tests for the Button component.
 *
 * Covers:
 *  1. Basic rendering variants and sizes
 *  2. Bug fix: aria-busy is set on the button when loading (accessibility)
 *  3. Bug fix: loading state takes cursor:wait precedence over disabled (CSS class combo)
 *  4. Disabled state behaviour
 *  5. Icon rendering
 *  6. fullWidth class application
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/Button';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const getButton = () => screen.getByRole('button');

// ---------------------------------------------------------------------------
// Basic rendering
// ---------------------------------------------------------------------------
describe('Button – basic rendering', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeTruthy();
  });

  it('applies the primary variant class by default', () => {
    render(<Button>Primary</Button>);
    expect(getButton().className).toContain('btn--primary');
  });

  it('applies the correct variant class', () => {
    render(<Button variant="danger">Delete</Button>);
    expect(getButton().className).toContain('btn--danger');
  });

  it('applies the correct size class', () => {
    render(<Button size="large">Big</Button>);
    expect(getButton().className).toContain('btn--large');
  });

  it('applies btn--full-width when fullWidth is true', () => {
    render(<Button fullWidth>Full</Button>);
    expect(getButton().className).toContain('btn--full-width');
  });

  it('does not apply btn--full-width by default', () => {
    render(<Button>Normal</Button>);
    expect(getButton().className).not.toContain('btn--full-width');
  });
});

// ---------------------------------------------------------------------------
// Disabled state
// ---------------------------------------------------------------------------
describe('Button – disabled state', () => {
  it('has the disabled HTML attribute when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(getButton()).toBeDisabled();
  });

  it('applies btn--disabled class when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(getButton().className).toContain('btn--disabled');
  });

  it('does not fire onClick when disabled', async () => {
    const handler = jest.fn();
    render(<Button disabled onClick={handler}>Disabled</Button>);
    await userEvent.click(getButton());
    expect(handler).not.toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// Loading state — covers Bug #2 (aria-busy) and Bug #1 (cursor class)
// ---------------------------------------------------------------------------
describe('Button – loading state', () => {
  it('renders the spinner element when loading', () => {
    render(<Button loading>Save</Button>);
    expect(getButton().querySelector('.btn__spinner')).toBeTruthy();
  });

  it('does NOT render the spinner when not loading', () => {
    render(<Button>Save</Button>);
    expect(getButton().querySelector('.btn__spinner')).toBeNull();
  });

  /**
   * BUG FIX #2: The loading state was not communicated to assistive technology.
   * aria-busy="true" must be present on the <button> when loading is true.
   */
  it('sets aria-busy="true" on the button when loading (Bug #2 regression)', () => {
    render(<Button loading>Loading</Button>);
    expect(getButton()).toHaveAttribute('aria-busy', 'true');
  });

  /**
   * aria-busy must NOT be present (or must be falsy) when the button is idle,
   * to avoid polluting the accessibility tree unnecessarily.
   */
  it('does not set aria-busy when not loading', () => {
    render(<Button>Idle</Button>);
    const btn = getButton();
    // Either the attribute is absent or explicitly "false"
    const ariaBusy = btn.getAttribute('aria-busy');
    expect(ariaBusy === null || ariaBusy === 'false').toBe(true);
  });

  /**
   * BUG FIX #1: When loading, the button must carry BOTH btn--loading AND
   * btn--disabled classes. The CSS combinator .btn--disabled.btn--loading
   * ensures cursor:wait wins over cursor:not-allowed; confirming both classes
   * are present is the prerequisite for that rule to fire.
   */
  it('applies both btn--loading and btn--disabled when loading (Bug #1 regression)', () => {
    render(<Button loading>Saving…</Button>);
    const className = getButton().className;
    expect(className).toContain('btn--loading');
    expect(className).toContain('btn--disabled');
  });

  it('is disabled (HTML attribute) when loading', () => {
    render(<Button loading>Saving…</Button>);
    expect(getButton()).toBeDisabled();
  });

  it('does not fire onClick when loading', async () => {
    const handler = jest.fn();
    render(<Button loading onClick={handler}>Saving…</Button>);
    await userEvent.click(getButton());
    expect(handler).not.toHaveBeenCalled();
  });

  it('hides start and end icons during loading', () => {
    render(
      <Button loading startIcon={<span data-testid="start">S</span>} endIcon={<span data-testid="end">E</span>}>
        Action
      </Button>,
    );
    expect(screen.queryByTestId('start')).toBeNull();
    expect(screen.queryByTestId('end')).toBeNull();
  });

  it('applies btn__text--loading class to children span when loading', () => {
    render(<Button loading>Saving</Button>);
    // The children are wrapped in a span; confirm the class
    expect(getButton().querySelector('.btn__text--loading')).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// Icon slots
// ---------------------------------------------------------------------------
describe('Button – icon slots', () => {
  it('renders startIcon when not loading', () => {
    render(<Button startIcon={<span data-testid="si">»</span>}>Go</Button>);
    expect(screen.getByTestId('si')).toBeTruthy();
  });

  it('renders endIcon when not loading', () => {
    render(<Button endIcon={<span data-testid="ei">»</span>}>Go</Button>);
    expect(screen.getByTestId('ei')).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// Custom className pass-through
// ---------------------------------------------------------------------------
describe('Button – className pass-through', () => {
  it('merges custom className with generated classes', () => {
    render(<Button className="my-custom-class">Custom</Button>);
    expect(getButton().className).toContain('my-custom-class');
    expect(getButton().className).toContain('btn');
  });
});
