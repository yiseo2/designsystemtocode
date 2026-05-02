# 프로젝트: [designsystem-to-guide]

## 기술 스택
- 프론트엔드: React 19 + TypeScript 5.x
- 스타일링: Tailwind v4 + CSS custom properties (디자인 토큰)
- 빌드: Vite 6
- UI 문서화: Storybook 8
- 테스트: Vitest + @storybook/test

## 디렉토리 구조
- `src/components/ui/` — 디자인 시스템 UI 컴포넌트
- `src/tokens/` — CSS custom properties (Figma 변수와 1:1 매핑)
- `src/stories/tokens/` — 토큰 시각화 Storybook stories
- `src/lib/` — 유틸리티

## 디자인 시스템 규칙

### 토큰 사용 (절대 규칙)
- 하드코딩된 색상값(hex, rgb, hsl) 사용 금지. 반드시 `var(--color-*)` 사용.
- 하드코딩된 스페이싱 사용 금지. 반드시 `var(--spacing-*)` 사용.
- 타이포그래피는 `var(--font-*)`, `var(--text-*)` 토큰만 사용.

### Figma에서 UI 구현 시
- 먼저 `docs/design-tokens.md`를 읽어 토큰 매핑 테이블을 확인할 것.
- `get_design_context` 사용 (`get_metadata` 아님).
- 한 번에 하나의 컴포넌트만 구현.
- `src/components/ui/`에 기존 컴포넌트가 있으면 재사용 — 중복 생성 금지.

### Storybook 규칙
- 모든 컴포넌트는 반드시 `.stories.tsx` 파일을 함께 생성할 것.
- Story 포맷: CSF3 + TypeScript + `satisfies Meta<typeof Component>`
- 모든 story에 `tags: ['autodocs']` 포함.
- `parameters.design.url`에 해당 Figma 프레임 URL 연결.
- 모든 variant에 대한 개별 story 생성.
- 최소 1개의 play function 포함.

### Code Connect
- 매핑 정보는 `figma-code-connect.json`에 있음.
- Figma 프레임 구현 시, 먼저 Code Connect에서 기존 매핑 확인.

## 컴포넌트 규칙
- 컴포넌트 1개 = 4개 파일: `.tsx` / `.stories.tsx` / `.test.tsx` / `index.ts`
- Named export만: `export function Button() {}`
- Props 인터페이스: `interface ButtonProps {}`

## 에이전트 위임 규칙
- Figma URL이 포함된 구현 요청 → `@agent-figma-implementer`에 위임 (필수)
- 토큰 동기화/비교 요청 → `@agent-token-checker`에 위임
- 디자인 감사/토큰 검증 요청 → `@agent-design-reviewer`에 위임
- Figma MCP 호출은 반드시 서브에이전트에서 실행할 것 (컨텍스트 보호)

## 빌드 및 테스트 명령어
- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run storybook` — Storybook (http://localhost:6006)
- `npm test` — Vitest
- `npm run lint` — ESLint + Prettier
- `npm run typecheck` — tsc --noEmit


## 작업 원칙

- **확장성/유연성 검토**: 현재 요구사항을 해결하되, 향후 확장이 막히지 않는 구조를 확인한다.
- **기존 코드 재사용**: 새로 만들기 전에 `components/`, `theme.js`, `tokens/` 등 기존 리소스를 먼저 탐색한다.
- **커뮤니케이션**: 항상 **개요(왜, 무엇을) → 상세 구현 계획** 순서로 설명한다.

---

## 작업 프로세스 (필수)

> ⚠️ 추측을 사실처럼 말하지 말 것. 모든 가설은 반드시 검증 후 결론.
>
> ⛔ 코드 작성 전 반드시 4단계까지 완료하고 사용자 승인을 받을 것.

### 1단계: 문제/요청 이해

- 문제 현상을 명확히 기술한다.
- 불분명한 부분이 있으면 사용자에게 질문한다.
- "~일 것 같습니다"가 아니라 **실제 코드를 확인**한다.

### 2단계: 원인 분석 (문제 해결의 경우)

- 가설 수립 → 가설 검증 → 원인 확정
- ❌ "이게 원인입니다" (검증 없이)
- ✅ "가설: ~일 수 있습니다. 검증해보겠습니다." → "확인 결과, ~가 원인입니다"

### 3단계: 해결책 탐색

- 해결 방안 2~3개를 제시하고, 각 방안의 영향 범위를 분석한다.
- 사전 검증이 가능하면 검증한다.

### 4단계: 작업 계획 보고 (코드 작성 전 필수!)

> ⛔ 사용자가 "그냥 빨리 해줘"라고 해도, 이 보고를 먼저 하세요.

```
📋 작업 계획 보고

🔍 문제 상황 (What's wrong?)
어떤 상황에서 어떤 증상이 발생하는지, 왜 이 작업이 필요한지.

🎯 목표 (What we want to achieve)
이 작업이 완료되면 어떤 상태가 되어야 하는지.

🔬 원인 분석 (Why it happens) - 문제 해결의 경우
검증된 원인만 기술. 추측은 "가설"이라고 명시.

📁 변경 예정 파일
| 파일 경로 | 변경 내용 | 비고 |
|-----------|----------|------|

⚡ Before → After
[Before] 현재 상태
[After] 작업 후 기대 상태

🎨 디자인 토큰 사용 계획
- 사용할 CSS 변수: --color-*, --spacing-* 등
- 재사용할 컴포넌트: Button(primary), Tag 등
- 새로 필요한 토큰: 있으면 명시 (없으면 "없음")

이대로 진행해도 될까요?
```

### 5단계: 작업 실행

- 승인받은 계획대로 진행한다.
- 예상치 못한 상황이 발생하면 **중단 후 보고**한다.

### 6단계: 결과 검증

| # | 확인 항목 | 필수 | 구체적 검증 방법 |
|---|----------|:----:|-----------------|
| 1 | 빌드 에러 없음 | ✅ | `npm run build` (또는 프로젝트 빌드 명령) 통과 |
| 2 | 하드코딩된 색상값 미사용 | ✅ | 새로 작성한 코드에 `#` + 6자리 패턴, `rgb()`, `hsl()` 등 없는지 확인 |
| 3 | 프레임워크 기본 유틸리티 미사용 | ✅ | `bg-red-`, `text-gray-`, `text-sm` 등 디자인 토큰을 거치지 않은 기본 클래스 없는지 확인 |
| 4 | 토큰 외 spacing 미사용 | ✅ | `8px`, `15px`, `24px` 등 토큰에 정의되지 않은 임의 값 없는지 확인 |
| 5 | 기존 컴포넌트 재사용 | ✅ | Button/Tag/Card 등 기존 컴포넌트로 대체 가능한 부분 없는지 확인 |
| 6 | 토큰 추가 시 동기화 | ✅ | 토큰 정의 파일들(CSS, JS config, 프레임워크 config 등) 모두 수정했는지 확인 |
| 7 | 기존 기능 정상 동작 | ✅ | 기존 컴포넌트/페이지가 깨지지 않았는지 확인 |

### 7단계: 작업 완료

- 6단계 검증을 전부 통과한 후에만 "완료"를 선언한다.
- 변경 사항 요약을 보고한다.

---

## 금지 사항

| 금지 | 이유 | 올바른 대안 |
|------|------|------------|
| 허락 없이 새 파일/컴포넌트 생성 | 프로젝트 구조 임의 변경 방지 | 사용자에게 먼저 제안 후 승인 |
| 기존 아키텍처 임의 변경 | 설계 의도 훼손 방지 | 변경 필요 시 이유와 함께 제안 |
| 요청 범위 밖 리팩토링 | 스코프 크립 방지 | "이 부분도 개선하면 좋겠는데, 할까요?" |
| 문제 발견 시 바로 수정 | 사용자가 다른 해결책을 원할 수 있음 | 문제 보고 → 해결책 2~3개 제시 → 승인 후 수정 |
| 디자인 토큰 없이 스타일링 | 디자인 시스템 일관성 파괴 | 항상 `var(--*)` 또는 프레임워크 커스텀 토큰 사용 |

---

## 디자인 토큰 규칙

### 스타일 값은 반드시 토큰을 통해 사용

```css
/* ❌ 금지: 하드코딩된 값 */
color: #3B82F6;
padding: 12px;
font-size: 14px;

/* ✅ 올바름: 디자인 토큰 사용 */
color: var(--color-primary);
padding: var(--spacing-3);
font-size: var(--font-size-sm);
```

### 토큰 추가 시 동기화 필수

새 토큰을 추가해야 할 경우, 프로젝트의 토큰 정의 파일을 **모두** 동기화한다.

일반적인 동기화 대상 (프로젝트에 맞게 수정):

| 파일 | 역할 |
|------|------|
| `theme.css` (또는 `tokens.css`, `variables.css`) | CSS 변수 정의 |
| `theme.js` (또는 `tokens.js`, `theme.config.js`) | JS에서 사용하는 토큰 객체 |
| `tailwind.config.js` (또는 프레임워크 config) | 유틸리티 클래스 확장 |

> ⚠️ 프로젝트 최초 세팅 시, 위 파일 경로를 실제 프로젝트 구조에 맞게 업데이트하세요.

---

## 이전 세션 이어받기

1. "완료됐다"는 요약을 그대로 믿지 않는다.
2. 실제 코드 상태를 직접 확인한다 (파일 읽기, 검색으로 검증).
3. 동작 테스트로 검증 후 진행한다.

---
