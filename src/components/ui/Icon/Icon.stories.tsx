import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { ICON_NAMES, type IconName } from './icons';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z-%EC%9D%B4%EA%B1%B0-%EB%AC%B4%EC%A1%B0%EA%B1%B4-%EB%81%9D%EA%B9%8C%EC%A7%80-%EB%81%9D%EB%82%B8%EB%8B%A4?node-id=34-813';

const meta = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Figma Navigation 프레임의 76개 화살표/네비게이션 아이콘을 lucide-react로 매핑한 컴포넌트. `name` prop으로 아이콘 선택, `size`로 16/24px 지정.',
      },
    },
  },
  args: {
    name: 'arrow-right',
    size: 24,
  },
  argTypes: {
    name: { control: 'select', options: ICON_NAMES },
    size: { control: 'inline-radio', options: [16, 24] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Size16: Story = { args: { size: 16 } };
export const Size24: Story = { args: { size: 24 } };

export const WithAriaLabel: Story = {
  args: { name: 'arrow-left', 'aria-label': '뒤로 가기' },
};

const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
  gap: 'var(--spacing-md)',
  padding: 'var(--spacing-md)',
};
const cell: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--spacing-xs)',
  padding: 'var(--spacing-sm)',
  border: '1px solid var(--primitive-grey-200)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '11px',
  color: 'var(--color-text-secondary)',
  textAlign: 'center',
  wordBreak: 'break-all',
};

export const Gallery: Story = {
  parameters: {
    docs: {
      description: { story: 'Figma Navigation 프레임의 모든 아이콘을 24px로 표시.' },
    },
  },
  render: () => (
    <div style={grid}>
      {ICON_NAMES.map((name) => (
        <div key={name} style={cell}>
          <Icon name={name} size={24} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const SizeMatrix: Story = {
  parameters: {
    docs: { description: { story: '동일 아이콘을 16px / 24px로 비교.' } },
  },
  render: () => {
    const samples: IconName[] = [
      'arrow-left',
      'arrow-right',
      'nav-arrow-down',
      'fast-arrow-up',
      'arrow-up-circle',
      'more-horiz',
      'compass',
      'sidebar-expand',
    ];
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gap: 'var(--spacing-md)',
          alignItems: 'center',
          padding: 'var(--spacing-md)',
        }}
      >
        <strong style={{ fontSize: 12 }}>name</strong>
        <strong style={{ fontSize: 12, textAlign: 'center' }}>16px</strong>
        <strong style={{ fontSize: 12, textAlign: 'center' }}>24px</strong>
        {samples.map((n) => (
          <>
            <span key={`l-${n}`} style={{ fontSize: 12 }}>
              {n}
            </span>
            <span
              key={`s-${n}`}
              style={{ display: 'inline-flex', justifyContent: 'center' }}
            >
              <Icon name={n} size={16} />
            </span>
            <span
              key={`m-${n}`}
              style={{ display: 'inline-flex', justifyContent: 'center' }}
            >
              <Icon name={n} size={24} />
            </span>
          </>
        ))}
      </div>
    );
  },
};

export const ColorInheritance: Story = {
  parameters: {
    docs: {
      description: {
        story: '아이콘은 `currentColor`를 사용하므로 부모 텍스트 색상을 상속.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', padding: 'var(--spacing-md)' }}>
      <div style={{ color: 'var(--color-text-primary-black)' }}>
        <Icon name="arrow-right" />
      </div>
      <div style={{ color: 'var(--color-text-accent)' }}>
        <Icon name="arrow-right" />
      </div>
      <div style={{ color: 'var(--color-text-disabled)' }}>
        <Icon name="arrow-right" />
      </div>
      <div style={{ color: 'var(--primitive-primary-500)' }}>
        <Icon name="arrow-right" />
      </div>
    </div>
  ),
};

export const PlayRendersIcon: Story = {
  args: { name: 'arrow-right', 'aria-label': '다음' },
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg[data-icon="arrow-right"]');
    if (!svg) throw new Error('icon svg not found');
  },
};
