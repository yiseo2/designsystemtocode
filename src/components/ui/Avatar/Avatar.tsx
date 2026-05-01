import type { HTMLAttributes, ReactNode, Ref } from 'react';

export type AvatarSize =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'giant'
  | 'xl-giant'
  | 'xxl-giant'
  | 'xxxl-giant';
export type AvatarType = 'image' | 'letter' | 'icon';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  type?: AvatarType;
  status?: boolean;
  src?: string;
  alt?: string;
  letter?: string;
  icon?: ReactNode;
  ref?: Ref<HTMLSpanElement>;
}

/* ⚠️ 누락된 토큰: avatar-size-* / avatar-dot-size-* / dot-ring-width / radius-full.
   Figma source(7Ol4nYEI0AYBLB76yt12NZ)에 변수 미존재.
   docs/design-tokens.md L143 정책에 따라 픽셀값 인라인 + 플래그 처리. */

const sizeStyles: Record<AvatarSize, string> = {
  tiny: 'w-[24px] h-[24px]',
  small: 'w-[32px] h-[32px]',
  medium: 'w-[40px] h-[40px]',
  large: 'w-[48px] h-[48px]',
  giant: 'w-[56px] h-[56px]',
  'xl-giant': 'w-[64px] h-[64px]',
  'xxl-giant': 'w-[80px] h-[80px]',
  'xxxl-giant': 'w-[96px] h-[96px]',
};

const letterStyles: Record<AvatarSize, string> = {
  tiny: 'text-[12px] leading-[16px] font-medium',
  small: 'text-[16px] leading-[24px] font-semibold',
  medium: 'text-[18px] leading-[28px] font-semibold',
  large: 'text-[24px] leading-[28px] font-semibold',
  giant: 'text-[28px] leading-[34px] font-semibold',
  'xl-giant': 'text-[32px] leading-[38px] font-semibold',
  'xxl-giant': 'text-[48px] leading-[58px] font-semibold',
  'xxxl-giant': 'text-[48px] leading-[58px] font-semibold',
};

const iconStyles: Record<AvatarSize, string> = {
  tiny: 'w-[12px] h-[12px]',
  small: 'w-[16px] h-[16px]',
  medium: 'w-[20px] h-[20px]',
  large: 'w-[24px] h-[24px]',
  giant: 'w-[28px] h-[28px]',
  'xl-giant': 'w-[32px] h-[32px]',
  'xxl-giant': 'w-[40px] h-[40px]',
  'xxxl-giant': 'w-[48px] h-[48px]',
};

const dotSizeStyles: Record<AvatarSize, string> = {
  tiny: 'w-[8px] h-[8px]',
  small: 'w-[10px] h-[10px]',
  medium: 'w-[12px] h-[12px]',
  large: 'w-[12px] h-[12px]',
  giant: 'w-[16px] h-[16px]',
  'xl-giant': 'w-[16px] h-[16px]',
  'xxl-giant': 'w-[20px] h-[20px]',
  'xxxl-giant': 'w-[24px] h-[24px]',
};

const dotRingStyles: Record<AvatarSize, string> = {
  tiny: 'border-[1.5px]',
  small: 'border-[1.5px]',
  medium: 'border-[2px]',
  large: 'border-[2px]',
  giant: 'border-[2px]',
  'xl-giant': 'border-[2px]',
  'xxl-giant': 'border-[2.5px]',
  'xxxl-giant': 'border-[3px]',
};

export function Avatar({
  size = 'medium',
  type = 'image',
  status = false,
  src,
  alt = '',
  letter,
  icon,
  className,
  ref,
  ...rest
}: AvatarProps) {
  return (
    <span
      ref={ref}
      data-size={size}
      data-type={type}
      data-status={status || undefined}
      className={[
        'relative inline-flex shrink-0 items-center justify-center overflow-visible rounded-full',
        type !== 'image' && 'bg-[var(--primitive-primary-500)]',
        sizeStyles[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {type === 'image' && src && (
        <img src={src} alt={alt} className="h-full w-full rounded-full object-cover" />
      )}
      {type === 'letter' && (
        <span
          aria-hidden="true"
          className={[
            'select-none text-[var(--color-text-primary-white)]',
            letterStyles[size],
          ].join(' ')}
        >
          {letter ?? ''}
        </span>
      )}
      {type === 'icon' && (
        <span
          aria-hidden="true"
          className={[
            'inline-flex items-center justify-center text-[var(--color-icon-white)]',
            iconStyles[size],
          ].join(' ')}
        >
          {icon}
        </span>
      )}
      {status && (
        <span
          data-name="status-dot"
          className={[
            'absolute right-0 bottom-0 rounded-full bg-[var(--primitive-green-500)] border-[var(--color-surface-white)]',
            dotSizeStyles[size],
            dotRingStyles[size],
          ].join(' ')}
        />
      )}
    </span>
  );
}
