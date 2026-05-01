import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z-%EC%9D%B4%EA%B1%B0-%EB%AC%B4%EC%A1%B0%EA%B1%B4-%EB%81%9D%EA%B9%8C%EC%A7%80-%EB%81%9D%EB%82%B8%EB%8B%A4?node-id=32-2';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  args: {
    children: 'Button',
    variant: 'filled',
    size: 'medium',
  },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline', 'clear'] },
    size: { control: 'select', options: ['giant', 'large', 'medium', 'small', 'tiny'] },
    state: {
      control: 'select',
      options: [undefined, 'default', 'hover', 'focus', 'press', 'disabled'],
    },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M10 12L6 8l4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Default: Story = {};

export const Filled: Story = { args: { variant: 'filled' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Clear: Story = { args: { variant: 'clear' } };

export const Giant: Story = { args: { size: 'giant' } };
export const Large: Story = { args: { size: 'large' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Small: Story = { args: { size: 'small' } };
export const Tiny: Story = { args: { size: 'tiny' } };

export const StateHover: Story = { args: { state: 'hover' } };
export const StateFocus: Story = { args: { state: 'focus' } };
export const StatePress: Story = { args: { state: 'press' } };
export const StateDisabled: Story = { args: { state: 'disabled' } };

export const WithLeftIcon: Story = { args: { leftIcon: <ArrowLeft /> } };
export const WithRightIcon: Story = { args: { rightIcon: <ArrowRight /> } };
export const WithBothIcons: Story = {
  args: { leftIcon: <ArrowLeft />, rightIcon: <ArrowRight /> },
};
export const IconOnly: Story = {
  args: { iconOnly: true, 'aria-label': 'Next', children: <ArrowRight /> },
};

const sizes = ['giant', 'large', 'medium', 'small', 'tiny'] as const;
const variants = ['filled', 'outline', 'clear'] as const;
const states = ['default', 'hover', 'focus', 'press', 'disabled'] as const;

export const SizeMatrix: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-md)',
        alignItems: 'flex-start',
      }}
    >
      {sizes.map((s) => (
        <Button key={s} {...args} size={s}>
          {s}
        </Button>
      ))}
    </div>
  ),
};

export const VariantMatrix: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
      {variants.map((v) => (
        <Button key={v} {...args} variant={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
};

export const StateMatrix: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
      {variants.map((v) => (
        <div key={v} style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
          {states.map((st) => (
            <Button key={`${v}-${st}`} {...args} variant={v} state={st}>
              {st}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const PlayFocus: Story = {
  args: { children: 'Focus me' },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    button?.focus();
  },
};
