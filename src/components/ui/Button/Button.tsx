import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

export type ButtonVariant = 'filled' | 'outline' | 'clear';
export type ButtonSize = 'giant' | 'large' | 'medium' | 'small' | 'tiny';
export type ButtonState = 'default' | 'hover' | 'focus' | 'press' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

const base = [
  'inline-flex items-center justify-center select-none',
  'font-semibold whitespace-nowrap',
  'rounded-[var(--radius-sm)]',
  'transition-colors duration-150',
  'outline-none cursor-pointer',
  'disabled:cursor-not-allowed data-[state=disabled]:cursor-not-allowed',
  'focus-visible:ring-2 focus-visible:ring-[var(--primitive-primary-500)] focus-visible:ring-offset-2',
  'data-[state=focus]:ring-2 data-[state=focus]:ring-[var(--primitive-primary-500)] data-[state=focus]:ring-offset-2',
].join(' ');

const variantStyles: Record<ButtonVariant, string> = {
  filled: [
    'bg-[var(--primitive-primary-500)] text-[var(--color-text-primary-white)]',
    'hover:bg-[var(--primitive-primary-700)]',
    'active:bg-[var(--primitive-primary-800)]',
    'disabled:bg-[var(--primitive-grey-200)] disabled:text-[var(--color-text-disabled)]',
    'data-[state=hover]:bg-[var(--primitive-primary-700)]',
    'data-[state=press]:bg-[var(--primitive-primary-800)]',
    'data-[state=disabled]:bg-[var(--primitive-grey-200)] data-[state=disabled]:text-[var(--color-text-disabled)]',
  ].join(' '),
  outline: [
    'bg-transparent text-[var(--color-text-accent)]',
    'border-[1.5px] border-[var(--primitive-primary-500)]',
    'hover:bg-[var(--color-surface-accent)]',
    'active:bg-[var(--primitive-primary-100)]',
    'disabled:bg-transparent disabled:border-[var(--primitive-grey-300)] disabled:text-[var(--color-text-disabled)]',
    'data-[state=hover]:bg-[var(--color-surface-accent)]',
    'data-[state=press]:bg-[var(--primitive-primary-100)]',
    'data-[state=disabled]:bg-transparent data-[state=disabled]:border-[var(--primitive-grey-300)] data-[state=disabled]:text-[var(--color-text-disabled)]',
  ].join(' '),
  clear: [
    'bg-transparent text-[var(--color-text-accent)]',
    'hover:bg-[var(--color-surface-accent)]',
    'active:bg-[var(--primitive-primary-100)]',
    'disabled:bg-transparent disabled:text-[var(--color-text-disabled)]',
    'data-[state=hover]:bg-[var(--color-surface-accent)]',
    'data-[state=press]:bg-[var(--primitive-primary-100)]',
    'data-[state=disabled]:bg-transparent data-[state=disabled]:text-[var(--color-text-disabled)]',
  ].join(' '),
};

/* ⚠️ 누락된 토큰: button-height / button-padding-y / tiny-font-size.
   Figma source(7Ol4nYEI0AYBLB76yt12NZ)에 변수 미존재.
   docs/design-tokens.md L143 정책에 따라 픽셀값 인라인 + 플래그 처리. */
const sizeStyles: Record<ButtonSize, string> = {
  giant: 'h-[56px] text-lg leading-6 px-[var(--spacing-xl)] gap-[var(--spacing-xs)]',
  large: 'h-[48px] text-base leading-5 px-[var(--spacing-lg)] gap-[var(--spacing-xs)]',
  medium: 'h-[40px] text-sm leading-4 px-[var(--spacing-md)] gap-[var(--spacing-xs)]',
  small: 'h-[32px] text-xs leading-4 px-[var(--spacing-sm)] gap-[var(--spacing-xs)]',
  tiny: 'h-[24px] text-[10px] leading-3 px-[var(--spacing-xs)] gap-[var(--spacing-xxs)]',
};

const sizeIconOnlyStyles: Record<ButtonSize, string> = {
  giant: 'h-[56px] w-[56px] p-0',
  large: 'h-[48px] w-[48px] p-0',
  medium: 'h-[40px] w-[40px] p-0',
  small: 'h-[32px] w-[32px] p-0',
  tiny: 'h-[24px] w-[24px] p-0',
};

export function Button({
  variant = 'filled',
  size = 'medium',
  state,
  leftIcon,
  rightIcon,
  iconOnly = false,
  disabled,
  className,
  children,
  type = 'button',
  ref,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const sizeClass = iconOnly ? sizeIconOnlyStyles[size] : sizeStyles[size];

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      data-state={state}
      data-variant={variant}
      data-size={size}
      data-icon-only={iconOnly || undefined}
      className={[base, variantStyles[variant], sizeClass, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {leftIcon != null && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {leftIcon}
        </span>
      )}
      {!iconOnly && children != null && <span className="inline-flex">{children}</span>}
      {iconOnly && leftIcon == null && rightIcon == null && children != null && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {children}
        </span>
      )}
      {rightIcon != null && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
