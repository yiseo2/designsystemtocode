import type { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button';

export type CardOrientation = 'vertical' | 'horizontal';

export interface CardButton {
  label: ReactNode;
  onClick?: () => void;
}

export interface CardProps {
  orientation?: CardOrientation;
  imageSrc?: string;
  imageAlt?: string;
  title?: ReactNode;
  description?: ReactNode;
  primaryButton?: CardButton | null;
  secondaryButton?: CardButton | null;
  className?: string;
  style?: CSSProperties;
}

/* ⚠️ 누락된 토큰: card-width / card-image-width-horizontal.
   Figma source(7Ol4nYEI0AYBLB76yt12NZ)에 너비 변수 미존재.
   docs/design-tokens.md L143 정책에 따라 픽셀값 인라인 + 플래그 처리. */
const HORIZONTAL_IMAGE_WIDTH = '120px';

const containerBase = [
  'bg-[var(--color-surface-white)]',
  'rounded-[var(--radius-sm)]',
  'shadow-[var(--shadow-card)]',
  'overflow-hidden',
  'flex',
].join(' ');

const orientationStyles: Record<CardOrientation, string> = {
  vertical: 'flex-col items-center w-full',
  horizontal: 'flex-row items-stretch w-full',
};

export function Card({
  orientation = 'vertical',
  imageSrc,
  imageAlt = '',
  title = 'Title',
  description = 'Keep your messages short, but make sure they cover everything you need to say.',
  primaryButton = { label: 'Button' },
  secondaryButton = { label: 'Button' },
  className,
  style,
}: CardProps) {
  const isVertical = orientation === 'vertical';
  const showTextBlock = title != null || description != null;
  const showButtons = isVertical && (primaryButton || secondaryButton);

  return (
    <div
      data-orientation={orientation}
      className={[containerBase, orientationStyles[orientation], className]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <div
        aria-hidden={!imageSrc}
        className={
          isVertical
            ? 'relative w-full flex-1 min-h-0 overflow-hidden'
            : 'relative shrink-0 self-stretch overflow-hidden'
        }
        style={isVertical ? undefined : { width: HORIZONTAL_IMAGE_WIDTH }}
      >
        {imageSrc && (
          <img
            alt={imageAlt}
            src={imageSrc}
            className="absolute inset-0 size-full object-cover pointer-events-none"
          />
        )}
      </div>

      <div
        className={[
          'flex flex-col min-w-0',
          isVertical
            ? 'w-full items-center gap-[var(--spacing-xl)] p-[var(--spacing-xl)]'
            : 'flex-1 items-start p-[var(--spacing-md)]',
        ].join(' ')}
      >
        {showTextBlock && (
          <div className="flex flex-col gap-[var(--spacing-xxs)] w-full">
            {title && (
              <p
                className="m-0 text-[16px] leading-[24px] font-semibold w-full"
                style={{ color: 'var(--color-text-primary-black)' }}
              >
                {title}
              </p>
            )}
            {description && (
              <p
                className="m-0 text-[14px] leading-[20px] font-normal w-full"
                style={{ color: 'var(--color-text-secondary-dark-grey)' }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {showButtons && (
          <div className="flex flex-col gap-[var(--spacing-md)] w-full">
            {primaryButton && (
              <Button
                variant="filled"
                size="large"
                className="w-full"
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant="outline"
                size="large"
                className="w-full"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
