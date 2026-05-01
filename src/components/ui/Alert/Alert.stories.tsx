import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Alert } from './Alert';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=88-1264';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: FIGMA_URL,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '418px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['default', 'success', 'info', 'warning', 'error'],
    },
    styleVariant: {
      control: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  args: {
    state: 'default',
    styleVariant: 'filled',
    title: 'Title',
    description: 'Get immediate alerts and a notification badge.',
    leftButton: { label: 'Button' },
    rightButton: { label: 'Button' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledDefault: Story = {
  args: { state: 'default', styleVariant: 'filled' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('Title')).toBeInTheDocument();
    await expect(canvas.getAllByRole('button')).toHaveLength(2);
  },
};

export const FilledSuccess: Story = {
  args: { state: 'success', styleVariant: 'filled' },
};

export const FilledInfo: Story = {
  args: { state: 'info', styleVariant: 'filled' },
};

export const FilledWarning: Story = {
  args: { state: 'warning', styleVariant: 'filled' },
};

export const FilledError: Story = {
  args: { state: 'error', styleVariant: 'filled' },
};

export const OutlineDefault: Story = {
  args: { state: 'default', styleVariant: 'outline' },
};

export const OutlineSuccess: Story = {
  args: { state: 'success', styleVariant: 'outline' },
};

export const OutlineInfo: Story = {
  args: { state: 'info', styleVariant: 'outline' },
};

export const OutlineWarning: Story = {
  args: { state: 'warning', styleVariant: 'outline' },
};

export const OutlineError: Story = {
  args: { state: 'error', styleVariant: 'outline' },
};

export const NoIcon: Story = {
  args: { icon: false },
};

export const TitleOnly: Story = {
  args: {
    description: undefined,
    leftButton: null,
    rightButton: null,
  },
};

export const NoButtons: Story = {
  args: {
    leftButton: null,
    rightButton: null,
  },
};

export const SingleButton: Story = {
  args: {
    rightButton: null,
  },
};
