import type { ReactNode } from 'react';
import { Avatar } from '../../components/ui/Avatar';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Navbar } from '../../components/ui/Navbar';

/* ⚠️ Figma 자산 URL은 발급 후 7일 이내 만료. 만료 시 placeholder 색상 박스로 대체 필요. */
const ASSETS = {
  case1: 'https://www.figma.com/api/mcp/asset/fde7a642-9e26-480b-a4eb-c1efc77ec975',
  case2: 'https://www.figma.com/api/mcp/asset/412a654e-c35a-4e35-b3a7-829ff318e998',
  case3: 'https://www.figma.com/api/mcp/asset/0c53ccdf-5c56-4a9b-b7ae-d37118665c65',
  team1: 'https://www.figma.com/api/mcp/asset/b5f83242-c26d-4441-baa3-1db0c12cb838',
  team2: 'https://www.figma.com/api/mcp/asset/e577e3df-73d4-4c9e-a557-82524ee3669e',
  team3: 'https://www.figma.com/api/mcp/asset/1e39bc5e-636e-4840-b66e-bdda62b261e1',
  testimonial1: 'https://www.figma.com/api/mcp/asset/c8ecd342-91af-4166-9214-d13d7fc177b8',
  testimonial2: 'https://www.figma.com/api/mcp/asset/79ef96f3-e4ca-4a42-8d2f-804d7a6891cd',
  testimonial3: 'https://www.figma.com/api/mcp/asset/60b5c23a-d673-4979-ba5d-267c219b42fb',
};

/* 인라인 아이콘 — Navbar의 HamburgerIcon과 동일한 패턴. */
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 2.5l2.94 6.36 6.96.94-5.05 4.86 1.24 6.94L12 18.27 5.91 21.6l1.24-6.94L2.1 9.8l6.96-.94L12 2.5z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" fill="var(--primitive-primary-50)" />
    <path
      d="M8 12.5l2.5 2.5L16 9"
      stroke="var(--primitive-primary-500)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* 공용 섹션 헤더. */
function SectionHeader({
  title,
  subtitle,
  invert = false,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  invert?: boolean;
}) {
  const titleColor = invert
    ? 'text-[var(--color-text-primary-white)]'
    : 'text-[var(--color-text-primary-black)]';
  const subtitleColor = invert
    ? 'text-[var(--color-text-secondary-white)]'
    : 'text-[var(--color-text-secondary-dark-grey)]';
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-md)] text-center">
      <h2
        className={`font-semibold whitespace-pre-line text-[28px] leading-[36px] md:text-[48px] md:leading-[58px] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[640px] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* Badge & Chip 컴포넌트 부재로 인한 인라인 처리. 추후 컴포넌트화 권장. */
function StatusChip({ label, available = true }: { label: string; available?: boolean }) {
  const bg = available
    ? 'bg-[var(--primitive-primary-50)]'
    : 'bg-[var(--primitive-grey-100)]';
  const text = available
    ? 'text-[var(--color-text-accent)]'
    : 'text-[var(--color-text-secondary-dark-grey)]';
  return (
    <span
      className={`inline-flex items-center gap-[var(--spacing-xxs)] rounded-full px-[var(--spacing-xs)] py-[2px] text-[12px] leading-[16px] font-medium ${bg} ${text}`}
    >
      <span
        className={`inline-block w-[6px] h-[6px] rounded-full ${available ? 'bg-[var(--primitive-primary-500)]' : 'bg-[var(--primitive-grey-400)]'}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

/* ============ Sections ============ */

function HeroSection() {
  return (
    <section className="bg-[var(--color-surface-white)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[40px]">
        <div className="flex max-w-[800px] flex-col items-center gap-[var(--spacing-xl)] text-center">
          <h1 className="whitespace-pre-line text-[28px] font-semibold leading-[40px] text-[var(--color-text-primary-black)] md:text-[48px] md:leading-[58px]">
            {`클라이언트의 성공을\n대신 만들어 드립니다`}
          </h1>
          <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary-dark-grey)] md:text-[16px] md:leading-[24px]">
            전략적인 접근과 감각적인 실행으로 당신의 비즈니스를 한 단계 더
            끌어올립니다. Studio Mira는 귀하의 전담 에이전시가 되어 성장을 가속화합니다.
          </p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-[var(--spacing-sm)] md:w-auto md:flex-row md:items-center">
          <Button
            variant="filled"
            size="giant"
            rightIcon={<ArrowRightIcon />}
            className="w-full md:w-auto"
          >
            무료 상담 신청
          </Button>
          <Button variant="outline" size="giant" className="w-full md:w-auto">
            서비스 둘러보기
          </Button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '150+', label: 'Partners' },
    { value: '450+', label: 'Projects' },
    { value: '98%', label: 'Satisfaction' },
  ];
  return (
    <section className="bg-[var(--color-surface-grey)] px-[var(--spacing-lg)] py-[40px] md:px-[80px] md:py-[80px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-3 gap-[var(--spacing-md)]">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-[var(--spacing-xs)]"
          >
            <p className="text-[24px] font-semibold leading-[28px] text-[var(--color-text-accent)] md:text-[48px] md:leading-[58px]">
              {s.value}
            </p>
            <p className="text-[14px] leading-[16px] text-[var(--color-text-secondary-dark-grey)] md:text-[16px] md:leading-[24px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: '마케팅 대행',
      description:
        '데이터 기반 퍼포먼스 마케팅부터 브랜드 전략까지 통합 마케팅 솔루션을 제공합니다.',
    },
    {
      title: '콘텐츠 제작',
      description:
        '브랜드의 철학을 담은 고퀄리티 디자인, 영상, 카피라이팅으로 소통을 극대화합니다.',
    },
    {
      title: '사업 운영 대행',
      description:
        '운영 효율화를 위한 프로세스 구축 및 비즈니스 인프라 구축을 지원합니다.',
    },
  ];
  return (
    <section className="bg-[var(--color-surface-white)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[40px] md:gap-[64px]">
        <SectionHeader
          title="비즈니스 성장을 위한 올인원 대행"
          subtitle="귀사의 내부 팀처럼 긴밀하게 소통하며, 최상의 성과를 위한 최적화된 솔루션을 제공합니다."
        />
        <div className="grid w-full grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-3 md:gap-[32px]">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-[var(--spacing-xl)] rounded-[var(--radius-md)] bg-[var(--color-surface-grey)] p-[var(--spacing-xl)] md:p-[32px]"
            >
              <span
                className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-[var(--radius-sm)] bg-[var(--primitive-primary-50)] text-[var(--color-icon-accent)]"
                aria-hidden="true"
              >
                <StarIcon />
              </span>
              <div className="flex flex-col gap-[var(--spacing-sm)]">
                <h3 className="text-[18px] font-semibold leading-[28px] text-[var(--color-text-primary-black)] md:text-[20px]">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary-dark-grey)] md:text-[16px] md:leading-[24px]">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const reasons = [
    '전문 분야별 시니어급 인력 배치',
    '투명하고 체계적인 리포팅 시스템',
    '클라이언트 맞춤형 가변 운영 체제',
    '비즈니스 목표 달성 중심의 실행력',
  ];
  return (
    <section className="bg-[var(--color-surface-grey)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[120px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[80px]">
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <div className="flex flex-col gap-[var(--spacing-md)]">
            <h2 className="text-[28px] font-semibold leading-[36px] text-[var(--color-text-primary-black)] md:text-[48px] md:leading-[58px]">
              왜 Studio Mira인가요?
            </h2>
            <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary-dark-grey)] md:text-[16px] md:leading-[24px]">
              우리는 단순한 대행사를 넘어, 함께 고민하고 함께 성장하는 진정한
              파트너가 되는 것을 목표로 합니다.
            </p>
          </div>
          <div>
            <Button variant="filled" size="medium" rightIcon={<ArrowRightIcon />}>
              더 알아보기
            </Button>
          </div>
        </div>
        <ul className="flex flex-col gap-[var(--spacing-xl)]">
          {reasons.map((r) => (
            <li
              key={r}
              className="flex items-center gap-[var(--spacing-md)] text-[var(--color-text-primary-black)]"
            >
              <span aria-hidden="true" className="shrink-0">
                <CheckIcon />
              </span>
              <span className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    { name: '김미라', role: 'Head of Strategy', avatar: ASSETS.team1, status: 'Available', available: true },
    { name: '이준혁', role: 'Creative Director', avatar: ASSETS.team2, status: 'Available', available: true },
    { name: '박지우', role: 'Operations Lead', avatar: ASSETS.team3, status: 'On Leave', available: false },
  ];
  return (
    <section className="bg-[var(--color-surface-white)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[40px] md:gap-[64px]">
        <SectionHeader
          title="최고의 전문가들이 모였습니다"
          subtitle="각 분야에서 검증된 역량을 가진 전문가들이 귀사의 프로젝트에 전념합니다."
        />
        <div className="grid w-full grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-3 md:gap-[32px]">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center gap-[var(--spacing-md)] rounded-[var(--radius-md)] bg-[var(--color-surface-grey)] p-[var(--spacing-xl)] md:p-[32px]"
            >
              <Avatar size="xxxl-giant" type="image" src={m.avatar} alt={m.name} />
              <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
                <p className="text-[16px] font-semibold leading-[24px] text-[var(--color-text-primary-black)] md:text-[18px] md:leading-[28px]">
                  {m.name}
                </p>
                <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary-dark-grey)] md:text-[14px]">
                  {m.role}
                </p>
              </div>
              <StatusChip label={m.status} available={m.available} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  const cases = [
    {
      image: ASSETS.case1,
      title: '글로벌 브랜드 캠페인',
      description: '6개월간 진행된 통합 마케팅으로 매출 320% 성장 달성.',
    },
    {
      image: ASSETS.case2,
      title: '스타트업 브랜드 리뉴얼',
      description: '브랜드 아이덴티티 재정립과 함께 사용자 인지도 2.5배 상승.',
    },
    {
      image: ASSETS.case3,
      title: '운영 인프라 컨설팅',
      description: '내부 프로세스 자동화로 운영 효율을 40% 개선.',
    },
  ];
  return (
    <section className="bg-[var(--color-surface-grey)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[40px] md:gap-[64px]">
        <SectionHeader
          title="최근 성공 사례"
          subtitle="우리가 만들어낸 결과물들이 비즈니스의 가능성을 증명합니다."
        />
        <div className="grid w-full grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-3 md:gap-[32px]">
          {cases.map((c) => (
            <Card
              key={c.title}
              orientation="vertical"
              imageSrc={c.image}
              imageAlt={c.title}
              title={c.title}
              description={c.description}
              primaryButton={{ label: '자세히 보기' }}
              secondaryButton={null}
              className="h-[452px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const items = [
    {
      quote:
        '"Studio Mira와 함께한 후 매출 지표가 완전히 달라졌습니다. 최고의 파트너입니다."',
      name: '한소희',
      role: 'CEO, GlowUp',
      avatar: ASSETS.testimonial1,
    },
    {
      quote:
        '"복잡했던 내부 프로세스가 깔끔하게 정리되었습니다. 덕분에 성장에만 집중할 수 있어요."',
      name: '마크 정',
      role: 'Founder, TechNest',
      avatar: ASSETS.testimonial2,
    },
    {
      quote:
        '"단순 실행을 넘어 전략적인 조언을 아끼지 않는 모습에 감동했습니다."',
      name: '유진 박',
      role: 'CMO, Visionary',
      avatar: ASSETS.testimonial3,
    },
  ];
  return (
    <section className="bg-[var(--color-surface-white)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[40px] md:gap-[64px]">
        <SectionHeader
          title="고객들의 목소리"
          subtitle="신뢰로 맺어진 수많은 파트너들이 우리의 진심을 대변합니다."
        />
        <div className="grid w-full grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-3 md:gap-[32px]">
          {items.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-[var(--spacing-xl)] rounded-[var(--radius-md)] bg-[var(--color-surface-grey)] p-[var(--spacing-xl)] md:p-[32px]"
            >
              <div
                className="flex gap-[var(--spacing-xxs)] text-[var(--color-icon-accent)]"
                aria-label="5점 만점에 5점"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-[14px] leading-[20px] text-[var(--color-text-primary-black)] md:text-[16px] md:leading-[24px]">
                {t.quote}
              </p>
              <div className="flex items-center gap-[var(--spacing-sm)]">
                <Avatar size="small" type="image" src={t.avatar} alt={t.name} />
                <div className="flex flex-col">
                  <p className="text-[16px] font-semibold leading-[24px] text-[var(--color-text-primary-black)]">
                    {t.name}
                  </p>
                  <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary-dark-grey)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="bg-[var(--primitive-primary-500)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[40px]">
        <SectionHeader
          invert
          title={`지금 당신의 성공\n파트너를 만나보세요`}
          subtitle="비즈니스 분석부터 실행까지, 24시간 이내에 첫 상담을 도와드립니다."
        />
        <div className="flex w-full flex-col items-stretch gap-[var(--spacing-md)] md:w-auto md:flex-row md:items-center">
          {/* 흰색 배경 + primary-500 텍스트 — 기본 Button 변형에 없어 className으로 보강. */}
          <Button
            variant="clear"
            size="giant"
            className="w-full bg-[var(--color-surface-white)] text-[var(--color-text-accent)] hover:bg-[var(--primitive-primary-50)] md:w-auto"
          >
            무료 상담 시작
          </Button>
          {/* 흰색 outline + 흰색 텍스트 — 동일한 사유로 보강. */}
          <Button
            variant="outline"
            size="giant"
            className="w-full border-[var(--color-surface-white)] text-[var(--color-text-primary-white)] hover:bg-[var(--primitive-white-10)] md:w-auto"
          >
            서비스 소개서 받기
          </Button>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const columns: Array<{ heading: string; items: string[] }> = [
    { heading: 'Service', items: ['Marketing', 'Content', 'Ops', 'Branding'] },
    { heading: 'Company', items: ['About', 'Career', 'News', 'Contact'] },
    { heading: 'Legal', items: ['Privacy', 'Terms', 'Cookies'] },
  ];
  return (
    <footer className="bg-[var(--color-surface-black)] px-[var(--spacing-lg)] py-[64px] md:px-[80px] md:py-[80px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[64px]">
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-[var(--spacing-xl)]">
            <div className="flex items-center gap-[var(--spacing-xs)]">
              <span
                aria-hidden="true"
                className="block h-[32px] w-[32px] rounded-[var(--radius-xs)] bg-[var(--primitive-primary-500)]"
              />
              <p className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-primary-white)] md:text-[24px]">
                Studio Mira
              </p>
            </div>
            <p className="text-[14px] leading-[20px] text-[var(--color-text-grey)]">
              성장하는 기업의 가장 믿음직한 파트너. 우리는 클라이언트의 비전을
              현실로 만듭니다.
            </p>
            <div
              className="flex gap-[var(--spacing-md)] text-[var(--color-icon-grey)]"
              aria-hidden="true"
            >
              <StarIcon filled={false} />
              <StarIcon filled={false} />
              <StarIcon filled={false} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[var(--spacing-xl)] md:grid-cols-3 md:justify-items-end">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-[var(--spacing-md)]">
                <p className="text-[16px] font-semibold leading-[24px] text-[var(--color-text-primary-white)]">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-[var(--spacing-sm)]">
                  {col.items.map((it) => (
                    <li key={it}>
                      <a
                        href="#"
                        className="text-[14px] leading-[20px] text-[var(--color-text-grey)] hover:text-[var(--color-text-primary-white)]"
                      >
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-[var(--primitive-grey-700)] pt-[var(--spacing-xl)]">
          <p className="text-[14px] leading-[16px] text-[var(--color-text-grey)]">
            © 2024 Studio Mira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============ Page ============ */

export interface StudioMiraLandingProps {
  className?: string;
}

export function StudioMiraLanding({ className }: StudioMiraLandingProps) {
  return (
    <div
      className={[
        'min-h-screen bg-[var(--color-surface-white)] font-sans',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* 반응형 Navbar — 768px 미만은 mobile, 이상은 web. */}
      <div className="hidden md:block">
        <Navbar status="web" />
      </div>
      <div className="md:hidden">
        <Navbar status="mobile" />
      </div>

      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <TeamSection />
        <CasesSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      <FooterSection />
    </div>
  );
}
