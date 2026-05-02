import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders title and description by default (vertical)', () => {
    render(<Card />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(
      screen.getByText('Keep your messages short, but make sure they cover everything you need to say.'),
    ).toBeInTheDocument();
  });

  it('renders both buttons by default in vertical orientation', () => {
    render(<Card />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('hides buttons in horizontal orientation', () => {
    render(<Card orientation="horizontal" />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('hides title when set to null', () => {
    render(<Card title={null} />);
    expect(screen.queryByText('Title')).toBeNull();
  });

  it('hides description when set to null', () => {
    render(<Card description={null} />);
    expect(
      screen.queryByText('Keep your messages short, but make sure they cover everything you need to say.'),
    ).toBeNull();
  });

  it('renders only primary button when secondary is null', () => {
    render(<Card secondaryButton={null} />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('hides all buttons when both are null', () => {
    render(<Card primaryButton={null} secondaryButton={null} />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('fires onClick handlers when buttons are clicked', () => {
    const onPrimary = vi.fn();
    const onSecondary = vi.fn();
    render(
      <Card
        primaryButton={{ label: 'Confirm', onClick: onPrimary }}
        secondaryButton={{ label: 'Cancel', onClick: onSecondary }}
      />,
    );
    screen.getByText('Confirm').click();
    screen.getByText('Cancel').click();
    expect(onPrimary).toHaveBeenCalledTimes(1);
    expect(onSecondary).toHaveBeenCalledTimes(1);
  });

  it('renders the image when imageSrc is provided', () => {
    render(<Card imageSrc="/sample.jpg" imageAlt="Sample" />);
    const img = screen.getByAltText('Sample');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/sample.jpg');
  });

  it('applies imageWidth in horizontal orientation', () => {
    const { container } = render(
      <Card orientation="horizontal" imageSrc="/sample.jpg" imageAlt="Sample" imageWidth={160} />,
    );
    const imageWrapper = container.querySelector('img')?.parentElement;
    expect(imageWrapper).toHaveStyle({ width: '160px' });
  });

  it('accepts string imageWidth (e.g. "10rem")', () => {
    const { container } = render(
      <Card orientation="horizontal" imageSrc="/sample.jpg" imageAlt="Sample" imageWidth="10rem" />,
    );
    const imageWrapper = container.querySelector('img')?.parentElement;
    expect(imageWrapper).toHaveStyle({ width: '10rem' });
  });

  it.each(['vertical', 'horizontal'] as const)(
    'renders %s orientation without crashing',
    (orientation) => {
      const { container } = render(<Card orientation={orientation} />);
      expect(container.querySelector(`[data-orientation="${orientation}"]`)).toBeInTheDocument();
    },
  );
});
