import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders title and description by default', () => {
    render(<Alert />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Get immediate alerts and a notification badge.')).toBeInTheDocument();
  });

  it('renders custom title and description', () => {
    render(<Alert title="Heads up" description="Something happened." />);
    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('Something happened.')).toBeInTheDocument();
  });

  it('hides icon when icon is false', () => {
    const { container } = render(<Alert icon={false} />);
    expect(container.querySelector('svg')).toBeNull();
  });

  it('renders both buttons by default', () => {
    render(<Alert />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('hides buttons when set to null', () => {
    render(<Alert leftButton={null} rightButton={null} />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('fires onClick handlers when buttons are clicked', () => {
    const onLeft = vi.fn();
    const onRight = vi.fn();
    render(
      <Alert
        leftButton={{ label: 'Confirm', onClick: onLeft }}
        rightButton={{ label: 'Cancel', onClick: onRight }}
      />,
    );
    screen.getByText('Confirm').click();
    screen.getByText('Cancel').click();
    expect(onLeft).toHaveBeenCalledTimes(1);
    expect(onRight).toHaveBeenCalledTimes(1);
  });

  it.each(['default', 'success', 'info', 'warning', 'error'] as const)(
    'renders %s state without crashing',
    (state) => {
      render(<Alert state={state} />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    },
  );

  it.each(['filled', 'outline'] as const)(
    'renders %s style variant without crashing',
    (styleVariant) => {
      render(<Alert styleVariant={styleVariant} />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    },
  );
});
