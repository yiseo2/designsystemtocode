import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Card } from './Card';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=270-9889';

const SAMPLE_IMAGE =
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700&auto=format&fit=crop&q=80';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    design: { type: 'figma', url: FIGMA_URL },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    orientation: 'vertical',
    imageSrc: SAMPLE_IMAGE,
    imageAlt: 'Sample',
    title: 'Title',
    description: 'Keep your messages short, but make sure they cover everything you need to say.',
    primaryButton: { label: 'Button' },
    secondaryButton: { label: 'Button' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '452px' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Title')).toBeInTheDocument();
    await expect(canvas.getAllByRole('button')).toHaveLength(2);
  },
};

export const VerticalNoTitle: Story = {
  args: { orientation: 'vertical', title: null },
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '452px' }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalNoDescription: Story = {
  args: { orientation: 'vertical', description: null },
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '452px' }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalNoTextBlock: Story = {
  args: { orientation: 'vertical', title: null, description: null },
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '452px' }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalPrimaryOnly: Story = {
  args: { orientation: 'vertical', secondaryButton: null },
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '452px' }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalNoButtons: Story = {
  args: {
    orientation: 'vertical',
    primaryButton: null,
    secondaryButton: null,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '452px' }}>
        <Story />
      </div>
    ),
  ],
};

export const HorizontalSmall: Story = {
  args: { orientation: 'horizontal' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Title')).toBeInTheDocument();
    await expect(canvas.queryAllByRole('button')).toHaveLength(0);
  },
};

export const HorizontalNoTitle: Story = {
  args: { orientation: 'horizontal', title: null },
};
