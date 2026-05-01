import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

interface ColorSwatchProps {
  name: string;
  token: string;
}

function ColorSwatch({ name, token }: ColorSwatchProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--color-surface-white)',
        border: '1px solid var(--color-surface-grey)',
      }}
    >
      <div
        aria-hidden
        style={{
          width: 'var(--spacing-xl)',
          height: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: `var(${token})`,
          border: '1px solid var(--color-surface-grey)',
          flexShrink: 0,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--color-text-primary-black)',
          }}
        >
          {name}
        </span>
        <code
          style={{
            fontSize: '12px',
            color: 'var(--color-text-secondary-dark-grey)',
          }}
        >
          {token}
        </code>
      </div>
    </div>
  );
}

interface SemanticGroup {
  title: string;
  tokens: ReadonlyArray<{ name: string; token: string }>;
}

const SURFACE_TOKENS = [
  { name: 'White', token: '--color-surface-white' },
  { name: 'Black', token: '--color-surface-black' },
  { name: 'Grey', token: '--color-surface-grey' },
  { name: 'Accent', token: '--color-surface-accent' },
] as const;

const TEXT_TOKENS = [
  { name: 'Primary / Black', token: '--color-text-primary-black' },
  { name: 'Primary / White', token: '--color-text-primary-white' },
  { name: 'Secondary / Dark Grey', token: '--color-text-secondary-dark-grey' },
  { name: 'Secondary / White', token: '--color-text-secondary-white' },
  { name: 'Links', token: '--color-text-links' },
  { name: 'Disabled', token: '--color-text-disabled' },
  { name: 'Accent', token: '--color-text-accent' },
  { name: 'Grey', token: '--color-text-grey' },
  { name: 'Light Grey', token: '--color-text-light-grey' },
  { name: 'Success', token: '--color-text-success' },
  { name: 'Info', token: '--color-text-info' },
  { name: 'Warning', token: '--color-text-warning' },
  { name: 'Error', token: '--color-text-error' },
] as const;

const ICON_TOKENS = [
  { name: 'White', token: '--color-icon-white' },
  { name: 'Black', token: '--color-icon-black' },
  { name: 'Accent', token: '--color-icon-accent' },
  { name: 'Grey', token: '--color-icon-grey' },
  { name: 'Light Grey', token: '--color-icon-light-grey' },
  { name: 'Success', token: '--color-icon-success' },
  { name: 'Info', token: '--color-icon-info' },
  { name: 'Warning', token: '--color-icon-warning' },
  { name: 'Error', token: '--color-icon-error' },
] as const;

const SEMANTIC_GROUPS: ReadonlyArray<SemanticGroup> = [
  { title: 'Surface', tokens: SURFACE_TOKENS },
  { title: 'Text', tokens: TEXT_TOKENS },
  { title: 'Icon', tokens: ICON_TOKENS },
];

function SemanticGroupSection({ group }: { group: SemanticGroup }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--color-text-primary-black)',
          margin: 0,
        }}
      >
        {group.title}
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'var(--spacing-md)',
        }}
      >
        {group.tokens.map((c) => (
          <ColorSwatch key={c.token} name={c.name} token={c.token} />
        ))}
      </div>
    </section>
  );
}

interface PrimitiveRamp {
  name: string;
  prefix: string;
  steps: ReadonlyArray<number>;
  rowBackground?: string;
  labelOnDark?: boolean;
}

const COLOR_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const ALPHA_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

const PRIMITIVE_RAMPS: ReadonlyArray<PrimitiveRamp> = [
  { name: 'Primary', prefix: '--primitive-primary', steps: COLOR_STEPS },
  { name: 'Grey', prefix: '--primitive-grey', steps: COLOR_STEPS },
  { name: 'Green', prefix: '--primitive-green', steps: COLOR_STEPS },
  { name: 'Red', prefix: '--primitive-red', steps: COLOR_STEPS },
  { name: 'Yellow', prefix: '--primitive-yellow', steps: COLOR_STEPS },
  { name: 'Blue', prefix: '--primitive-blue', steps: COLOR_STEPS },
  {
    name: 'White (alpha)',
    prefix: '--primitive-white',
    steps: ALPHA_STEPS,
    rowBackground: 'var(--primitive-grey-900)',
    labelOnDark: true,
  },
  {
    name: 'Black (alpha)',
    prefix: '--primitive-black',
    steps: ALPHA_STEPS,
    rowBackground: 'var(--primitive-white-100)',
  },
];

function RampRow({ ramp }: { ramp: PrimitiveRamp }) {
  const labelColor = ramp.labelOnDark
    ? 'var(--color-text-primary-white)'
    : 'var(--color-text-primary-black)';
  const subLabelColor = ramp.labelOnDark
    ? 'var(--color-text-secondary-white)'
    : 'var(--color-text-secondary-dark-grey)';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-sm) var(--spacing-md)',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: ramp.rowBackground ?? 'var(--color-surface-white)',
        border: '1px solid var(--color-surface-grey)',
      }}
    >
      <span style={{ fontSize: '14px', fontWeight: 600, color: labelColor }}>{ramp.name}</span>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${ramp.steps.length}, 1fr)`,
          gap: 'var(--spacing-xs)',
        }}
      >
        {ramp.steps.map((step) => {
          const token = `${ramp.prefix}-${step}`;
          return (
            <div
              key={step}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
              title={token}
            >
              <div
                aria-hidden
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: 'var(--radius-xxs)',
                  backgroundColor: `var(${token})`,
                  border: '1px solid var(--color-surface-grey)',
                }}
              />
              <span style={{ fontSize: '11px', color: subLabelColor }}>{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PrimitiveSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
      <h2
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--color-text-primary-black)',
          margin: 0,
        }}
      >
        Primitive
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {PRIMITIVE_RAMPS.map((r) => (
          <RampRow key={r.name} ramp={r} />
        ))}
      </div>
    </section>
  );
}

function SemanticSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      <h2
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--color-text-primary-black)',
          margin: 0,
        }}
      >
        Semantic
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        {SEMANTIC_GROUPS.map((g) => (
          <SemanticGroupSection key={g.title} group={g} />
        ))}
      </div>
    </section>
  );
}

interface ColorPaletteProps {
  show: 'primitive' | 'semantic' | 'all';
}

function ColorPalette({ show }: ColorPaletteProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-xl)',
        padding: 'var(--spacing-lg)',
      }}
    >
      {(show === 'primitive' || show === 'all') && <PrimitiveSection />}
      {(show === 'semantic' || show === 'all') && <SemanticSection />}
    </div>
  );
}

const meta = {
  title: 'Tokens/Colors',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primitive: Story = {
  args: { show: 'primitive' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Primitive')).toBeInTheDocument();
    await expect(canvas.getByText('Primary')).toBeInTheDocument();
    await expect(canvas.getByText('White (alpha)')).toBeInTheDocument();
  },
};

export const Semantic: Story = {
  args: { show: 'semantic' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Surface')).toBeInTheDocument();
    await expect(canvas.getByText('Primary / Black')).toBeInTheDocument();
  },
};

export const All: Story = {
  args: { show: 'all' },
};
