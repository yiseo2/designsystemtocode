import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

interface ScaleRowProps {
  name: string;
  token: string;
  reference?: string;
  value: string;
  visual: 'bar' | 'radius';
}

function ScaleRow({ name, token, reference, value, visual }: ScaleRowProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 220px 1fr',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-sm) var(--spacing-md)',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: 'var(--color-surface-white)',
        border: '1px solid var(--color-surface-grey)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--color-text-primary-black)',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: '12px',
            color: 'var(--color-text-secondary-dark-grey)',
          }}
        >
          {value}
        </span>
      </div>
      <code
        style={{
          fontSize: '12px',
          color: 'var(--color-text-secondary-dark-grey)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        title={reference ? `${token} → ${reference}` : token}
      >
        {token}
        {reference ? ` → ${reference}` : ''}
      </code>
      {visual === 'bar' ? (
        <div
          aria-hidden
          style={{
            width: `var(${token})`,
            height: '24px',
            minWidth: '1px',
            backgroundColor: 'var(--color-surface-accent)',
            borderRadius: 'var(--radius-xxs)',
          }}
        />
      ) : (
        <div
          aria-hidden
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: 'var(--color-surface-accent)',
            borderRadius: `var(${token})`,
            border: '1px solid var(--color-text-accent)',
          }}
        />
      )}
    </div>
  );
}

interface ScaleSectionProps {
  title: string;
  rows: ReadonlyArray<Omit<ScaleRowProps, 'visual'>>;
  visual: 'bar' | 'radius';
}

function ScaleSection({ title, rows, visual }: ScaleSectionProps) {
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
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {rows.map((r) => (
          <ScaleRow key={r.token} {...r} visual={visual} />
        ))}
      </div>
    </section>
  );
}

const PRIMITIVE_SPACING = [
  { name: 'spacing-0', token: '--primitive-spacing-0', value: '0px' },
  { name: 'spacing-1', token: '--primitive-spacing-1', value: '4px' },
  { name: 'spacing-2', token: '--primitive-spacing-2', value: '8px' },
  { name: 'spacing-3', token: '--primitive-spacing-3', value: '12px' },
  { name: 'spacing-4', token: '--primitive-spacing-4', value: '16px' },
  { name: 'spacing-5', token: '--primitive-spacing-5', value: '20px' },
  { name: 'spacing-6', token: '--primitive-spacing-6', value: '24px' },
] as const;

const SEMANTIC_SPACING = [
  { name: 'none', token: '--spacing-none', reference: '--primitive-spacing-0', value: '0px' },
  { name: 'xxs', token: '--spacing-xxs', reference: '--primitive-spacing-1', value: '4px' },
  { name: 'xs', token: '--spacing-xs', reference: '--primitive-spacing-2', value: '8px' },
  { name: 'sm', token: '--spacing-sm', reference: '--primitive-spacing-3', value: '12px' },
  { name: 'md', token: '--spacing-md', reference: '--primitive-spacing-4', value: '16px' },
  { name: 'lg', token: '--spacing-lg', reference: '--primitive-spacing-5', value: '20px' },
  { name: 'xl', token: '--spacing-xl', reference: '--primitive-spacing-6', value: '24px' },
] as const;

const RADIUS = [
  { name: 'xxs', token: '--radius-xxs', value: '4px' },
  { name: 'xs', token: '--radius-xs', value: '8px' },
  { name: 'sm', token: '--radius-sm', value: '12px' },
  { name: 'md', token: '--radius-md', value: '16px' },
  { name: 'lg', token: '--radius-lg', value: '20px' },
  { name: 'xl', token: '--radius-xl', value: '24px' },
] as const;

interface ScalePageProps {
  sections: ReadonlyArray<{
    title: string;
    rows: ReadonlyArray<Omit<ScaleRowProps, 'visual'>>;
    visual: 'bar' | 'radius';
  }>;
}

function ScalePage({ sections }: ScalePageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-xl)',
        padding: 'var(--spacing-lg)',
      }}
    >
      {sections.map((s) => (
        <ScaleSection key={s.title} {...s} />
      ))}
    </div>
  );
}

const meta = {
  title: 'Tokens/Spacing',
  component: ScalePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ScalePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primitive: Story = {
  args: {
    sections: [{ title: 'Spacing — Primitive', rows: PRIMITIVE_SPACING, visual: 'bar' }],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Spacing — Primitive')).toBeInTheDocument();
    await expect(canvas.getByText('spacing-6')).toBeInTheDocument();
  },
};

export const Semantic: Story = {
  args: {
    sections: [{ title: 'Spacing — Semantic', rows: SEMANTIC_SPACING, visual: 'bar' }],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Spacing — Semantic')).toBeInTheDocument();
    await expect(canvas.getByText('md')).toBeInTheDocument();
  },
};

export const Radius: Story = {
  args: {
    sections: [{ title: 'Radius', rows: RADIUS, visual: 'radius' }],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Radius')).toBeInTheDocument();
    await expect(canvas.getByText('xl')).toBeInTheDocument();
  },
};

export const All: Story = {
  args: {
    sections: [
      { title: 'Spacing — Primitive', rows: PRIMITIVE_SPACING, visual: 'bar' },
      { title: 'Spacing — Semantic', rows: SEMANTIC_SPACING, visual: 'bar' },
      { title: 'Radius', rows: RADIUS, visual: 'radius' },
    ],
  },
};
