import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with default size and type via data attributes', () => {
    const { container } = render(<Avatar />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-size', 'medium');
    expect(root).toHaveAttribute('data-type', 'image');
  });

  it('renders an img when type="image" with src', () => {
    render(<Avatar type="image" src="/u.png" alt="User" />);
    const img = screen.getByAltText('User') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('/u.png');
  });

  it('renders the letter when type="letter"', () => {
    render(<Avatar type="letter" letter="A" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders the icon node when type="icon"', () => {
    render(<Avatar type="icon" icon={<span data-testid="ico">★</span>} />);
    expect(screen.getByTestId('ico')).toBeInTheDocument();
  });

  it('does not show status dot by default', () => {
    const { container } = render(<Avatar type="letter" letter="A" />);
    expect(container.querySelector('[data-name="status-dot"]')).toBeNull();
  });

  it('shows status dot when status=true', () => {
    const { container } = render(<Avatar type="letter" letter="A" status />);
    expect(container.querySelector('[data-name="status-dot"]')).not.toBeNull();
  });

  it('reflects size variant via data attribute', () => {
    const { container } = render(<Avatar size="xxxl-giant" />);
    expect(container.firstChild).toHaveAttribute('data-size', 'xxxl-giant');
  });

  it('forwards extra props (e.g. aria-label) to the root', () => {
    const { container } = render(<Avatar aria-label="Profile picture" />);
    expect(container.firstChild).toHaveAttribute('aria-label', 'Profile picture');
  });
});
