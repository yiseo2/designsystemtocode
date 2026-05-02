import type { CSSProperties, ReactNode } from 'react';

export type AlertState = 'default' | 'success' | 'info' | 'warning' | 'error';
export type AlertStyle = 'filled' | 'outline';

export interface AlertProps {
  state?: AlertState;
  styleVariant?: AlertStyle;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode | false;
  leftButton?: { label: ReactNode; onClick?: () => void } | null;
  rightButton?: { label: ReactNode; onClick?: () => void } | null;
  className?: string;
  style?: CSSProperties;
}

const STATE_TOKENS: Record<
  AlertState,
  { primitive500: string; primitive50: string; textColor: string }
> = {
  default: {
    primitive500: 'var(--primitive-primary-500)',
    primitive50: 'var(--primitive-primary-50)',
    textColor: 'var(--color-text-accent)',
  },
  success: {
    primitive500: 'var(--primitive-green-500)',
    primitive50: 'var(--primitive-green-50)',
    textColor: 'var(--color-text-success)',
  },
  info: {
    primitive500: 'var(--primitive-blue-500)',
    primitive50: 'var(--primitive-blue-50)',
    textColor: 'var(--color-text-info)',
  },
  warning: {
    primitive500: 'var(--primitive-yellow-500)',
    primitive50: 'var(--primitive-yellow-50)',
    textColor: 'var(--color-text-warning)',
  },
  error: {
    primitive500: 'var(--primitive-red-500)',
    primitive50: 'var(--primitive-red-50)',
    textColor: 'var(--color-text-error)',
  },
};

function StarIcon({ color }: { color: string }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function Alert({
  state = 'default',
  styleVariant = 'filled',
  title = 'Title',
  description = 'Get immediate alerts and a notification badge.',
  icon,
  leftButton = { label: 'Button' },
  rightButton = { label: 'Button' },
  className,
  style,
}: AlertProps) {
  const tokens = STATE_TOKENS[state];
  const isFilled = styleVariant === 'filled';

  const containerStyle: CSSProperties = isFilled
    ? {
        backgroundColor: tokens.primitive500,
        border: 'none',
      }
    : {
        backgroundColor: tokens.primitive50,
        border: `1.5px solid ${tokens.primitive500}`,
      };

  const titleColor = isFilled
    ? 'var(--color-text-primary-white)'
    : 'var(--color-text-primary-black)';

  const descriptionColor = isFilled
    ? 'var(--color-text-secondary-white)'
    : 'var(--color-text-secondary-dark-grey)';

  const leftButtonColor = isFilled ? 'var(--color-text-primary-white)' : tokens.textColor;
  const rightButtonColor = isFilled
    ? 'var(--color-text-secondary-white)'
    : 'var(--color-text-grey)';

  const iconColor = isFilled ? 'var(--color-icon-white)' : tokens.primitive500;
  const iconNode = icon === false ? null : (icon ?? <StarIcon color={iconColor} />);

  const showButtons = leftButton || rightButton;

  return (
    <div
      role="alert"
      className={className}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-sm)',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
        ...containerStyle,
        ...style,
      }}
    >
      {iconNode && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            flexShrink: 0,
            width: '24px',
            height: '24px',
          }}
        >
          {iconNode}
        </span>
      )}
      <div
        style={{
          display: 'flex',
          flex: '1 1 0',
          flexDirection: 'column',
          gap: 'var(--spacing-md)',
          minWidth: 0,
        }}
      >
        {(title || description) && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xxs)',
              width: '100%',
            }}
          >
            {title && (
              <p
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-s2-subtitle)',
                  lineHeight: 'var(--line-height-s2-subtitle)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: titleColor,
                }}
              >
                {title}
              </p>
            )}
            {description && (
              <p
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-b3-body)',
                  lineHeight: 'var(--line-height-b3-body)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: descriptionColor,
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {showButtons && (
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              alignItems: 'center',
            }}
          >
            {leftButton && (
              <button
                type="button"
                onClick={leftButton.onClick}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'var(--font-size-button-large)',
                  lineHeight: 'var(--line-height-button-large)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: leftButtonColor,
                }}
              >
                {leftButton.label}
              </button>
            )}
            {rightButton && (
              <button
                type="button"
                onClick={rightButton.onClick}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'var(--font-size-button-large)',
                  lineHeight: 'var(--line-height-button-large)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: rightButtonColor,
                }}
              >
                {rightButton.label}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
