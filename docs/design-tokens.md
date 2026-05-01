# 디자인 토큰 매핑 테이블

> Figma 변수명 ↔ CSS custom property 매핑.
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.
> 토큰 추가/변경 시 이 문서도 업데이트하세요.
>
> **Source of truth**: Figma file `7Ol4nYEI0AYBLB76yt12NZ` (node `2411:2543`)
> **마지막 동기화**: 2026-05-01

## 네이밍 규칙

- Figma `/` → CSS `-` 변환, 카테고리 중복은 제거.
  - 예: `Color/Primary/Primary-500` → `--primitive-primary-500`
  - 예: `Surface Color/surface-accent` → `--color-surface-accent`
- Primitive 토큰은 `--primitive-*` prefix (raw 값)
- Semantic 토큰은 `--color-*` prefix (primitive 참조)
- Figma는 `Grey` (UK 표기) 사용 — 코드도 동일

## Primitive Colors (80개)

각 ramp는 50/100/200/300/400/500/600/700/800/900 10단계.

| Figma 카테고리 | CSS 변수 prefix | 500단계 값 | 용도 |
|---|---|---|---|
| Color/Primary/* | `--primitive-primary-{n}` | `#4e61f6` | 브랜드 |
| Color/Grey/* | `--primitive-grey-{n}` | `#6d717f` | 중립 |
| Color/Green/* | `--primitive-green-{n}` | `#43b75d` | 성공 |
| Color/Red/* | `--primitive-red-{n}` | `#ee443f` | 에러 |
| Color/Yellow/* | `--primitive-yellow-{n}` | `#ffaa00` | 경고 |
| Color/Blue/* | `--primitive-blue-{n}` | `#0095ff` | 정보 |
| Color/White/{N}% | `--primitive-white-{N}` | `#ffffff` | 화이트 알파 |
| Color/Black/{N}% | `--primitive-black-{N}` | `#000000` | 블랙 알파 |

전체 값은 `src/tokens/colors.css` 참조.

## Semantic — Surface (4개)

| Figma 변수 | CSS Property | 참조 | 값 |
|---|---|---|---|
| Surface Color/surface-white | --color-surface-white | --primitive-white-100 | `#ffffff` |
| Surface Color/surface-grey | --color-surface-grey | --primitive-grey-50 | `#f9fafb` |
| Surface Color/surface-accent | --color-surface-accent | --primitive-primary-50 | `#edeffe` |
| Surface Color/surface-black | --color-surface-black | --primitive-grey-900 | `#131927` |

## Semantic — Text (13개)

| Figma 변수 | CSS Property | 참조 | 값 |
|---|---|---|---|
| Text Color/text-primary-black | --color-text-primary-black | --primitive-grey-900 | `#131927` |
| Text Color/text-secondary-dark-grey | --color-text-secondary-dark-grey | --primitive-grey-500 | `#6d717f` |
| Text Color/text-links | --color-text-links | --primitive-primary-500 | `#4e61f6` |
| Text Color/text-primary-white | --color-text-primary-white | --primitive-white-100 | `#ffffff` |
| Text Color/text-disabled | --color-text-disabled | --primitive-grey-400 | `#9ea2ae` |
| Text Color/text-accent | --color-text-accent | --primitive-primary-500 | `#4e61f6` |
| Text Color/text-grey | --color-text-grey | --primitive-grey-400 | `#9ea2ae` |
| Text Color/text-light-grey | --color-text-light-grey | --primitive-grey-300 | `#d2d5db` |
| Text Color/text-success | --color-text-success | --primitive-green-500 | `#43b75d` |
| Text Color/text-info | --color-text-info | --primitive-blue-500 | `#0095ff` |
| Text Color/text-warning | --color-text-warning | --primitive-yellow-500 | `#ffaa00` |
| Text Color/text-error | --color-text-error | --primitive-red-500 | `#ee443f` |
| Text Color/text-secondary-white | --color-text-secondary-white | --primitive-white-60 | `#ffffff99` |

## Semantic — Icon (9개)

| Figma 변수 | CSS Property | 참조 | 값 |
|---|---|---|---|
| Icon Color/icon-white | --color-icon-white | --primitive-white-100 | `#ffffff` |
| Icon Color/icon-black | --color-icon-black | --primitive-grey-900 | `#131927` |
| Icon Color/icon-accent | --color-icon-accent | --primitive-primary-500 | `#4e61f6` |
| Icon Color/icon-grey | --color-icon-grey | --primitive-grey-400 | `#9ea2ae` |
| Icon Color/icon-light-grey | --color-icon-light-grey | --primitive-grey-300 | `#d2d5db` |
| Icon Color/icon-success | --color-icon-success | --primitive-green-500 | `#43b75d` |
| Icon Color/icon-info | --color-icon-info | --primitive-blue-500 | `#0095ff` |
| Icon Color/icon-warning | --color-icon-warning | --primitive-yellow-500 | `#ffaa00` |
| Icon Color/icon-error | --color-icon-error | --primitive-red-500 | `#ee443f` |

## Spacing & Radius

> **출처**: Figma 캔버스 라벨 (Variables 미바인딩 — Figma 라이브러리 hygiene 이슈)

### Primitive Spacing
| 토큰 | 값 |
|---|---|
| --primitive-spacing-0 | 0px |
| --primitive-spacing-1 | 4px |
| --primitive-spacing-2 | 8px |
| --primitive-spacing-3 | 12px |
| --primitive-spacing-4 | 16px |
| --primitive-spacing-5 | 20px |
| --primitive-spacing-6 | 24px |

### Semantic Spacing
| 토큰 | 참조 | 값 |
|---|---|---|
| --spacing-none | --primitive-spacing-0 | 0px |
| --spacing-xxs | --primitive-spacing-1 | 4px |
| --spacing-xs | --primitive-spacing-2 | 8px |
| --spacing-sm | --primitive-spacing-3 | 12px |
| --spacing-md | --primitive-spacing-4 | 16px |
| --spacing-lg | --primitive-spacing-5 | 20px |
| --spacing-xl | --primitive-spacing-6 | 24px |

### Radius
| 토큰 | 값 |
|---|---|
| --radius-xxs | 4px |
| --radius-xs | 8px |
| --radius-sm | 12px |
| --radius-md | 16px |
| --radius-lg | 20px |
| --radius-xl | 24px |

## Tailwind Utility 매핑 (this directory only)

`src/styles/tailwind.css`의 `@theme inline`이 아래 utility를 토큰으로 연결합니다.

| Utility | 참조 토큰 |
|---|---|
| `bg-primary` / `text-primary` / `border-primary` | --primitive-primary-500 |
| `bg-background` | --color-surface-white |
| `bg-surface` | --color-surface-grey |
| `text-foreground` | --color-text-primary-black |
| `text-muted` | --color-text-secondary-dark-grey |
| `border-default` | --primitive-grey-200 *(Figma 직접 매핑 없음)* |
| `text-success` / `bg-success` | --primitive-green-500 |
| `text-error` / `bg-error` | --primitive-red-500 |
| `text-info` / `bg-info` | --primitive-blue-500 |
| `text-warning` / `bg-warning` | --primitive-yellow-500 |
| `p-{none/xxs/xs/sm/md/lg/xl}` 등 | --spacing-* |
| `rounded-{xxs/xs/sm/md/lg/xl}` | --radius-* |

폰트/그림자는 Tailwind 기본값 사용 (Figma에 변수 없음).

## Figma에 없어 코드에서 제거된 토큰

다음 토큰들은 Figma source에 대응이 없어 동기화 시 삭제됨:
- `--font-family-sans`, `--text-sm/base/lg`, `--font-weight-medium/semibold` (타이포 변수 미수록)
- `--shadow-sm/md` (그림자 변수 미수록)
- `--spacing-2xl: 32px`, `--radius-full: 9999px` (스케일에 없음)

필요 시 Figma에 변수로 추가한 뒤 재동기화.

## Claude용 규칙
1. Figma MCP가 hex 색상 반환 → 이 테이블에서 찾아서 `var(--color-*)` 또는 `var(--primitive-*)` 사용.
2. Figma가 스페이싱 숫자 반환 → `var(--spacing-*)` 매핑.
3. 테이블에 없는 값 → 새 변수 만들지 말고 `/* ⚠️ 누락된 토큰 */` 플래그 + token-checker 위임.
4. 브랜드 영역은 `--primitive-primary-500` 또는 `--color-text-accent`/`--color-icon-accent` 사용 (Tailwind blue 아님).
