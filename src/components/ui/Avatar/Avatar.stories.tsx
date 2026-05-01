import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, type AvatarSize } from './Avatar';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z-%EC%9D%B4%EA%B1%B0-%EB%AC%B4%EC%A1%B0%EA%B1%B4-%EB%81%9D%EA%B9%8C%EC%A7%80-%EB%81%9D%EB%82%B8%EB%8B%A4?node-id=104-2206';

const SAMPLE_IMG =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=192&h=192&fit=crop&crop=faces';

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    <path
      d="M8 14c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  args: {
    size: 'xxxl-giant',
    type: 'image',
    status: false,
    src: SAMPLE_IMG,
    alt: 'User avatar',
    letter: 'A',
    icon: <SmileIcon />,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'giant', 'xl-giant', 'xxl-giant', 'xxxl-giant'],
    },
    type: { control: 'select', options: ['image', 'letter', 'icon'] },
    status: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
    letter: { control: 'text' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Image: Story = { args: { type: 'image' } };
export const Letter: Story = { args: { type: 'letter' } };
export const Icon: Story = { args: { type: 'icon' } };

export const WithStatus: Story = { args: { status: true } };

export const Tiny: Story = { args: { size: 'tiny' } };
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };
export const Giant: Story = { args: { size: 'giant' } };
export const XlGiant: Story = { args: { size: 'xl-giant' } };
export const XxlGiant: Story = { args: { size: 'xxl-giant' } };
export const XxxlGiant: Story = { args: { size: 'xxxl-giant' } };

const sizes: AvatarSize[] = [
  'xxxl-giant',
  'xxl-giant',
  'xl-giant',
  'giant',
  'large',
  'medium',
  'small',
  'tiny',
];

export const SizeMatrix: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {sizes.map((s) => (
        <Avatar key={s} {...args} size={s} />
      ))}
    </div>
  ),
};

export const TypeMatrix: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
      {(['image', 'letter', 'icon'] as const).map((t) => (
        <div key={t} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          {sizes.map((s) => (
            <Avatar key={`${t}-${s}`} {...args} type={t} size={s} status />
          ))}
        </div>
      ))}
    </div>
  ),
};

export const PlayRendersImage: Story = {
  args: { type: 'image' },
  play: async ({ canvasElement }) => {
    const img = canvasElement.querySelector('img');
    img?.focus();
  },
};
