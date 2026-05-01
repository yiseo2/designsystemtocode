import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children inside a button element', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('fires onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled prop is set', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click
      </Button>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the disabled attribute when state="disabled"', () => {
    render(<Button state="disabled">Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('reflects forced state via data-state attribute', () => {
    render(<Button state="hover">Click</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'hover');
  });

  it('exposes variant and size via data attributes', () => {
    render(
      <Button variant="outline" size="giant">
        Click
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('data-variant', 'outline');
    expect(btn).toHaveAttribute('data-size', 'giant');
  });

  it('renders left and right icon slots', () => {
    render(
      <Button
        leftIcon={<span data-testid="lx">L</span>}
        rightIcon={<span data-testid="rx">R</span>}
      >
        Mid
      </Button>,
    );
    expect(screen.getByTestId('lx')).toBeInTheDocument();
    expect(screen.getByTestId('rx')).toBeInTheDocument();
  });

  it('uses aria-label as accessible name in iconOnly mode', () => {
    render(
      <Button iconOnly aria-label="Close">
        <span data-testid="x">X</span>
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    expect(screen.getByTestId('x')).toBeInTheDocument();
  });

  it('defaults type to "button" to prevent accidental form submits', () => {
    render(<Button>Safe</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
