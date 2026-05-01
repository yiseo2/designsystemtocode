import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { NavbarBottomItem } from './NavbarBottomItem';

function StarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=116-1271';

const meta = {
  title: 'UI/NavbarBottomItem',
  component: NavbarBottomItem,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: FIGMA_URL,
    },
    layout: 'centered',
  },
  args: {
    icon: <StarIcon />,
    label: 'Home',
    onClick: fn(),
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['selected', 'inactive'] },
    appearance: { control: 'inline-radio', options: ['line', 'text'] },
    label: { control: 'text' },
  },
} satisfies Meta<typeof NavbarBottomItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedLine: Story = {
  args: { state: 'selected', appearance: 'line' },
};

export const InactiveLine: Story = {
  args: { state: 'inactive', appearance: 'line' },
};

export const SelectedText: Story = {
  args: { state: 'selected', appearance: 'text' },
};

export const InactiveText: Story = {
  args: { state: 'inactive', appearance: 'text' },
};

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: 'var(--spacing-md)',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'var(--color-text-secondary-dark-grey)',
      }}
    >
      <span />
      <span style={{ textAlign: 'center' }}>Selected</span>
      <span style={{ textAlign: 'center' }}>Inactive</span>

      <span>Line</span>
      <NavbarBottomItem {...args} state="selected" appearance="line" />
      <NavbarBottomItem {...args} state="inactive" appearance="line" />

      <span>Text</span>
      <NavbarBottomItem {...args} state="selected" appearance="text" />
      <NavbarBottomItem {...args} state="inactive" appearance="text" />
    </div>
  ),
};

export const Interactive: Story = {
  args: { state: 'inactive', appearance: 'text', label: 'Home' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Home' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
