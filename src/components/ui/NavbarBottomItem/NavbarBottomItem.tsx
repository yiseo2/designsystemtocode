import type { CSSProperties, ReactNode } from 'react';

export type NavbarBottomItemState = 'selected' | 'inactive';
export type NavbarBottomItemAppearance = 'line' | 'text';

export interface NavbarBottomItemProps {
  state?: NavbarBottomItemState;
  appearance?: NavbarBottomItemAppearance;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const ITEM_WIDTH = 78;
const ITEM_HEIGHT = 48;
const ICON_SIZE = 24;

export function NavbarBottomItem({
  state = 'inactive',
  appearance = 'line',
  icon,
  label,
  onClick,
  className,
  style,
}: NavbarBottomItemProps) {
  const isSelected = state === 'selected';
  const isLine = appearance === 'line';

  const iconColor = isSelected
    ? 'var(--color-icon-accent)'
    : 'var(--color-icon-grey)';
  const labelColor = isSelected
    ? 'var(--color-text-accent)'
    : 'var(--color-text-disabled)';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      aria-label={label}
      className={className}
      style={{
        position: 'relative',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-xxs)',
        padding: 'var(--primitive-spacing-2-5)',
        boxSizing: 'border-box',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        ...style,
      }}
    >
      {isLine && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'var(--spacing-xxs)',
            backgroundColor: 'var(--primitive-primary-500)',
            opacity: isSelected ? 1 : 0,
          }}
        />
      )}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: ICON_SIZE,
          height: ICON_SIZE,
          color: iconColor,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      {!isLine && (
        <span
          style={{
            fontSize: 10,
            lineHeight: '14px',
            fontWeight: 500,
            color: labelColor,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      )}
    </button>
  );
}
