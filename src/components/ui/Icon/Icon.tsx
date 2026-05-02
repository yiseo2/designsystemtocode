import type { SVGProps, Ref } from 'react';
import { iconMap, type IconName } from './icons';

export type IconSize = 16 | 24;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'ref'> {
  name: IconName;
  size?: IconSize;
  /** 접근성 레이블. 의미 있는 아이콘이라면 반드시 지정. 장식용이면 생략(aria-hidden 처리). */
  'aria-label'?: string;
  ref?: Ref<SVGSVGElement>;
}

export function Icon({
  name,
  size = 24,
  'aria-label': ariaLabel,
  className,
  ref,
  ...rest
}: IconProps) {
  const LucideComponent = iconMap[name];

  /* Figma 기준 stroke 1.5px (24px 아이콘 기준).
     16px일 때는 시각적 균형을 위해 동일 비율(1px)로 축소하지 않고 1.5 유지 — lucide 기본값과 일치. */
  return (
    <LucideComponent
      ref={ref}
      width={size}
      height={size}
      strokeWidth={1.5}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? 'img' : undefined}
      focusable={false}
      data-icon={name}
      data-size={size}
      className={className}
      {...rest}
    />
  );
}
