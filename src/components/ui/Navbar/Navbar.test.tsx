import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders the default logo "Studio Mira"', () => {
    render(<Navbar />);
    expect(screen.getByText('Studio Mira')).toBeInTheDocument();
  });

  it('renders default menu items in web status', () => {
    render(<Navbar status="web" />);
    expect(screen.getByRole('button', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Approach' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument();
  });

  it('renders the CTA in web status', () => {
    render(<Navbar status="web" />);
    expect(screen.getByRole('button', { name: '문의하기' })).toBeInTheDocument();
  });

  it('does not render menu items or CTA in mobile status', () => {
    render(<Navbar status="mobile" />);
    expect(screen.queryByRole('button', { name: 'Work' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '문의하기' })).not.toBeInTheDocument();
  });

  it('renders the hamburger menu button in mobile status', () => {
    render(<Navbar status="mobile" />);
    expect(screen.getByRole('button', { name: '메뉴 열기' })).toBeInTheDocument();
  });

  it('fires onCtaClick when the CTA is clicked', () => {
    const onCtaClick = vi.fn();
    render(<Navbar status="web" onCtaClick={onCtaClick} />);
    fireEvent.click(screen.getByRole('button', { name: '문의하기' }));
    expect(onCtaClick).toHaveBeenCalledTimes(1);
  });

  it('fires onMenuClick when the hamburger button is clicked', () => {
    const onMenuClick = vi.fn();
    render(<Navbar status="mobile" onMenuClick={onMenuClick} />);
    fireEvent.click(screen.getByRole('button', { name: '메뉴 열기' }));
    expect(onMenuClick).toHaveBeenCalledTimes(1);
  });

  it('fires the per-item onClick when a menu item is clicked', () => {
    const onWorkClick = vi.fn();
    render(
      <Navbar
        status="web"
        menuItems={[
          { label: 'Work', onClick: onWorkClick },
          { label: 'About' },
        ]}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Work' }));
    expect(onWorkClick).toHaveBeenCalledTimes(1);
  });

  it('fires onLogoClick when the logo is clicked', () => {
    const onLogoClick = vi.fn();
    render(<Navbar onLogoClick={onLogoClick} />);
    fireEvent.click(screen.getByText('Studio Mira'));
    expect(onLogoClick).toHaveBeenCalledTimes(1);
  });

  it('exposes status via data-status attribute', () => {
    const { container } = render(<Navbar status="mobile" />);
    expect(container.querySelector('nav')).toHaveAttribute('data-status', 'mobile');
  });

  it('accepts a custom logo node', () => {
    render(<Navbar logo="Acme" />);
    expect(screen.getByText('Acme')).toBeInTheDocument();
  });
});
