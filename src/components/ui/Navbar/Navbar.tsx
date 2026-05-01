import type { ReactNode } from 'react';
import { Button } from '../Button';

export type NavbarStatus = 'web' | 'mobile';

export interface NavbarMenuItem {
  label: string;
  onClick?: () => void;
}

export interface NavbarProps {
  status?: NavbarStatus;
  logo?: ReactNode;
  menuItems?: NavbarMenuItem[];
  ctaLabel?: ReactNode;
  onCtaClick?: () => void;
  onMenuClick?: () => void;
  onLogoClick?: () => void;
  className?: string;
}

const DEFAULT_MENU_ITEMS: NavbarMenuItem[] = [
  { label: 'Work' },
  { label: 'Approach' },
  { label: 'Services' },
  { label: 'About' },
];

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ⚠️ 누락된 토큰: navbar height(80/56), horizontal padding(80px), menu gap(48px).
   Figma source(7Ol4nYEI0AYBLB76yt12NZ)에 변수 미존재.
   Button.tsx와 동일한 정책으로 픽셀값 인라인. */
const containerBase =
  'flex items-center justify-between w-full bg-[var(--color-surface-white)]';
const containerStyles: Record<NavbarStatus, string> = {
  web: 'h-[80px] px-[80px]',
  mobile:
    'h-[56px] px-[var(--spacing-lg)] border-b border-solid border-[var(--primitive-grey-200)]',
};

const logoStyles: Record<NavbarStatus, string> = {
  web: 'text-[24px] leading-[28px]',
  mobile: 'text-[16px] leading-[24px]',
};

const resetButton =
  'bg-transparent border-none p-0 m-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--primitive-primary-500)] focus-visible:ring-offset-2 rounded-[var(--radius-xxs)]';

export function Navbar({
  status = 'web',
  logo = 'Studio Mira',
  menuItems = DEFAULT_MENU_ITEMS,
  ctaLabel = '문의하기',
  onCtaClick,
  onMenuClick,
  onLogoClick,
  className,
}: NavbarProps) {
  const isMobile = status === 'mobile';

  return (
    <nav
      data-status={status}
      className={[containerBase, containerStyles[status], className]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        type="button"
        onClick={onLogoClick}
        className={`${resetButton} inline-flex items-center`}
      >
        <span
          className={`font-semibold whitespace-nowrap text-[var(--color-text-primary-black)] ${logoStyles[status]}`}
        >
          {logo}
        </span>
      </button>

      {!isMobile && (
        <>
          <ul className="flex items-center gap-[48px] list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={item.onClick}
                  className={`${resetButton} inline-flex items-center justify-center font-semibold text-[16px] leading-[20px] text-[var(--color-text-primary-black)] whitespace-nowrap`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <Button variant="filled" size="medium" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        </>
      )}

      {isMobile && (
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="메뉴 열기"
          className={`${resetButton} inline-flex items-center justify-center w-[24px] h-[24px] text-[var(--color-icon-black)]`}
        >
          <HamburgerIcon />
        </button>
      )}
    </nav>
  );
}
