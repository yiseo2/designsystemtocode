import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { ICON_NAMES } from './icons';

describe('Icon', () => {
  it('renders an svg with the requested name as data attribute', () => {
    const { container } = render(<Icon name="arrow-left" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('data-icon', 'arrow-left');
  });

  it('defaults to 24px size and reflects size via data attribute', () => {
    const { container } = render(<Icon name="arrow-right" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('data-size', '24');
  });

  it('honors size=16', () => {
    const { container } = render(<Icon name="arrow-up" size={16} />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');
    expect(svg).toHaveAttribute('data-size', '16');
  });

  it('hides icon from a11y tree by default (no aria-label)', () => {
    const { container } = render(<Icon name="arrow-down" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).not.toHaveAttribute('role');
  });

  it('exposes icon via role="img" when aria-label is provided', () => {
    render(<Icon name="arrow-left" aria-label="뒤로" />);
    const svg = screen.getByRole('img', { name: '뒤로' });
    expect(svg).toBeInTheDocument();
    expect(svg).not.toHaveAttribute('aria-hidden');
  });

  it('uses currentColor stroke (lucide default)', () => {
    const { container } = render(<Icon name="arrow-right" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('stroke')).toBe('currentColor');
  });

  it('exposes ICON_NAMES with all 76 mapped names', () => {
    expect(ICON_NAMES.length).toBe(76);
    expect(ICON_NAMES).toContain('arrow-left');
    expect(ICON_NAMES).toContain('filter-list-circle');
  });
});
